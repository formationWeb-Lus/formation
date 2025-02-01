fetch('data/member.json')
  .then(response => response.json())
  .then(data => {
    // Affichage des entreprises
    function displaySpotlights() {
      const validMemberships = ['Gold', 'Silver'];
      const filteredBusinesses = data.businesses.filter(business => validMemberships.includes(business.membershipLevel));

      // Vérification si il y a assez d'entreprises
      if (filteredBusinesses.length < 2) {
        console.warn("Not enough businesses to display.");
        return;
      }

      // Fonction pour afficher une entreprise dans un spotlight
      function displayBusinessSpotlight(elementId, business) {
        const spotlightElement = document.getElementById(elementId);
        // Vérification si les données de l'entreprise sont valides
        if (!business.logo || !business.companyName || !business.phone || !business.address || !business.website) {
          console.warn("Business data is incomplete:", business);
          return;
        }
        spotlightElement.innerHTML = `
          <img src="${business.logo}" alt="${business.companyName} Logo">
          <h3>${business.companyName}</h3>
          <p><strong>Phone:</strong> ${business.phone}</p>
          <p><strong>Address:</strong> ${business.address}</p>
          <p><a href="${business.website}" target="_blank">Visit Website</a></p>
          <p><strong>Membership Level:</strong> ${business.membershipLevel}</p>
        `;
      }

      // Afficher deux entreprises aléatoires
      const randomBusiness1 = filteredBusinesses[Math.floor(Math.random() * filteredBusinesses.length)];
      const randomBusiness2 = filteredBusinesses[Math.floor(Math.random() * filteredBusinesses.length)];

      displayBusinessSpotlight('spotlight1', randomBusiness1);
      displayBusinessSpotlight('spotlight2', randomBusiness2);
    }

    // Appel pour afficher les entreprises
    displaySpotlights();

    // Affichage des informations météo
    function displayWeather() {
      const currentWeather = data.current;
      const forecast = data.daily[0];

      // Vérification si les données météo existent
      if (!currentWeather || !forecast) {
        console.warn("Weather data is incomplete.");
        return;
      }

      // Affichage de la météo actuelle
      document.getElementById('current-weather').innerHTML = `
        Conditions: ${currentWeather.weather[0].description}<br>
        Temperature: ${currentWeather.temp}°C<br>
        Humidity: ${currentWeather.humidity}%<br>
        Wind Speed: ${currentWeather.wind_speed} m/s
      `;

      // Affichage des prévisions pour le jour suivant
      document.getElementById('forecast').innerHTML = `
        <ul>
          <li>
            <h3>Tomorrow</h3>
            <p>${forecast.weather[0].description}</p>
            <p>Day: ${forecast.temp.day}°C | Night: ${forecast.temp.night}°C</p>
          </li>
        </ul>
      `;
    }

    // Appel pour afficher la météo
    displayWeather();
  })
  .catch(error => {
    console.error("Error loading the JSON file:", error);
  });