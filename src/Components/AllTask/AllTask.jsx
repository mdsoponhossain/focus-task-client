import { useQuery } from "@tanstack/react-query";
import useUser from "../../Hooks/useUser";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SingleTodos from "../Task/Task";
import Task from "../Task/Task";

const AllTask = () => {
    const email = useUser();
    const axiosPublic = useAxiosPublic();
    console.log(email);

    const { data: allToDos = [] } = useQuery({
        queryKey: ['to-dos'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-todos?user=${email}`)
            return res.data
        }
    })
    console.log(allToDos)
    return (
        <div className="text-sm md:text-2xl">
            <h1 className="text-center font-bold">Previous Task</h1>
            <div>
                {
                    allToDos.map((task, index) => <Task key={index} task={task}></Task>)
                }
            </div>
        </div>
    );
};

export default AllTask;