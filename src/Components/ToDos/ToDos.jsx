import { useQuery } from "@tanstack/react-query";
import useUser from "../../Hooks/useUser";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SingleTodos from "../SingleTodos/SingleTodos";


const ToDos = () => {
    const email = useUser();
    const axiosPublic = useAxiosPublic();
    console.log(email);

    const {data:allToDos=[]} = useQuery({
        queryKey: ['to-dos'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/all-todos?user=${email}`)
            return res.data
        }
    })
    console.log(allToDos)

    return (
        <div className="scroll">
           <h1>this is todos collection</h1>
           <div>
            {
                allToDos.map((todo,index)=><SingleTodos key={index} todo={todo} ></SingleTodos>)
            }
            </div> 
        </div>
    );
};

export default ToDos;