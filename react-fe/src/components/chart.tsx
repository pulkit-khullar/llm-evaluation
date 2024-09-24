import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

// Register scales and other necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
    result: any;
}

const Charts: React.FC<Props> = ({ result }) => {

    const r = result?.result || {}

    const scores: number[] = Object.keys(r).filter(x => x !== 'message').map(k => r[k].score);
    console.log(scores)

    const data = {
        labels: Object.keys(r).filter(x => x !== 'message'),
        datasets: [
            {
                label: 'Evaluation Scores',
                data: scores,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const options: ChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Evaluation Results',
            },
        },
    };

    return <Bar data={data} />;
};

export default Charts;
