async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Erreur lors du chargement des membres :", error);
    }
}

// Fonction pour afficher les membres dans la vue
function displayMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = '';  // Efface le contenu précédent

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Site Web</a>
            <p>Membership Level: ${getMembershipLevel(member.membership_level)}</p>
        `;

        container.appendChild(memberCard);
    });
}

// Fonction pour obtenir le niveau de membre
function getMembershipLevel(level) {
    switch(level) {
        case 1: return 'Membre';
        case 2: return 'Argent';
        case 3: return 'Or';
        default: return 'Inconnu';
    }
}

// Changer la vue en grille
document.getElementById('grid-view').addEventListener('click', () => {
    document.getElementById('members-container').classList.add('grid-view');
    document.getElementById('members-container').classList.remove('list-view');
});

// Changer la vue en liste
document.getElementById('list-view').addEventListener('click', () => {
    document.getElementById('members-container').classList.add('list-view');
    document.getElementById('members-container').classList.remove('grid-view');
});

// Afficher l'année en cours
document.getElementById('current-year').textContent = new Date().getFullYear();

// Formater la dernière date de modification pour l'afficher proprement
const lastModifiedDate = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formattedDate = lastModifiedDate.toLocaleString('fr-FR', options);

// Mettre à jour l'élément `last-modified` avec la date et l'heure
document.getElementById('last-modified').textContent = `Dernière modification : ${formattedDate}`;

// Charger les membres au démarrage
fetchMembers();