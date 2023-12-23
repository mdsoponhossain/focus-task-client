import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector, Cell, } from 'recharts';

const BartChart = ({pieChartData}) => {
    console.log(pieChartData)
    const v1 = pieChartData.todos;
    const v2 = pieChartData.ongoing;
    const v3 = pieChartData.completed;
    const v4 = pieChartData.deleted;
    const data = [
        {
            name: 'Page A',
            todos: v1,
            ongoing: v2,
            completed: v3,
            deleted: v4,
            amt: 240,
        }
    ];

    return (
        <div>
            <BarChart
                width={400}
                height={250}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                <Bar dataKey="todos" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="purple" />} />
                <Bar dataKey="ongoing" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                <Bar dataKey="completed" fill="#FFBB28" activeBar={<Rectangle fill="yellow" stroke="yellow" />} />
                <Bar dataKey="deleted" fill="#00C49F" activeBar={<Rectangle fill="green" stroke="green" />} />
            </BarChart>
        </div>
    );
};

export default BartChart;