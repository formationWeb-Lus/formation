document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: "ide", name: "IDE (Integrated Development Environment)" },
        { id: "framework", name: "Development Framework" },
        { id: "version-control", name: "Version Control Tool" }
    ];
    
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    document.getElementById("reviewForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        const reviewData = {
            product: document.getElementById("product").value,
            rating: document.querySelector("input[name='rating']:checked").value,
            date: document.getElementById("installDate").value,
            features: Array.from(document.querySelectorAll("input[name='features']:checked")).map(f => f.value),
            comment: document.getElementById("review").value,
            username: document.getElementById("username").value || "Anonymous"
        };

        reviews.push(reviewData);
        localStorage.setItem("reviews", JSON.stringify(reviews));
        
        let count = localStorage.getItem("reviewCount") || 0;
        localStorage.setItem("reviewCount", parseInt(count) + 1);
        
        this.submit();
    });
});

function selectStar(level) {
    document.getElementById(`star${level}`).checked = true;
}

