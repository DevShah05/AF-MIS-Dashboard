import React from 'react';

interface FiltersProps {
  filters: {
    [key: string]: string; // Allows dynamic string keys like 'cluster', 'site', etc.
  };
  onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  const clusterOptions = ['Cement', 'Non-Cement'];
  const siteOptions = ['Damodar', 'Bargarh', 'Kattupalli', 'Madukkarai', 'Wadi', 'Ahmedabad'];
  const activityOptions = ['School Infrastructure', 'Utthan', 'Adani Competitive Coaching Centre'];
  const subActivityOptions = [
    'New Classroom Construction',
    'Toilet Construction',
    'Drinking Water Facilities',
    'Boundary Wall Construction',
    'Kitchen Shed Construction',
    'Repair and Renovation',
    'Smart Class Development',
    'Seating Arrangement',
    'School Playground Development',
    'Other Infrastructure Development',
  ];

  const renderSelect = (label: string, name: string, options: string[]) => (
    <div className="flex flex-col">
      <label className="text-sm font-semibold mb-1 text-gray-700">{label}</label>
      <select
        name={name}
        value={filters[name] || ''}
        onChange={onFilterChange}
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#6B1E82]"
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-md mb-4">
      {renderSelect('Cluster', 'cluster', clusterOptions)}
      {renderSelect('Site', 'site', siteOptions)}
      {renderSelect('Activity', 'activity', activityOptions)}
      {renderSelect('Sub-Activity', 'subActivity', subActivityOptions)}
    </div>
  );
};

export default Filters;
