import { MdOutlineAssignmentTurnedIn, MdOutlineWifiProtectedSetup, MdLibraryBooks } from "react-icons/md"
import BartChart from "../BarChart/BartChart";
import Piechart from "../PieChart/Piechart";
import moment from "moment/moment";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaEdit, FaEye } from "react-icons/fa";
import { IoMdAddCircle, IoMdTrash } from "react-icons/io";

const OverView = () => {
    const date = moment().format('MMMM Do YYYY');
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    console.log(user.email)

    // todos counts ;
    const { data: todos = [] } = useQuery({
        queryKey: ['todos-count'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-todos?user=${user?.email}`)
            return res.data
        }
    })

    // task data for table
    const todosTask = todos.filter(singleTask => singleTask.status === 'to-dos');
    const ongoingTask = todos.filter(singleTask => singleTask.status === 'ongoing');
    const completedTask = todos.filter(singleTask => singleTask.status === 'completed');
    const deletedTask = todos.filter(singleTask => singleTask.status === 'deleted');
    console.log(ongoingTask)

    // for pieChart;
    const pieChartData = { deleted: deletedTask.length, todos: todosTask?.length, ongoing: ongoingTask?.length, completed: completedTask?.length, deleted: deletedTask.length };
    console.log(pieChartData)

    return (
        <div className="bg-indigo-50">
            <div className="flex justify-evenly items-center h-28 ">
                <div className="w-1/2">
                    <span className="text-3xl font-bold">Dashboard</span>
                    <span className="ml-3 block md:inline">{date}</span>
                </div>

                <p className=" grid justify-center">
                    <img className="w-12 md:block hidden h-12 rounded-3xl " src={user?.photoURL} alt="" />
                    <span className="block text-sm md:text-xl">{user && user.displayName}</span>
                </p>
            </div>
            <h1 className="text-3xl text-center font-serif font-bold text-blue-600">Tasks</h1>
            <div className="flex gap-7 mb-5 justify-center  h-14 items-center">
                <Link to='/dashboard/add-task'><p className="w-fit  gap-2 flex"><span className="text-2xl font-bold text-blue-700"><IoMdAddCircle></IoMdAddCircle></span><span> Create</span></p></Link>
                <Link to='/dashboard/edit-task'><p className="w-fit  gap-2 flex"><span className="text-2xl font-bold text-blue-700"><FaEdit></FaEdit></span><span> Edit </span></p></Link>

                <Link to='/dashboard/all-task'><p className="w-fit  gap-2 flex"><span className="text-2xl font-bold text-blue-700"><FaEye></FaEye></span><span> View All</span></p></Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm md:text-2xl text-center font-bold text-blue-600 uppercase">

                <div className="md:w-[200px] bg-slate-50 md:rounded-lg w-full h-[200px] p-6 ">
                    <span className="grid justify-center">
                        <MdLibraryBooks className="text-center"></MdLibraryBooks>
                    </span>
                    <h1>To-dos</h1>
                    <p className="text-sm text-slate-700 lowercase mt-7 font-medium">{todosTask?.length} Task</p>
                </div>

                <div className="w-full md:w-[200px] bg-slate-50 rounded-lg p-6 h-[200px] ">
                    <span className="grid justify-center">
                        <MdOutlineWifiProtectedSetup className="inline-block"></MdOutlineWifiProtectedSetup>
                    </span>
                    <h1>On going</h1>
                    <p className="text-sm text-slate-700 lowercase mt-7 font-medium">{ongoingTask.length} Task</p>
                </div>

                <div className="w-full md:w-[200px] bg-slate-50 rounded-lg p-6 h-[200px] ">
                    <span className="grid justify-center">
                        < MdOutlineAssignmentTurnedIn></MdOutlineAssignmentTurnedIn>
                    </span>
                    <h1> Completed</h1>
                    <p className="text-sm text-slate-700 lowercase mt-7 font-medium">{completedTask.length} Task</p>
                </div>
                <div className="w-full md:w-[200px] bg-slate-50 rounded-lg p-6 h-[200px] ">
                    <span className="grid justify-center">
                        < IoMdTrash></IoMdTrash>
                    </span>
                    <h1> Deleted</h1>
                    <p className="text-sm text-slate-700 lowercase mt-7 font-medium">{deletedTask?.length} Task</p>
                </div>

            </div>
            {/* pie chart & bar chart */}
            <h1 className="text-3xl font-bold font-serif text-center mt-5">Statistics</h1>
            {
                todos?.length === 0 ? <h1 className='text-2xl pb-5 font-bold text-center font-serif text-blue-600'>You haven't create any task yet</h1> :
                    <div className=" md:flex items-center mt-5 gap-4">

                        <div className="w-full md:w-1/2 h-[500px] "> bar chart
                            <BartChart pieChartData={pieChartData}></BartChart>

                        </div>

                        <div className="w-full md:w-1/2 h-[500px] ">
                            pie chart
                            <Piechart pieChartData={pieChartData}></Piechart>
                        </div>
                    </div>
            }

        </div>
    );
};

export default OverView;