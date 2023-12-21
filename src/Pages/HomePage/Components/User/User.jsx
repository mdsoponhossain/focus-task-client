

const User = ({user}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="h-32 w-full" src={user?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-center">{user?.title}</h2>
                <p className="text-justify">{user?.description}</p>
                
            </div>
        </div>
    );
};

export default User;