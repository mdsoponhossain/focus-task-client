import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const Piechart = ({ pieChartData }) => {
    console.log(pieChartData)
    const v1 = pieChartData.todos;
    const v2 = pieChartData.ongoing;
    const v3 = pieChartData.completed;
    const v4 = pieChartData.deleted;
    const data = [
        { name: 'Todos', value: v1 },
        { name: 'OnGoing', value: v2 },
        { name: 'Completed', value: v3 },
        { name: 'Deleted', value: v4 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (

        <div className='w-[250px] h-[250px] '>
            <PieChart width={350} height={350}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend></Legend>
            </PieChart>
        </div>

    );
};

export default Piechart;