let resume = {
    name: "Mallika Rathi",

    contact: "mallikarathi151@gmail.com | +91 9456955614 | Ghaziabad, India",

    objective: "A motivated Computer Science student interested in software development and technology.",

    education: "B.Tech in Computer Science and Engineering (AIML)",

    skills: [
        "C++",
        "Java",
        "Python",
        "HTML",
        "CSS",
        "JavaScript"
    ],

    projects: [
        "Digital Farm",
        "SkillXpress"
    ]
};


document.getElementById("name").innerText = resume.name;



document.getElementById("contact").innerText = resume.contact;


document.getElementById("objective").innerText = resume.objective;



document.getElementById("education").innerText = resume.education;



let skills = document.getElementById("skills");

resume.skills.forEach(function(skill) {
    let li = document.createElement("li");
    li.innerText = skill;
    skills.appendChild(li);
});



let projects = document.getElementById("projects");

resume.projects.forEach(function(project) {
    let li = document.createElement("li");
    li.innerText = project;
    projects.appendChild(li);
});