import { useForm } from "react-hook-form"

const ToDos = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
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

export default ToDos;