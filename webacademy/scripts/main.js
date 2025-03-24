document.addEventListener("DOMContentLoaded", () => {
    const courseListContainer = document.getElementById("course-list");
    const modal = document.getElementById("modal");
    const modalData = document.getElementById("modal-data");
    const closeModalBtn = document.getElementById("closeModal");

    // Fonction pour afficher les cours dans la page
    async function loadCourses() {
        try {
            const response = await fetch("data/cours.json");
            const courses = await response.json();
            
            // Vérifier si des cours existent
            if (!Array.isArray(courses) || courses.length === 0) {
                courseListContainer.innerHTML = "<p>Aucun cours disponible pour le moment.</p>";
                return;
            }

            // Affichage des cours
            courseListContainer.innerHTML = courses.map(course => `
                <div class="course">
                    <h3>${course.titre}</h3>
                    <button class="view-course-btn" data-title="${course.titre}" data-description="${course.description}">
                        Voir les détails
                    </button>
                </div>
            `).join("");

        } catch (error) {
            console.error("Erreur lors du chargement des cours :", error);
            courseListContainer.innerHTML = "<p>Impossible de charger les cours.</p>";
        }
    }

    // Fonction pour ouvrir la modale avec les détails du cours
    function showModal(titre, description) {
        modalData.innerHTML = `<h2>${titre}</h2><p>${description}</p>`;
        modal.style.display = "flex";
    }

    // Fonction pour fermer la modale
    function closeModal() {
        modal.style.display = "none";
    }

    // Gestion du clic sur un bouton "Voir les détails"
    courseListContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("view-course-btn")) {
            const title = event.target.getAttribute("data-title");
            const description = event.target.getAttribute("data-description");
            showModal(title, description);
        }
    });

    // Gestion de la fermeture de la modale
    closeModalBtn.addEventListener("click", closeModal);

    // Charger les cours au démarrage
    loadCourses();

    // Ajouter un gestionnaire d'événement pour le bouton "Charger les Cours"
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
