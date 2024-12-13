import { Data } from "./types";

export const data: Data = {
  title: "Pick add-ons",
  desc: "Add-ons help enhance your gaming experience.",
  addOns: [
    {
      key: "online-service",
      label: "Online service",
      desc: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      key: "larger-storage",
      label: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      key: "customizable-profile",
      label: "Customizable Profile",
      desc: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  ],
};
