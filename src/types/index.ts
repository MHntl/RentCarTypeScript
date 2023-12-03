import { MouseEventHandler } from "react";

export type ButtonPropsType = {
  designs?: string;
  title: string;
  btnType?: "submit" | `button` | `reset`;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rIcon?: string;
};

export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "rwd" | "awd" | "4wd";
  fuel_type: "gas" | "electricity" | "diesel";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "a" | "m";
  year: number;
};

export type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
};
