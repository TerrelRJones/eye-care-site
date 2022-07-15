import docData, { DoctorData } from "../../src/data/docData";

export enum Network {
  ADVANTAGE = "Advantage",
  SIGNATURE = "Signature",
  CHOICE = "Choice",
}

export enum JobTitle {
  OPTOMETRIST = "Optometrist",
}

export const filterByNetwork = (network: Network): DoctorData[] => {
  const newDocs = docData.filter(({ doctor_networks }) =>
    doctor_networks?.includes(network)
  );
  console.log(newDocs);
  return newDocs;
};

export const filterByJobTitle = (title: JobTitle): DoctorData[] => {
  const newDocs = docData.filter(({ job_title }) => job_title === title);
  console.log(newDocs);
  return newDocs;
};

export const searchByName = (name: string): DoctorData[] => {
  const newDocs = docData.filter(({ first_name }) =>
    first_name.toLowerCase().includes(name.toLocaleLowerCase())
  );

  if (newDocs.length === 0) {
    console.log("No Docs By That Name");
    return newDocs;
  }

  console.log(newDocs);
  return newDocs;
};