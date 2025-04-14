document.getElementById("menu-toggle").addEventListener("click", function() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("nav-hidden");
    navMenu.classList.toggle("nav-show");
});

// Message d'accueil selon l'heure
window.onload = function () {
    const currentTime = new Date().getHours();
    const heroText = document.querySelector('.hero-text h1');

    if (currentTime < 12) {
        heroText.textContent = 'Good Morning! Welcome to Webacademy!';
    } else if (currentTime < 18) {
        heroText.textContent = 'Good Afternoon! Welcome to Webacademy!';
    } else {
        heroText.textContent = 'Good Evening! Welcome to Webacademy!';
    }
};

// Redirection directe après sélection
document.getElementById('select-beginner').addEventListener('click', function () {
    localStorage.setItem('selectedTraining', 'Beginner');
    window.location.href = 'inscription.html';
});

document.getElementById('select-advanced').addEventListener('click', function () {
    localStorage.setItem('selectedTraining', 'Advanced');
    window.location.href = 'inscription.html';
});

// Bouton de réinitialisation (facultatif)
const resetButton = document.getElementById('reset-preference');
if (resetButton) {
    resetButton.addEventListener('click', function () {
        localStorage.removeItem('selectedTraining');
        alert('Your training preference has been reset.');
        // Optionnel : reload ou modification de texte
    });
}
