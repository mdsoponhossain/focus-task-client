import Banner from "./Components/Banner/Banner";
import WhoFindValue from "./Components/Banner/WhoFindValue/WhoFindValue";
import BestPlan from "./Components/BestPlan/BestPlan";


const HomePage = () => {
    return (
        <div>
            <h1>This is home page</h1>
            <Banner></Banner>
             <WhoFindValue></WhoFindValue>
           <BestPlan></BestPlan>
        </div>
    );
};

export default HomePage;