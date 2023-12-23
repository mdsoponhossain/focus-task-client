import { useQuery } from "@tanstack/react-query";
import useUser from "../../Hooks/useUser";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Completed = () => {
   const [status,setStatus] = useState('')
    const email = useUser();
    const axiosPublic = useAxiosPublic();
    console.log(email);

    const playRole =(e)=>{
        setStatus(e.target.value)
    }

    const { data: task = [],refetch } = useQuery({
        queryKey: ['all task'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-todos?user=${email}`)
            return res.data
        }
    });

    const playStatusRole = (id)=>{
        console.log(id)
        console.log(status)
        axiosPublic.patch(`/update-task-status/${id}`,{status})
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch();
            }
        })
    }

    // deleted task function:

    const handleDelete = (id)=>{
        console.log(id);
        axiosPublic.delete(`/deleted-task/${id}`)
        .then(res=>{
            console.log(res.data)
        })
    }

 


    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task Title</th>
                        <th>Status</th>
                        <th>Edit Status</th>
                        <th></th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        task.map((singleTask, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{singleTask?.title?.length < 15 && singleTask.title.slice(0, 15)}</td>
                            <td>{singleTask.status}</td>
                            <td>
                                <select onChange={playRole} name="role" id="role">
                                    <option value="to-dos">To-dos</option>
                                    <option value="ongoing">OnGoing</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </td>
                            <td><button onClick={()=>playStatusRole(singleTask._id)} className="btn">Comfirm</button></td>
                            <td><Link to={`/dashboard/update-task/${singleTask._id}`}>update</Link></td>
                            <td onClick={()=>handleDelete(singleTask._id)}>Delete</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default Completed;