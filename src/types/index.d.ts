import React from "react";

export type Experience = {
  title: string;
  company?: string;
  location: string;
  startDate: string;
  endDate: string | "isCurrent";
  description?: string;
  workedWith?: string[];
};

export type Project = {
  title: string;
  description: string;
  link?: string;
  workedWith?: string[];
};

export type Library = {
  name: string;
  link: string;
  experience?: string;
  logo?: React.ReactNode;
};
