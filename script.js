// Task-1
// Resume data in JSON format

const resume = {
  personal_info: {
    name: "Aravind Raj B",
    address: "24,ponni nagar,kundrathur",
    phone: "76959**505",
    email: "aravindavd1999@gmail.com",
    linkedin: "https://www.linkedin.com/in/aravindrajb",
    website: "https://www.aravindraj.com",
    dob: "19.09.1999",
  },
  summary:
    "Aspiring full stack developer with a background in Mechanical Engineering. Currently enhancing skills in web development with a focus on building efficient, scalable, and user-friendly applications.",
  education: [
    {
      degree: "Bachelor of Engineering in Mechanical Engineering",
      institution: "Veltech High Tech Engineering College",
      year_of_graduation: 2021,
      location: "Chennai, India",
    },
    {
      degree: "Full Stack Development",
      institution: "Online Course",
      year_of_graduation: "Ongoing",
      location: "Remote",
    },
  ],
  work_experience: [
    {
      job_title: "Intern - Mechanical Engineering",
      company: "Mechanical Solutions Inc.",
      location: "Chennai, India",
      start_date: "June 2020",
      end_date: "December 2020",
      responsibilities: [
        "Assisted in the design and development of mechanical components.",
        "Conducted tests and analysis on various engineering projects.",
        "Collaborated with senior engineers to optimize production processes.",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Git",
    "SQL",
    "Mechanical Design",
  ],
  certifications: [
    {
      name: "Certified Full Stack Developer",
      issuing_organization: "Online Course Platform",
      issue_date: "Expected 2024",
    },
    {
      name: "Certified Mechanical Engineer",
      issuing_organization: "Mechanical Engineering Institute",
      issue_date: "June 2021",
    },
  ],
  languages: ["English", "Tamil"],
  interests: ["Web Development", "Video editing", "Traveling", "Photography"],
};

//Task-2
//Iterating the above resume using for loops

for (let section in resume) {
  console.log(`--- ${section.toUpperCase()} ---`);
  if (Array.isArray(resume[section])) {
    resume[section].forEach((item, index) => {
      if (typeof item === "object") {
        console.log(`${index + 1}.`);
        for (let key in item) {
          console.log(`${key}: ${item[key]}`);
        }
      } else {
        console.log(`${index + 1}. ${item}`);
      }
    });
  } else if (typeof resume[section] === "object") {
    for (let key in resume[section]) {
      console.log(`${key}: ${resume[section][key]}`);
    }
  } else {
    console.log(resume[section]);
  }
}

// Iterating simple resume using for loops ( for,for in,for of ,forEach)

const resume2 = {
  name: "Aravind Raj B",
  address: "24,ponni nagar,kundrathur",
  phone: "76959**505",
  summary:
    "Aspiring full stack developer with a background in Mechanical Engineering. Currently enhancing skills in web development with a focus on building efficient, scalable, and user-friendly applications.",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Git",
    "SQL",
    "Mechanical Design",
  ],
  languages: ["English", "Tamil"],
  interests: ["Web Development", "Video editing", "Traveling", "Photography"],
};

// for loop :
let keys = Object.keys(resume2);
console.log("--- FOR LOOP ---")
for (let i = 0; i < keys.length; i++) {
  console.log(`${keys[i]} : ${resume2[keys[i]]}`);
}

//for in loop :
console.log("--- FOR IN LOOP ---")
for (let key in resume2) {
  console.log(`${key} : ${resume2[key]}`);
}

//for of loop :
// variable "keys" is declared in the beginning of program
console.log("--- FOR OF LOOP ---")
for (let i of keys) {
  console.log(`${i} : ${resume2[i]}`);
}

//forEach loop :
// variable "keys" is declared in the beginning of program
console.log("--- FOR EACH LOOP ---")
keys.forEach((element) => {
  console.log(`${element} : ${resume2[element]}`);
});

//------------------------------------------------------------------------------------------------------------------
