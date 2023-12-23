import { MdOutlineAssignmentTurnedIn, MdOutlineWifiProtectedSetup, MdLibraryBooks } from "react-icons/md"
import BartChart from "../BarChart/BartChart";
import Piechart from "../PieChart/Piechart";
import moment from "moment/moment";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

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
    const todosTask = todos.filter(singleTask=>singleTask.status === 'to-dos');
    const ongoingTask = todos.filter(singleTask=>singleTask.status === 'ongoing');
    const completedTask = todos.filter(singleTask=>singleTask.status === 'completed');
    const deletedTask = todos.filter(singleTask=>singleTask.status === 'deleted');
    console.log(ongoingTask)

    // for pieChart;
    const pieChartData = {todos:todosTask?.length,ongoing:ongoingTask?.length,completed:completedTask?.length,deleted:deletedTask.length};
    console.log(pieChartData)

    return (
        <div className="bg-indigo-50">
            <div className="flex justify-evenly items-center h-14 ">
                <div className="w-1/2">
                    <span className="text-3xl font-bold">Dashboard</span>
                    <span className="ml-3 block md:inline">{date}</span>
                </div>
                <Link to='/dashboard/add-task'><p><span className="text-3xl font-bold text-blue-700">+</span> Create</p></Link>
                <p className="w-12 h-12 rounded-3xl border-4"><img src={user?.photoURL} alt="" /></p>
            </div>
            <div className="grid md:grid-cols-3 gap-3 text-sm md:text-2xl text-center font-bold text-blue-600 uppercase">

                <div className="md:w-[200px] bg-slate-50 md:rounded-lg w-full h-[200px] p-6 border-4">
                    <span className="grid justify-center">
                        <MdLibraryBooks className="text-center"></MdLibraryBooks>
                    </span>
                    <h1>To-dos</h1>
                    <p className="text-sm text-slate-700 lowercase mt-7 font-medium">{todosTask?.length} Task</p>
                </div>

                <div className="w-full md:w-[200px] bg-slate-50 rounded-lg p-6 h-[200px] border-4">
                    <span className="grid justify-center">
                        <MdOutlineWifiProtectedSetup className="inline-block"></MdOutlineWifiProtectedSetup>
                    </span>
                    <h1>On going</h1>
                    <p className="text-sm text-slate-700 lowercase mt-7 font-medium">{ongoingTask.length} Task</p>
                </div>

                <div className="w-full md:w-[200px] bg-slate-50 rounded-lg p-6 h-[200px] border-4">
                    <span className="grid justify-center">
                        < MdOutlineAssignmentTurnedIn></MdOutlineAssignmentTurnedIn>
                    </span>
                    <h1> Completed</h1>
                    <p className="text-sm text-slate-700 lowercase mt-7 font-medium">{completedTask.length} Task</p>
                </div>

            </div>
            {/* pie chart & bar chart */}
            <div className=" md:flex items-center mt-5 gap-4">
                <div className="w-full md:w-1/2 h-[500px] border-4"> bar chart
                    <BartChart pieChartData={pieChartData}></BartChart>

                </div>

                <div className="w-full md:w-1/2 h-[500px] border-4">
                    pie chart
                    <Piechart pieChartData={pieChartData}></Piechart>

                </div>
            </div>
            
        </div>
    );
};

export default OverView;