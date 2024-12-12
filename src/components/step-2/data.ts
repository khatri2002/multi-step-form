import IconArcade from "../../assets/images/icon-arcade.svg";
import IconAdvanced from "../../assets/images/icon-advanced.svg";
import IconPro from "../../assets/images/icon-pro.svg";
import { Data } from "./types";

export const data: Data = {
  title: "Select your plan",
  desc: "You have the option of monthly or yearly billing.",
  plans: [
    {
      key: "arcade",
      title: "Arcade",
      desc: "$9/mo",
      icon: {
        img: IconArcade,
        alt: "icon-arcade",
      },
    },
    {
      key: "advanced",
      title: "Advanced",
      desc: "$12/mo",
      icon: {
        img: IconAdvanced,
        alt: "icon-advanced",
      },
    },
    {
      key: "pro",
      title: "Pro",
      desc: "$15/mo",
      icon: {
        img: IconPro,
        alt: "icon-pro",
      },
    },
  ],
  duration: {
    option1: {
      label: "Monthly",
    },
    option2: {
      label: "Yearly",
    },
  },
};
