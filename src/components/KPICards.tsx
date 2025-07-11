import React from 'react';
import CountUp from 'react-countup';

interface KPICardsProps {
  filters: {
    [key: string]: string; // Enables dynamic string keys like 'subActivity'
  };
}

interface KPIItem {
  title: string;
  planned: number;
  executed: number;
  girlsBenefited: number;
  boysBenefited: number;
}

const dummyKPIData: KPIItem[] = [
  {
    title: 'New Classroom Construction',
    planned: 45,
    executed: 38,
    girlsBenefited: 210,
    boysBenefited: 190,
  },
  {
    title: 'Toilet Construction',
    planned: 30,
    executed: 28,
    girlsBenefited: 180,
    boysBenefited: 150,
  },
  {
    title: 'Drinking Water Facilities',
    planned: 20,
    executed: 19,
    girlsBenefited: 120,
    boysBenefited: 130,
  },
  {
    title: 'Boundary Wall Construction',
    planned: 10,
    executed: 8,
    girlsBenefited: 90,
    boysBenefited: 85,
  },
  {
    title: 'Kitchen Shed Construction',
    planned: 12,
    executed: 12,
    girlsBenefited: 110,
    boysBenefited: 105,
  },
  {
    title: 'Repair and Renovation',
    planned: 25,
    executed: 22,
    girlsBenefited: 170,
    boysBenefited: 160,
  },
  {
    title: 'Smart Class Development',
    planned: 18,
    executed: 16,
    girlsBenefited: 140,
    boysBenefited: 135,
  },
  {
    title: 'Seating Arrangement',
    planned: 50,
    executed: 48,
    girlsBenefited: 240,
    boysBenefited: 230,
  },
  {
    title: 'School Playground Development',
    planned: 7,
    executed: 6,
    girlsBenefited: 75,
    boysBenefited: 80,
  },
  {
    title: 'Other Infra Development',
    planned: 15,
    executed: 14,
    girlsBenefited: 100,
    boysBenefited: 95,
  },
  {
    title: 'Utthan Program',
    planned: 40,
    executed: 36,
    girlsBenefited: 200,
    boysBenefited: 210,
  },
  {
    title: 'Adani Competitive Coaching Centre',
    planned: 8,
    executed: 12,
    girlsBenefited: 60,
    boysBenefited: 50,
  },
];

const KPICards: React.FC<KPICardsProps> = ({ filters }) => {
  const filteredData = dummyKPIData.filter((item) => {
    if (!filters.subActivity) return true;
    return item.title === filters.subActivity;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredData.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-[#6B1E82] mb-2">{item.title}</h3>
          <p>
            <span className="font-medium">Planned:</span>{' '}
            <CountUp end={item.planned} duration={1.2} />
          </p>
          <p>
            <span className="font-medium">Executed:</span>{' '}
            <CountUp end={item.executed} duration={1.2} />
          </p>
          <p>
            <span className="font-medium">Girls Benefited:</span>{' '}
            <CountUp end={item.girlsBenefited} duration={1.2} />
          </p>
          <p>
            <span className="font-medium">Boys Benefited:</span>{' '}
            <CountUp end={item.boysBenefited} duration={1.2} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default KPICards;
