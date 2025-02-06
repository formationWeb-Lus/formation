const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = new Date().getTime();
localStorage.setItem('lastVisit', currentVisit);

let message = 'Bienvenue ! N\'hésitez pas à nous contacter si vous avez des questions.';
if (lastVisit) {
    const daysBetween = Math.floor((currentVisit - lastVisit) / (1000 * 3600 * 24));
    if (daysBetween < 1) {
        message = 'De retour si tôt ! Génial !';
    } else {
        message = `Votre dernière visite remonte à ${daysBetween} jour${daysBetween > 1 ? 's' : ''}.`;
    }
}

// Afficher le message dans la page
document.getElementById('message').textContent = message;



function loadCards() {
    // Fetch the cards data from the JSON file
    fetch('data/discover.json')
        .then(response => response.json())
        .then(cards => {
            const gridContainer = document.querySelector('.grid-container');
            cards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');

                cardElement.innerHTML = `
                    <h2>${card.title}</h2>
                    <figure>
                        <img src="${card.image}" alt="${card.title}">
                    </figure>
                    <address>${card.address}</address>
                    <p>${card.description}</p>
                    <button onclick="window.location.href='${card.link}'">Learn More</button>
                `;

                // Append the card to the grid container
                gridContainer.appendChild(cardElement);
            });
        })
        .catch(error => console.error('Error loading the cards:', error));
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadCards);