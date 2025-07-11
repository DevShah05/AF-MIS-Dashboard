import React from 'react';
import { dummyData } from '../Data/dummydata';

interface Filters {
  cluster?: string;
  site?: string;
  activity?: string;
  subActivity?: string;
}

interface DataItem {
  site: string;
  clusterType: string;
  activity: string;
  subActivity?: string;
  [key: string]: string | number | undefined;
}

const fieldMappings: Record<string, string[]> = {
  'New Classroom Construction': [
    'noOfClassroomsPlanned',
    'noOfClassroomsConstructed',
    'girlsBenefited',
    'boysBenefited',
    'uploadImageURL',
  ],
  'Toilet Construction': [
    'noOfGirlsToiletsPlanned',
    'noOfGirlsToiletsConstructed',
    'noOfBoysToiletsPlanned',
    'noOfBoysToiletsConstructed',
    'girlsBenefited',
    'boysBenefited',
    'preImageURL',
    'postImageURL',
  ],
  'Drinking Water Facilities': [
    'noOfUnitsPlanned',
    'noOfUnitsExecuted',
    'girlsBenefited',
    'boysBenefited',
    'uploadImageURL',
  ],
  'Boundary Wall Construction': [
    'noOfUnitsPlanned',
    'noOfUnitsExecuted',
    'lengthInMeters',
    'girlsBenefited',
    'boysBenefited',
    'preImageURL',
    'postImageURL',
  ],
  'Kitchen Shed Construction': [
    'noOfUnitsPlanned',
    'noOfUnitsExecuted',
    'girlsBenefited',
    'boysBenefited',
    'preImageURL',
    'postImageURL',
  ],
  'Repair and Renovation': [
    'noOfUnitsPlanned',
    'noOfUnitsExecuted',
    'workDescription',
    'girlsBenefited',
    'boysBenefited',
    'preImageURL',
    'postImageURL',
  ],
  'Smart Class Development': [
    'noOfSmartClassPlanned',
    'noOfSmartClassExecuted',
    'girlsBenefited',
    'boysBenefited',
    'preImageURL',
    'postImageURL',
  ],
  'Seating Arrangement': [
    'noOfDeskBenchesPlanned',
    'noOfDeskBenchesProvided',
    'girlsBenefited',
    'boysBenefited',
    'uploadImageURL',
  ],
  'School Playground Development': [
    'noOfPlaygroundsPlanned',
    'noOfPlaygroundsDeveloped',
    'girlsBenefited',
    'boysBenefited',
    'preImageURL',
    'postImageURL',
  ],
  'Other Infrastructure Development': [
    'noOfUnitsPlanned',
    'noOfUnitsExecuted',
    'girlsBenefited',
    'boysBenefited',
    'preImageURL',
    'postImageURL',
  ],
  Utthan: [
    'noOfSchoolsCovered',
    'noOfUtthanSahayaksDeployed',
    'girlsBenefited',
    'boysBenefited',
    'outcomePercent',
    'uploadImageURL',
  ],
  'Adani Competitive Coaching Centre': [
    'noOfUnits',
    'noOfResourcePersonsDeployed',
    'maleYouthCovered',
    'femaleYouthCovered',
    'candidatesSelected',
    'uploadImageURL',
  ],
};

const readableField = (key: string): string =>
  key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/URL/, 'Image');

interface Props {
  filters: Filters;
}

const DataTable: React.FC<Props> = ({ filters }) => {
  const filtered: DataItem[] = dummyData.filter((item: DataItem) => {
    return (
      (!filters.cluster || item.clusterType === filters.cluster) &&
      (!filters.site || item.site === filters.site) &&
      (!filters.activity || item.activity === filters.activity) &&
      (!filters.subActivity || item.subActivity === filters.subActivity)
    );
  });

  const currentSub =
    filters.subActivity || filtered[0]?.subActivity || filters.activity || '';
  const fields = fieldMappings[currentSub] || [];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
      <h2 className="text-lg font-semibold text-[#6B1E82] mb-4">Filtered Records</h2>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No data found for selected filters.</p>
      ) : (
        <table className="min-w-full border text-sm">
          <thead className="bg-[#6B1E82] text-white">
            <tr>
              <th className="py-2 px-3">Site</th>
              <th className="py-2 px-3">Cluster</th>
              <th className="py-2 px-3">Activity</th>
              {filters.subActivity && <th className="py-2 px-3">Sub-Activity</th>}
              {fields.map((field) => (
                <th key={field} className="py-2 px-3">
                  {readableField(field)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="py-1 px-3">{row.site}</td>
                <td className="py-1 px-3">{row.clusterType}</td>
                <td className="py-1 px-3">{row.activity}</td>
                {filters.subActivity && (
                  <td className="py-1 px-3">{row.subActivity}</td>
                )}
                {fields.map((key) => (
                  <td key={key} className="py-1 px-3 text-center">
                    {key.includes('URL') ? (
                      row[key] ? (
                        <a
                          href={String(row[key])}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 underline"
                        >
                          View
                        </a>
                      ) : (
                        '-'
                      )
                    ) : (
                      row[key] ?? '-'
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTable;
