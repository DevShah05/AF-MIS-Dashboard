// src/Data/dummydata.ts

export interface DataItem {
  site: string;
  clusterType: string;
  activity: string;
  subActivity?: string;
  [key: string]: string | number | undefined;
}

export const dummyData: DataItem[] = [
  // 1. New Classroom Construction
  {
    site: 'Wadi',
    clusterType: 'Cement',
    activity: 'School Infrastructure',
    subActivity: 'New Classroom Construction',
    noOfClassroomsPlanned: 5,
    noOfClassroomsConstructed: 4,
    girlsBenefited: 80,
    boysBenefited: 70,
    uploadImageURL: 'https://placekitten.com/400/300',
  },

  // 2. Toilet Construction
  {
    site: 'Damodar',
    clusterType: 'Non-Cement',
    activity: 'School Infrastructure',
    subActivity: 'Toilet Construction',
    noOfGirlsToiletsPlanned: 6,
    noOfGirlsToiletsConstructed: 5,
    noOfBoysToiletsPlanned: 6,
    noOfBoysToiletsConstructed: 5,
    girlsBenefited: 95,
    boysBenefited: 90,
    preImageURL: 'https://dummyimage.com/400x300',
    postImageURL: 'https://dummyimage.com/400x300',
  },

  // 3. Drinking Water Facilities
  {
    site: 'Bargarh',
    clusterType: 'Cement',
    activity: 'School Infrastructure',
    subActivity: 'Drinking Water Facilities',
    noOfUnitsPlanned: 3,
    noOfUnitsExecuted: 3,
    girlsBenefited: 55,
    boysBenefited: 60,
    uploadImageURL: 'https://dummyimage.com/400x300',
  },

  // 4. Boundary Wall Construction
  {
    site: 'Kattupalli',
    clusterType: 'Non-Cement',
    activity: 'School Infrastructure',
    subActivity: 'Boundary Wall Construction',
    noOfUnitsPlanned: 2,
    noOfUnitsExecuted: 2,
    lengthInMeters: 120,
    girlsBenefited: 40,
    boysBenefited: 50,
    preImageURL: 'https://dummyimage.com/400x300',
    postImageURL: 'https://dummyimage.com/400x300',
  },

  // 5. Kitchen Shed Construction
  {
    site: 'Madukkarai',
    clusterType: 'Cement',
    activity: 'School Infrastructure',
    subActivity: 'Kitchen Shed Construction',
    noOfUnitsPlanned: 2,
    noOfUnitsExecuted: 2,
    girlsBenefited: 35,
    boysBenefited: 30,
    preImageURL: 'https://dummyimage.com/400x300',
    postImageURL: 'https://dummyimage.com/400x300',
  },

  // 6. Repair and Renovation
  {
    site: 'Wadi',
    clusterType: 'Cement',
    activity: 'School Infrastructure',
    subActivity: 'Repair and Renovation',
    noOfUnitsPlanned: 4,
    noOfUnitsExecuted: 4,
    workDescription: 'Roof Repair',
    girlsBenefited: 80,
    boysBenefited: 70,
    preImageURL: 'https://dummyimage.com/400x300',
    postImageURL: 'https://dummyimage.com/400x300',
  },

  // 7. Smart Class Development
  {
    site: 'Damodar',
    clusterType: 'Non-Cement',
    activity: 'School Infrastructure',
    subActivity: 'Smart Class Development',
    noOfSmartClassPlanned: 3,
    noOfSmartClassExecuted: 3,
    girlsBenefited: 60,
    boysBenefited: 70,
    preImageURL: 'https://dummyimage.com/400x300',
    postImageURL: 'https://dummyimage.com/400x300',
  },

  // 8. Seating Arrangement
  {
    site: 'Kattupalli',
    clusterType: 'Cement',
    activity: 'School Infrastructure',
    subActivity: 'Seating Arrangement',
    noOfDeskBenchesPlanned: 30,
    noOfDeskBenchesProvided: 30,
    girlsBenefited: 90,
    boysBenefited: 85,
    uploadImageURL: 'https://dummyimage.com/400x300',
  },

  // 9. School Playground Development
  {
    site: 'Madukkarai',
    clusterType: 'Non-Cement',
    activity: 'School Infrastructure',
    subActivity: 'School Playground Development',
    noOfPlaygroundsPlanned: 1,
    noOfPlaygroundsDeveloped: 1,
    girlsBenefited: 40,
    boysBenefited: 45,
    preImageURL: 'https://dummyimage.com/400x300',
    postImageURL: 'https://dummyimage.com/400x300',
  },

  // 10. Other Infrastructure Development
  {
    site: 'Wadi',
    clusterType: 'Cement',
    activity: 'School Infrastructure',
    subActivity: 'Other Infrastructure Development',
    noOfUnitsPlanned: 2,
    noOfUnitsExecuted: 2,
    girlsBenefited: 40,
    boysBenefited: 50,
    preImageURL: 'https://dummyimage.com/400x300',
    postImageURL: 'https://dummyimage.com/400x300',
  },

  // 11. Utthan
  {
    site: 'Damodar',
    clusterType: 'Non-Cement',
    activity: 'Utthan',
    subActivity: '',
    noOfSchoolsCovered: 5,
    noOfUtthanSahayaksDeployed: 2,
    girlsBenefited: 110,
    boysBenefited: 100,
    outcomePercent: 75,
    uploadImageURL: 'https://dummyimage.com/400x300',
  },

  // 12. Adani Competitive Coaching Centre
  {
    site: 'Bargarh',
    clusterType: 'Cement',
    activity: 'Adani Competitive Coaching Centre',
    subActivity: '',
    noOfUnits: 2,
    noOfResourcePersonsDeployed: 2,
    maleYouthCovered: 25,
    femaleYouthCovered: 30,
    candidatesSelected: 6,
    uploadImageURL: 'https://dummyimage.com/400x300',
  },
];
