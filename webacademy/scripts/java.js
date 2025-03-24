const coursesData = [
    {
        title: "Web Development",
        description: "Learn to create websites and dynamic applications.",
        duration: "6 months",
        level: "Beginner to Advanced"
    },
    {
        title: "UX/UI Design",
        description: "Become an expert in designing intuitive user interfaces.",
        duration: "4 months",
        level: "Beginner to Intermediate"
    },
    {
        title: "Digital Marketing",
        description: "Master SEO, SEM, and social media to boost your visibility.",
        duration: "5 months",
        level: "Intermediate to Advanced"
    }
    // Add more courses here...
];

function loadCourses() {
    const courseListElement = document.querySelector('.course-list');
    coursesData.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        courseItem.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p><strong>Level:</strong> ${course.level}</p>
            <button class="view-details" onclick="viewCourseDetails('${course.title}')">View Details</button>
        `;
        courseListElement.appendChild(courseItem);
    });
}

function viewCourseDetails(courseTitle) {
    const course = coursesData.find(c => c.title === courseTitle);
    const modalContent = document.getElementById('modal-course-details');
    modalContent.innerHTML = `
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <p><strong>Level:</strong> ${course.level}</p>
    `;
    document.getElementById('courseModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('courseModal').style.display = 'none';
}

// Event listeners
document.getElementById('loadCoursesBtn').addEventListener('click', loadCourses);
document.getElementById('closeModal').addEventListener('click', closeModal);

// Initialize page with some courses
loadCourses();