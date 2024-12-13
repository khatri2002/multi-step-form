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
      label: "Arcade",
      price: {
        monthly: 9,
        yearly: 90,
      },
      yearlyDiscountText: "2 months free",
      icon: {
        img: IconArcade,
        alt: "icon-arcade",
      },
    },
    {
      key: "advanced",
      label: "Advanced",
      price: {
        monthly: 12,
        yearly: 120,
      },
      yearlyDiscountText: "2 months free",
      icon: {
        img: IconAdvanced,
        alt: "icon-advanced",
      },
    },
    {
      key: "pro",
      label: "Pro",
      price: {
        monthly: 15,
        yearly: 150,
      },
      yearlyDiscountText: "2 months free",
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
