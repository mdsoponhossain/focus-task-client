import { useQuery } from "@tanstack/react-query";
import useUser from "../../Hooks/useUser";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";






const EditTask = () => {
    const [status, setStatus] = useState('')
    const email = useUser();
    const axiosPublic = useAxiosPublic();
    console.log(email);

    const playRole = (e) => {
        setStatus(e.target.value)
    }

    const { data: allTask = [], refetch } = useQuery({
        queryKey: ['all task'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-todos?user=${email}`)
            return res.data
        }
    });

    const task = allTask?.filter(a => a.status !== 'deleted')
    console.log(task)

    const playStatusRole = (id) => {
        console.log(id)
        console.log(status);

        Swal.fire({
            title: "Are you sure to update status?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.patch(`/update-task-status/${id}`, { status })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Changed Status!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });


    }

    // deleted task function:

    const handleDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/deleted-task/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your Task has been deleted",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        });



    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr className="text-xl font-bold">
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
                            <td>{singleTask?.title?.length > 15 ? <span>{singleTask.title.slice(0, 15)}</span> : <span>{singleTask?.title}</span>}</td>
                            <td>{singleTask.status}</td>
                            <td>
                                <select onChange={playRole} name="role" id="role">
                                    <option value="to-dos">To-dos</option>
                                    <option value="ongoing">OnGoing</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </td>
                            <td><button onClick={() => playStatusRole(singleTask._id)} className="btn btn-sm">Comfirm</button></td>
                            <td><Link to={`/dashboard/update-task/${singleTask._id}`}><button className="btn btn-sm">Edit</button></Link></td>
                            <td onClick={() => handleDelete(singleTask._id)} ><button className="btn btn-sm ">Delete</button></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default EditTask;