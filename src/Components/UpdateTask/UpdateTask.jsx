
import { useForm } from "react-hook-form"
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import Swal from "sweetalert2";
const UpdateTask = () => {
    const data = useLoaderData();
   const id = data._id ;
   console.log(id)
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data);
        console.log(id);
        axiosPublic.patch(`update-task/${id}`,data)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Task successfully updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                <div className="flex gap-2 justify-between">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" defaultValue={data.date} {...register("date")} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <select  {...register("priority")}>
                            <option value="low">low</option>
                            <option value="moderate">moderate</option>
                            <option value="high">high</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" defaultValue={data.title} {...register("title")} placeholder="Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea defaultValue={data.description}  {...register("description", { required: true })} placeholder="Write  Description" className="textarea textarea-bordered textarea-md w-full " ></textarea>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-secondary" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;