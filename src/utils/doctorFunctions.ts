import docData from "../../src/data/docData";

export const filterByNetwork = (network: string) => {
  const newDocs = docData.filter(({ doctor_networks }: any) =>
    doctor_networks?.includes(network)
  );
  console.log(newDocs);
};

export const filterByJobTitle = (title: string) => {
  const newDocs = docData.filter(({ job_title }: any) => job_title === title);
  console.log(newDocs);
};

export const searchByName = (name: string) => {
  const newDocs = docData.filter(({ first_name }: any) =>
    first_name.toLowerCase().includes(name.toLocaleLowerCase())
  );

  if (newDocs.length === 0) return console.log("No Docs By That Name");

  console.log(newDocs);
};
