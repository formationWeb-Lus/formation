// Bascule du menu
document.getElementById("menu-toggle").addEventListener("click", function() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("nav-hidden");
    navMenu.classList.toggle("nav-show");
});

// Message d'accueil selon l'heure
window.onload = function() {
    const heureActuelle = new Date().getHours();
    const texteHero = document.querySelector('.hero-text h1');

    if (heureActuelle < 12) {
        texteHero.textContent = 'Bonjour ! Bienvenue sur Webacademy !';
    } else if (heureActuelle < 18) {
        texteHero.textContent = 'Bon après-midi ! Bienvenue sur Webacademy !';
    } else {
        texteHero.textContent = 'Bonsoir ! Bienvenue sur Webacademy !';
    }
};

// Redirection directe après sélection
document.getElementById('select-beginner').addEventListener('click', function() {
    localStorage.setItem('selectedTraining', 'Débutant');
    window.location.href = 'inscription.html';
});

document.getElementById('select-advanced').addEventListener('click', function() {
    localStorage.setItem('selectedTraining', 'Avancé');
    window.location.href = 'inscription.html';
});

// Bouton de réinitialisation (facultatif)
const boutonReset = document.getElementById('reset-preference');
if (boutonReset) {
    boutonReset.addEventListener('click', function() {
        localStorage.removeItem('selectedTraining');
        alert('Votre préférence de formation a été réinitialisée.');
        // Optionnel : recharger la page ou modifier un texte
    });
}
