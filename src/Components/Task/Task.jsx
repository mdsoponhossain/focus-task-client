
const Task = ({ task }) => {
    return (
        <div className="card w-full bg-base-100 rounded-none shadow-xl font-serif border mt-3">

            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="md:card-title">Deadline: {task.date}</h2>
                    <h2 className="md:card-title">Priority: {task.priority}<br></br>Status: {task.status}</h2>
                </div>
                <h2 className="md:card-title">Title: {task.title}</h2>
                <p>Description: {task.description}</p>

            </div>
        </div>
    );
};

export default Task;