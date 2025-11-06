fetch("profile.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("tagline").textContent = data.tagline;
    document.getElementById("about").textContent = data.about;
    document.getElementById("year").textContent = new Date().getFullYear();

    // Socials
    const socialsDiv = document.getElementById("socials");
    const icons = {
      github: "fa-brands fa-github",
      linkedin: "fa-brands fa-linkedin",
      twitter: "fa-brands fa-x-twitter",
      instagram: "fa-brands fa-instagram"
    };
    for (let key in data.socials) {
      const a = document.createElement("a");
      a.href = data.socials[key];
      a.target = "_blank";
      a.innerHTML = `<i class="${icons[key]}"></i>`;
      socialsDiv.appendChild(a);
    }

    // Projects
    const projectsDiv = document.getElementById("projects");
    data.projects.forEach(project => {
      const div = document.createElement("div");
      div.classList.add("project");
      div.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectsDiv.appendChild(div);
    });
  })
  .catch(error => console.error("Error loading profile.json:", error));
