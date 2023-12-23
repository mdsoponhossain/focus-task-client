import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Form = () => {
    const {user} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        data.user = user?.email ;
        data.status = "to-dos";
        console.log(data);
        const res = await axiosPublic.post('/add-task',data)
        console.log(res)
        if(res.data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your task has been created",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                <div className="flex gap-2 justify-between">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" {...register("date")} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <select {...register("priority")}>
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
                    <input type="text" {...register("title")} placeholder="Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea  {...register("description", { required: true })} placeholder="Write  Description" className="textarea textarea-bordered textarea-md w-full " ></textarea>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-secondary" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Form;