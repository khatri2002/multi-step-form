import { Data } from "./types";

export const data: Data = {
  title: "Personal info",
  desc: "Please provide your name, email address, and phone number.",
  fields: [
    {
      key: "name",
      label: "Name",
      placeholder: "e.g. Stephen King",
      type: "text",
      rules: {
        required: { value: true, message: "This field is required" },
      },
    },
    {
      key: "email",
      label: "Email Address",
      placeholder: "e.g. stephenking@lorem.com",
      type: "text",
      rules: {
        required: { value: true, message: "This field is required" },
      },
    },
    {
      key: "phoneNumber",
      label: "Phone Number",
      placeholder: "e.g. +1 234 567 890",
      type: "text",
      rules: {
        required: { value: true, message: "This field is required" },
      },
    },
  ],
};
