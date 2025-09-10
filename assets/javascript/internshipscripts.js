let internships = [];

function loadInternships() {
    internships = JSON.parse(localStorage.getItem('internships')) || [];
    displayInternships(internships);
}

function displayInternships(internshipsToShow) {
    const internshipsContainer = document.getElementById("internships-container");
    internshipsContainer.innerHTML = "";

    internshipsToShow.forEach(internship => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = internship.id;
        card.innerHTML = `
            <h3>${internship.company}</h3>
            <p>${internship.description}</p>
            <p>Application Deadline: ${internship.date}</p>
            <p>Duration: ${internship.duration}</p>
            <p>Website: <a href="${internship.contact.website}" target="_blank">${internship.contact.website}</a></p>
        `;
        internshipsContainer.appendChild(card);
    });
}

window.addEventListener("load", loadInternships);
