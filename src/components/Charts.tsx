import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface ChartsProps {
  filters: {
    [key: string]: string;
  };
}

interface PieChartData {
  name: string;
  value: number;
}

interface BarChartData {
  name: string;
  Planned: number;
  Executed: number;
}

const COLORS = ['#6B1E82', '#E6518B', '#8884d8', '#82ca9d'];

const pieData: PieChartData[] = [
  { name: 'Girls Benefited', value: 620 },
  { name: 'Boys Benefited', value: 600 },
];

const barData: BarChartData[] = [
  { name: 'Classrooms', Planned: 45, Executed: 38 },
  { name: 'Toilets', Planned: 30, Executed: 28 },
  { name: 'Smart Classes', Planned: 18, Executed: 16 },
  { name: 'Benches', Planned: 50, Executed: 48 },
];

const gaugeData = 80; // Example % completion

const Charts: React.FC<ChartsProps> = ({ filters }) => {
  console.log(filters); // 👈 Keeps TypeScript happy for now

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Bar Chart */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-[#6B1E82] mb-2">Planned vs Executed (Bar)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Planned" fill="#6B1E82" />
            <Bar dataKey="Executed" fill="#E6518B" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold text-[#6B1E82] mb-2">Gender-wise Beneficiaries (Pie)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Gauge Chart */}
      <div className="bg-white rounded-lg shadow-md p-4 md:col-span-2">
        <h2 className="text-lg font-semibold text-[#6B1E82] mb-2">Overall Completion Gauge</h2>
        <div className="w-full flex items-center justify-center">
          <svg width="200" height="120">
            <circle cx="100" cy="100" r="90" fill="none" stroke="#eee" strokeWidth="15" />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#6B1E82"
              strokeWidth="15"
              strokeDasharray={`${(gaugeData / 100) * 565}, 565`}
              transform="rotate(-90 100 100)"
            />
            <text x="100" y="110" textAnchor="middle" fontSize="24" fill="#6B1E82">
              {gaugeData}%
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Charts;
