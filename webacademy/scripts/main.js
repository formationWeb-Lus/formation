document.addEventListener("DOMContentLoaded", () => {
    const courseListContainer = document.getElementById("course-list");
    const modal = document.getElementById("modal");
    const modalData = document.getElementById("modal-data");
    const closeModalBtn = document.getElementById("closeModal");

    // Function to display courses on the page
    async function loadCourses() {
        try {
            const response = await fetch("data/cours.json");
            const courses = await response.json();
            
            // Check if there are any courses
            if (!Array.isArray(courses) || courses.length === 0) {
                courseListContainer.innerHTML = "<p>No courses available at the moment.</p>";
                return;
            }

            // Display the courses
            courseListContainer.innerHTML = courses.map(course => `
                <div class="course">
                    <h3>${course.titre}</h3>
                    <button class="view-course-btn" data-title="${course.titre}" data-description="${course.description}">
                        View Details
                    </button>
                </div>
            `).join("");

        } catch (error) {
            console.error("Error while loading courses:", error);
            courseListContainer.innerHTML = "<p>Unable to load courses.</p>";
        }
    }

    // Function to open the modal with course details
    function showModal(titre, description) {
        modalData.innerHTML = `<h2>${titre}</h2><p>${description}</p>`;
        modal.style.display = "flex";
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Handle click on "View Details" button
    courseListContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("view-course-btn")) {
            const title = event.target.getAttribute("data-title");
            const description = event.target.getAttribute("data-description");
            showModal(title, description);
        }
    });

    // Handle modal close button click
    closeModalBtn.addEventListener("click", closeModal);

    // Load courses on startup
    loadCourses();

    // Add event listener for "Load Courses" button
    document.getElementById("fetchDataBtn").addEventListener("click", loadCourses);
});


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-visible");
        navMenu.classList.toggle("nav-hidden");
    });
});
