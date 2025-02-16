// Fonction pour charger et afficher les données JSON
function loadData() {
    // Récupérer les données JSON à partir du fichier 'data.json'
    fetch('data/discover.json')
        .then(response => response.json())  // Convertir la réponse en JSON
        .then(data => {
            // Sélectionner l'élément où les données seront affichées
            const container = document.getElementById('tourist-sites-container');

            // Parcourir chaque site touristique et ajouter un élément HTML pour chaque
            data.forEach(site => {
                // Créer un élément de section pour chaque site
                const siteElement = document.createElement('section');
                siteElement.classList.add('tourist-site');

                // Créer le HTML pour chaque site
                siteElement.innerHTML = `
                    <h3><a href="${site.link}">${site.title}</a></h3>
                    <img src="${site.image}" alt="${site.title}">
                    <p><strong>Address:</strong> ${site.address}</p>
                    <p>${site.description}</p>
                `;

                // Ajouter chaque élément au conteneur
                container.appendChild(siteElement);
            });
        })
        .catch(error => console.error('Error loading data:', error));
}

// Appeler la fonction pour charger les données lorsque la page est prête
document.addEventListener('DOMContentLoaded', loadData);


// Récupérer les données JSON
const touristSites = [
    {
        "title": "Rwenzori National Park",
        "image": "images/photo8.webp",
        "address": "Rwenzori Region, Uganda",
        "description": "This park is a protected reserve with great biodiversity, ideal for hiking and bird watching. It is home to majestic mountains, glaciers, lakes, and exceptional flora and fauna.",
        "link": "parc-rwenzori.html",
        "button": "learn more"
    },
    {
        "title": "National Museum of the Democratic Republic of Congo",
        "image": "images/photo7.webp",
        "address": "Kinshasa, Democratic Republic of Congo",
        "description": "An intriguing museum showcasing the history and culture of Congo, with a rich collection of ancient artifacts, sculptures, and traditional art objects spanning centuries.",
        "link": "musee-rdc.html",
        "button": "learn more"
    },
    {
        "title": "Inga Falls",
        "image": "images/photo6.webp",
        "address": "Kongo-Central Province, Democratic Republic of Congo",
        "description": "These impressive waterfalls, located in the west of the DRC, are a must-see for nature and adventure lovers, offering a spectacular view and a peaceful environment amidst the tropical rainforest.",
        "link": "chutes-inga.html",
        "button": "learn more"
    }

    // Ajoutez les autres sites touristiques ici...
];

// Fonction pour afficher les sites touristiques
function displayTouristSites() {
    const container = document.getElementById("tourist-sites-container");

    touristSites.forEach(site => {
        const siteDiv = document.createElement("div");
        siteDiv.classList.add("tourist-site");

        siteDiv.innerHTML = `
            <img src="${site.image}" alt="${site.title}">
            <h3>${site.title}</h3>
            <p>${site.description}</p>
            <a href="${site.link}">${site.button}</a>
        `;

        container.appendChild(siteDiv);
    });
}

// Charger les sites touristiques lorsque la page est prête
document.addEventListener("DOMContentLoaded", displayTouristSites);



// Script pour gérer l'ouverture et la fermeture du menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.createElement('button');
    hamburger.textContent = '☰';
    hamburger.classList.add('hamburger');
    document.body.querySelector('header').appendChild(hamburger);

    const menu = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('menu-open');
    });
});


