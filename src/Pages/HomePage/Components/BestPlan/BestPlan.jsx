

const BestPlan = () => {
    return (
        <div className=" py-12 from-indigo-500  via-purple-500 to-pink-500 ">
            <div className="bg-gradient-to-r w-full pb-20 ">
                <h1 className="text-center text-white mt-12 mb-12 text-4xl font-bold font-serif">Pick Your Best Plan</h1>
                <div className="flex justify-between  h-[360px]  w-[800px] mx-auto">
                    <div className="h-[400px] rounded-xl bg-white text-black p-3 w-[300px]  border-4">
                        <h1 className="text-center text-2xl mb-6 font-bold font-serif">Starter Plan</h1>
                        <p>Fits for personal to organize your individual productivity</p>
                        <h1 className="font-bold my-3 text-xl">Free</h1>
                        <ul>
                            <li>Up to 450 task</li>
                            <li>Up to 3 team members</li>
                            <li>Team projects up to 10</li>
                        </ul>
                        <hr className="mt-3"></hr>
                        <div className="text-center my-16">
                            <button className="btn w-full btn-secondary">Choose</button>
                        </div>
                    </div>

                    <div className="h-[400px] rounded-xl bg-white text-black p-3 w-[300px] border-4">
                        <h1 className="text-center text-2xl mb-6  font-bold font-serif" >Professional Plan</h1>
                        <p>Fits for personal amd small team. Set all collaborator feature</p>
                        <h1 className="text-md font-bold my-3">$18/Month</h1>
                        <ul>
                            <li>Up to 2000 task</li>
                            <li>Up to 10 team members</li>
                            <li>Team projects up to 100+</li>
                        </ul>
                        <hr className="mt-3"></hr>
                        <div className="text-center my-16">
                            <button className="btn w-full btn-secondary">Choose</button>
                        </div>
                    </div>
                </div>

                <div className=" rounded-xl h-[400px] bg-white text-black p-3  -mt-[400px] lg:ml-[500px] sticky w-[300px] flex-grow   border-4 ">
                    <h1 className="text-center text-2xl mb-6  font-bold font-serif">Team Plan</h1>
                    <p>Fits for company to support projects and collaborator feature</p>
                    <h1 className="text-md font-bold my-3">$30/Month</h1>
                    <ul type='disc'>
                        <li>Unlimited task</li>
                        <li>Unlimited team members</li>
                        <li>Unlimited Team projects </li>
                    </ul>
                    <hr className="mt-3"></hr>
                    <div className="text-center my-16">
                        <button className="btn w-full btn-secondary">Choose</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BestPlan;