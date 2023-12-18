//Main Body
export const mainBody = {
  firstName: "Abhishek",
  lastName: "Rathaur",
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com",
    },
  ],
};

// GET IN TOUCH SECTION
export const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time React Developer/Frontend Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "xyz@gmail.com",
};

// SKILLS SECTION
export const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "React", value: 85 },
    { name: "JavaScript", value: 85 },
    { name: "Data Structures", value: 75 },
    { name: "HTML/CSS", value: 55 },
    { name: "TypeScript", value: 35 },
    { name: "SQL", value: 45 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 85 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 85 },
  ],
};

//Experiences
export const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: " Frontend Developer",
      companylogo: require("../Assets/img/simpana.png"),
      date: "Jan 2021 – Present",
    },
    {
      role: "React Developer",
      companylogo: require("../Assets/img/vendify.png"),
      date: "Mar 2019 – Jan 2021",
      style: { width: "424", height: "119" },
    },
  ],
};

//projects

export const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "abhishekrathaur80",
  reposLength: 4,
  specificRepos: [],
};

//About section
export const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../Assets/img/Abhishek.png"),
  imageSize: 375,
  message:
    "My name is Abhishek. I'd have been a Crio developer for 8 months and worked on multiple projects. You can review them in the featured section of my profile. During these months I have worked on technologies like HTML/CSS, Javascript, React JS, Node Js, Express JS, and MongoDB and I want to dive deep into these by working on a role that matches the same.",
};
