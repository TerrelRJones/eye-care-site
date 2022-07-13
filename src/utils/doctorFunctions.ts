import docData from "../../src/data/docData";

export enum NETWORK {
  ADVANTAGE = "Advantage",
  SIGNATURE = "Signature",
  CHOICE = "Choice",
}

export enum JOB_TITLE {
  OPTOMETRIST = "Optometrist",
}

export const filterByNetwork = (network: NETWORK) => {
  const newDocs = docData.filter(({ doctor_networks }) =>
    doctor_networks?.includes(network)
  );
  console.log(newDocs);
};

export const filterByJobTitle = (title: JOB_TITLE) => {
  const newDocs = docData.filter(({ job_title }) => job_title === title);
  console.log(newDocs);
};

export const searchByName = (name: string) => {
  const newDocs = docData.filter(({ first_name }) =>
    first_name.toLowerCase().includes(name.toLocaleLowerCase())
  );

  if (newDocs.length === 0) return console.log("No Docs By That Name");

  console.log(newDocs);
};
