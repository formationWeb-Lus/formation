document.addEventListener("DOMContentLoaded", function() {
    const reviewList = document.getElementById("review-list");

    // Simuler le chargement des avis depuis le stockage local
    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        
        reviewList.innerHTML = ""; // Nettoyer l'affichage
        if (reviews.length === 0) {
            reviewList.innerHTML = "<p>No reviews yet.</p>";
        } else {
            reviews.forEach(review => {
                const reviewItem = document.createElement("div");
                reviewItem.classList.add("review-item");

                reviewItem.innerHTML = `
                    <p class="review-user">${review.username || "Anonymous"} - Rating: ${review.rating}/5</p>
                    <p class="review-text">${review.comment || "No comments"}</p>
                `;
                reviewList.appendChild(reviewItem);
            });
        }
    }

    loadReviews();
});
