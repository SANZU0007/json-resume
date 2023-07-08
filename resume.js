let sanjay = {
    "personal_info": {
      "name": "sanjay",
      "email": "johndoe@email.com",
      "phone": "555-555-5555",
      "location": "india, tn"
    },
    "education": [
      {
        "degree": "Bachelor of Science",
        "field_of_study": "Computer Science",
        "school_name": "University of kamaraj, madurai",
        "graduation_date": "May 2020"
      }
    ],
    "work_experience": [
        {
      
        "fresher"
        }
        ]
    
    
    "skills": [
    {
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "Agile methodologies"
    }
    ]
  }
  
for (let key in sanjay) {
  // Access each property using sanjay[key]
  console.log(key, sanjay[key]);
}
for (let skill of sanjay.skills) {
  console.log(skill);
}
sanjay.skills.forEach(function (skill) {
  console.log(skill);
});
