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