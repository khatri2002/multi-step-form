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
        pattern: { value: /^[A-Za-z\s]+$/i, message: "Valid name is required" },
        minLength: { value: 2, message: "Valid name is required" },
        maxLength: { value: 25, message: "Valid name is required" },
      },
    },
    {
      key: "email",
      label: "Email Address",
      placeholder: "e.g. stephenking@lorem.com",
      type: "text",
      rules: {
        required: { value: true, message: "This field is required" },
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Valid email is required",
        },
      },
    },
    {
      key: "phoneNumber",
      label: "Phone Number",
      placeholder: "e.g. +1 234 567 890",
      type: "text",
      rules: {
        required: { value: true, message: "This field is required" },
        pattern: {
          value: /^[0-9+\s]+$/,
          message: "Valid phone number is required",
        },
        minLength: { value: 10, message: "Valid phone number is required" },
      },
    },
  ],
};
