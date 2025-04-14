document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");


    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // Affiche ou cache le menu
    });
});


async function chargerModules() {
    try {
      // 🔹 Charger le fichier JSON
      const response = await fetch("data/academy.json");  
      const modules = await response.json();
  
      // 🔹 Afficher les données dans la console (pour vérifier)
      console.log("Modules chargés :", modules);
  
      // 🔹 Sélectionner l'élément HTML où afficher les modules
      const container = document.getElementById("modules-container");
  
      // 🔹 Générer les cartes dynamiquement
      modules.forEach(module => {
        const div = document.createElement("div");
        div.classList.add("module-card");
  
        div.innerHTML = `
          <figure>
    <img src="${module.image}" alt="${module.titte}" loading="lazy">
    <figcaption>${module.figcaptionDescription}</figcaption>
  </figure>
  <h3>${module.title}</h3>
  <p>${module.description}</p>
  <a href="${module.lien}" target="_blank" class="btn">see more</a>
`;
  
        container.appendChild(div);
      });
  
    } catch (error) {
      console.error("Erreur lors du chargement des modules :", error);
    }
  }
  
  // Exécuter la fonction au chargement de la page
  document.addEventListener("DOMContentLoaded", chargerModules);
  