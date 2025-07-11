import React, { useState } from 'react';
import Header from '../components/Header';
import Filters from '../components/Filters';
import KPICards from '../components/KPICards';
import Charts from '../components/Charts';
import DataTable from '../components/DataTable';
import ImageSlider from '../components/ImageSlider';

interface FiltersState {
  [key: string]: string; // ✅ Dynamic keys allowed
  cluster: string;
  site: string;
  activity: string;
  subActivity: string;
}

const Dashboard: React.FC = () => {
  const [filters, setFilters] = useState<FiltersState>({
    cluster: '',
    site: '',
    activity: '',
    subActivity: '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="p-4 space-y-4">
        <Filters filters={filters} onFilterChange={handleFilterChange} />
        <KPICards filters={filters} />
        <Charts filters={filters} />
        <ImageSlider filters={filters} />
        <DataTable filters={filters} />
      </div>
    </div>
  );
};

export default Dashboard;
