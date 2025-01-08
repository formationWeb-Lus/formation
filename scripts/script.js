const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Your Name, Your State`;

// Last Modified Date
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const courses = [
    { name: "WDD 100 - Introduction to Web Design", completed: true, credits: 3, type: "wdd" },
    { name: "WDD 101 - Web Development Foundations", completed: false, credits: 4, type: "wdd" },
    { name: "CSE 101 - Computer Science Fundamentals", completed: true, credits: 4, type: "cse" },
    { name: "CSE 102 - Data Structures", completed: false, credits: 3, type: "cse" }
];

// Display Courses
function displayCourses(filteredCourses) {
    const courseListContainer = document.getElementById("course-list");
    courseListContainer.innerHTML = ""; // Clear previous courses
    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        if (course.completed) {
            courseCard.classList.add("completed");
        } else {
            courseCard.classList.add("not-completed");
        }

        courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p>Credits: ${course.credits}</p>
        `;
        totalCredits += course.credits;

        courseListContainer.appendChild(courseCard);
    });

    // Update total credits
    document.getElementById("total-credits").textContent = totalCredits;
}

// Course Filters
function filterCourses(type) {
    let filteredCourses;
    if (type === "all") {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.type === type);
    }
    displayCourses(filteredCourses);
}

// Initialize with all courses
filterCourses("all");