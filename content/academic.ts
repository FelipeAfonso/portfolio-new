import { Experience } from "types";

export const academic: Record<string, Experience> = {
  master: {
    title: "Master's Degree in Computer Science",
    company: "UFSCar (Federal University of São Carlos)",
    location: "São Carlos - São Paulo, Brazil",
    startDate: "March 2017",
    endDate: "June 2020",
    description: `Within the area of Software Engineering with an emphasis on Cross-platform web and mobile development, I have created a number of proof of concept apps with different cross-platform frameworks. I also interviewed a lot of professionals working in the software industry.
    I was a scholarship Master's degree student for the first 24 months, therefore I had an exclusive dedication contract. During this period all projects that I participated were volunteer and independent works.`,
    workedWith: [
      "React.js",
      "React Native",
      "Vue",
      "Ionic",
      "NativeScript",
      "Java",
      "Xamarin",
      "C#",
      "JavaScript",
      "Flutter",
      "Kotlin",
      "Weex",
    ],
  },
  mentor1: {
    title: "Graduate Student Mentor",
    company:
      "IFSP (Federal Institute of science, technology and education of São Paulo)",
    location: "Piracicaba - São Paulo, Brazil",
    startDate: "May 2018",
    endDate: "December 2018",
    description: `I've mentored a student in a project using Kotlin and Kotlin/Native to develop an Android app for his final graduation project.
    It was an volunteer work for graduates from IFSP.`,
    workedWith: ["Kotlin", "Kotlin/Native", "Android SDK"],
  },
  mentor2: {
    title: "Graduate Student Mentor",
    company:
      "IFSP (Federal Institute of science, technology and education of São Paulo)",
    location: "Piracicaba - São Paulo, Brazil",
    startDate: "September 2017",
    endDate: "October 2017",
    description: `I've created an Agile methods course along 6 weeks, while mentoring and evaluating the students. It was mostly virtual using Google Classroom.
    It was an volunteer work for graduates from IFSP.`,
  },
  bach: {
    title: "Bachelor of Technology Degree in Systems Engineering",
    company:
      "IFSP (Federal Institute of science, technology and education of São Paulo)",
    location: "Piracicaba - São Paulo, Brazil",
    startDate: "March 2014",
    endDate: "December 2016",
    description: `At my bachelor's course I learned the fundamentals of computer science. Through it I was always looking for extra curricular activities and personal projects to pursue. Following are the highlights of my accomplishments:
     - Final Project: An Web E-Commerce with a Windows Point of Sale - The reason behind it was to reduce stock problems with a shared DB, while mantaining a native Windows application for the PoS. It was made with .NET with Entity Framework for the back-end; Razor for the web front end; and XAML for the windows front end;
     - Scholarship Project: Inverse Augmented Reality POC - I made an XAML Windows App that would enable drawing and controling a set of images to be used in a projector and overlayed with real products in order to highlight them. And to integrate with that, I've made an android app that would toggle those images using web sockets based on the shopping cart he was buying;
     - Personal Project: Along my Web Development Monitoring Scholarship I created a web platform for scheduling monitoring sessions for the students. It was made with .NET Razor and Entity Framework. It ended up being used by our campus for 2 years;
     - Scholarship Project: Mobile App for a 4.0 Industry POC - A Xamarin App for Android and Windows Phone for controlling a machine created by Mechanical Engineering Students using bluetooth.`,
  },
  monitor: {
    title: "Monitor of Web Development",
    company:
      "IFSP (Federal Institute of science, technology and education of São Paulo)",
    location: "Piracicaba - São Paulo, Brazil",
    startDate: "August 2016",
    endDate: "December 2016",
    description: `I was the Web Development class monitor at my graduation. I was responsible for helping other students with their web projects, which were mostly in .NET Razor, or jQuery and PHP. It was a scholarship project.`,
  },
};
