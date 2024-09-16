import LineChart from './line-chart';

function BarChart() {
    return <div>Bar Chart</div>;
}

export default function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <BarChart />
            <LineChart />
        </>
    );
}
