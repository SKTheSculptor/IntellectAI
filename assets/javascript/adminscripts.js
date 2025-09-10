document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const event = {
        id: Date.now(),
        name: document.getElementById('event-name').value,
        description: document.getElementById('event-description').value,
        location: document.getElementById('event-location').value,
        date: document.getElementById('event-date').value,
        contact: {
            email: document.getElementById('event-email').value,
            phone: document.getElementById('event-phone').value,
            website: document.getElementById('event-website').value
        },
        type: document.getElementById('event-location').value ? 'offline' : 'online'
    };

    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));

    alert('Event added successfully');
    document.getElementById('event-form').reset();
    displayEvents();
});

document.getElementById('job-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const job = {
        id: Date.now(),
        companyName: document.getElementById('company-name').value,
        jobRole: document.getElementById('job-role').value,
        companyDetails: document.getElementById('company-details').value,
        companyEmail: document.getElementById('company-email').value
    };

    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    jobs.push(job);
    localStorage.setItem('jobs', JSON.stringify(jobs));

    alert('Job added successfully');
    document.getElementById('job-form').reset();
    displayJobs();
});

document.getElementById('internship-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const internship = {
        id: Date.now(),
        company: document.getElementById('internship-company').value,
        description: document.getElementById('internship-description').value,
        duration: document.getElementById('internship-duration').value,
        date: document.getElementById('internship-date').value,
        contact: {
            website: document.getElementById('internship-website').value
        }
    };

    let internships = JSON.parse(localStorage.getItem('internships')) || [];
    internships.push(internship);
    localStorage.setItem('internships', JSON.stringify(internships));

    alert('Internship added successfully');
    document.getElementById('internship-form').reset();
    displayInternships();
});

function displayEvents() {
    const eventsContainer = document.getElementById('events-container');
    const events = JSON.parse(localStorage.getItem('events')) || [];

    eventsContainer.innerHTML = events.map(event => `
        <div class="card" data-id="${event.id}">
            <h3>${event.name}</h3>
            <p>${event.description}</p>
            <p>${event.type === 'offline' ? 'Location: ' + event.location : ''}</p>
            <p>Date: ${event.date}</p>
            <p>Email: ${event.contact.email}</p>
            <p>Phone: ${event.contact.phone}</p>
            <p>Website: <a href="${event.contact.website}" target="_blank">${event.contact.website}</a></p>
            <button onclick="deleteEvent(${event.id})">Delete</button>
        </div>
    `).join('');
}

function displayJobs() {
    const jobsContainer = document.getElementById('jobs-container');
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    jobsContainer.innerHTML = jobs.map(job => `
        <div class="card" data-id="${job.id}">
            <h3>${job.companyName}</h3>
            <p>Role: ${job.jobRole}</p>
            <p>Details: ${job.companyDetails}</p>
            <p>Email: ${job.companyEmail}</p>
            <button onclick="deleteJob(${job.id})">Delete</button>
        </div>
    `).join('');
}

function displayInternships() {
    const internshipsContainer = document.getElementById('internships-container');
    const internships = JSON.parse(localStorage.getItem('internships')) || [];

    internshipsContainer.innerHTML = internships.map(internship => `
        <div class="card" data-id="${internship.id}">
            <h3>${internship.company}</h3>
            <p>${internship.description}</p>
            <p>Date: ${internship.date}</p>
            <p>Duration: ${internship.duration}</p>
            <p>Website: <a href="${internship.contact.website}" target="_blank">${internship.contact.website}</a></p>
            <button onclick="deleteInternship(${internship.id})">Delete</button>
        </div>
    `).join('');
}

function deleteEvent(id) {
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events = events.filter(event => event.id !== id);
    localStorage.setItem('events', JSON.stringify(events));
    displayEvents();
}

function deleteJob(id) {
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    jobs = jobs.filter(job => job.id !== id);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    displayJobs();
}

function deleteInternship(id) {
    let internships = JSON.parse(localStorage.getItem('internships')) || [];
    internships = internships.filter(internship => internship.id !== id);
    localStorage.setItem('internships', JSON.stringify(internships));
    displayInternships();
}

document.addEventListener('DOMContentLoaded', () => {
    displayEvents();
    displayJobs();
    displayInternships();
});
