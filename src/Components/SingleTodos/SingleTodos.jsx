import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SingleTodos = ({ todo }) => {
    console.log(todo);
    const axiospublic = useAxiosPublic();

    const handleOnGoing = async (id)=>{
        console.log(id);
        const res = await axiospublic.patch(`update-task-status${id}`);
        console.log(res.data)
    }
   
    
    return (
        <div className="card w-full bg-base-100 rounded-none shadow-xl font-serif border mt-3">

            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">Deadline: {todo.date}</h2>
                    <h2 className="card-title">Priority: {todo.priority}</h2>
                </div>
                <h2 className="card-title">Title: {todo.title}</h2>
                <p>Description: {todo.description}</p>
                <div className="flex justify-between items-center">

                    <div className="card-actions justify-end">
                        <button onClick={()=>handleOnGoing(todo._id)} className="btn btn-primary">mark as OnGoing</button>
                        <button className="btn btn-primary">mark as complete</button>
                    </div>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTodos;