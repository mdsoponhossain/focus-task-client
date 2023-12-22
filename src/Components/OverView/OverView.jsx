import { MdOutlineAssignmentTurnedIn, MdOutlineWifiProtectedSetup, MdLibraryBooks } from "react-icons/md"
import BartChart from "../BarChart/BartChart";
import Piechart from "../PieChart/Piechart";
import moment from "moment/moment";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const OverView = () => {
    const date = moment().format('MMMM Do YYYY');
    const {user} = useContext(AuthContext)
    console.log(user)

    return (
        <div className="bg-indigo-50">
            <div className="flex justify-evenly items-center h-14 ">
                <div className="w-1/2">
                    <span className="text-3xl font-bold">Dashboard</span>
                    <span className="ml-3">{date}</span>
                </div>
                <p>+ Create</p>
                <p className="w-12 h-12 rounded-3xl border-4"><img src={user?.photoURL} alt="" /></p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-2xl text-center font-bold text-blue-600 uppercase">

                <div className="w-[200px] bg-slate-50 rounded-lg h-[200px] p-6 border-4">
                    <span className="grid justify-center">
                        <MdLibraryBooks className="text-center"></MdLibraryBooks>
                    </span>
                    <h1>To-dos</h1>
                    <p className="text-sm text-slate-700 lowercase mt-7 font-medium">20 Task</p>
                </div>

                <div className="w-[200px] bg-slate-50 rounded-lg p-6 h-[200px] border-4">
                    <span className="grid justify-center">
                        <MdOutlineWifiProtectedSetup className="inline-block"></MdOutlineWifiProtectedSetup>
                    </span>
                    <h1>On going</h1>
                    <p className="text-sm text-slate-700 lowercase mt-7 font-medium">18 Task</p>
                </div>

                <div className="w-[200px] bg-slate-50 rounded-lg p-6 h-[200px] border-4">
                    <span className="grid justify-center">
                        < MdOutlineAssignmentTurnedIn></MdOutlineAssignmentTurnedIn>
                    </span>
                    <h1> Completed</h1>
                    <p className="text-sm text-slate-700 lowercase mt-7 font-medium">12 Task</p>
                </div>

            </div>
            {/* pie chart & bar chart */}
            <div className="flex items-center mt-5 gap-4">
                <div className="w-1/2 h-[500px] border-4"> bar chart
                    <BartChart></BartChart>

                </div>

                <div className="w-1/2 h-[500px] border-4">
                    pie chart
                    <Piechart></Piechart>

                </div>
            </div>
        </div>
    );
};

export default OverView;