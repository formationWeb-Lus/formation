fetch('members.json')
    .then(response => response.json())
    .then(data => {
        // Filtre pour récupérer uniquement les membres Gold
        const goldMembers = data.filter(member => member.membership === 'Gold');
        
        // Fonction pour afficher un membre Spotlight aléatoire
        function displayRandomSpotlight() {
            // Sélectionner un membre Gold aléatoire
            const randomMember = goldMembers[Math.floor(Math.random() * goldMembers.length)];

            // Mettre à jour l'HTML pour afficher les détails du membre
            const spotlightElement = document.getElementById('spotlight1');
            spotlightElement.innerHTML = `
                <img src="${randomMember.logo}" alt="${randomMember.name} Logo">
                <h3>${randomMember.name}</h3>
                <p><strong>Phone:</strong> ${randomMember.phone}</p>
                <p><strong>Address:</strong> ${randomMember.address}</p>
                <p><a href="${randomMember.website}" target="_blank">Visit Website</a></p>
                <p><strong>Membership Level:</strong> ${randomMember.membership}</p>
            `;
        }

        // Appel de la fonction pour afficher un membre au hasard
        displayRandomSpotlight();

        // (Optionnel) Ajouter un deuxième spotlight si tu veux
        function displaySecondRandomSpotlight() {
            const randomMember = goldMembers[Math.floor(Math.random() * goldMembers.length)];
            const spotlightElement = document.getElementById('spotlight2');
            spotlightElement.innerHTML = `
                <img src="${randomMember.logo}" alt="${randomMember.name} Logo">
                <h3>${randomMember.name}</h3>
                <p><strong>Phone:</strong> ${randomMember.phone}</p>
                <p><strong>Address:</strong> ${randomMember.address}</p>
                <p><a href="${randomMember.website}" target="_blank">Visit Website</a></p>
                <p><strong>Membership Level:</strong> ${randomMember.membership}</p>
            `;
        }

        displaySecondRandomSpotlight();
    })
    .catch(error => console.error('Error loading JSON:', error));
