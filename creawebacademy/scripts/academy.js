// Fonction pour charger les données JSON et insérer dynamiquement dans le HTML
fetch('data/academy.json')
    .then(response => response.json())  // Parse le fichier JSON
    .then(data => {
        const galleryContainer = document.getElementById('image-gallery');
        
        data.gallery.forEach(item => {
            // Crée un élément <figure> pour chaque image
            const figure = document.createElement('figure');
            figure.classList.add('image-item');
            
            // Crée l'image
            const img = document.createElement('img');
            img.src = item.imgSrc;
            img.alt = item.alt;
            
            // Crée le titre de l'image
            const title = document.createElement('h3');
            title.textContent = item.title;
            
            // Crée la description du <figcaption>
            const figcaption = document.createElement('figcaption');
            const figcaptionTitle = document.createElement('p');
            figcaptionTitle.classList.add('title');
            figcaptionTitle.textContent = item.figcaptionTitle;
            
            const figcaptionDescription = document.createElement('p');
            figcaptionDescription.classList.add('description');
            figcaptionDescription.textContent = item.figcaptionDescription;
            
            // Ajoute la description au <figcaption>
            figcaption.appendChild(figcaptionTitle);
            figcaption.appendChild(figcaptionDescription);
            
            // Ajoute l'image et la description au <figure>
            figure.appendChild(img);
            figure.appendChild(title);
            figure.appendChild(figcaption);
            
            // Ajoute le <figure> à la galerie
            galleryContainer.appendChild(figure);
        });
    })
    .catch(error => {
        console.error('Error loading JSON data:', error);
    });






    function displayData(data) {
        const dataList = document.getElementById('data-list');
        dataList.innerHTML = ''; // Clear existing content
    
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('data-item');
            itemElement.innerHTML = `
                <h3>${item.title}</h3>
                <p>Category: ${item.category}</p>
                <p>Price: $${item.price}</p>
                <p>Rating: ${item.rating}</p>
                <button class="view-details" data-id="${item.id}">View Details</button>
            `;
            dataList.appendChild(itemElement);
        });
    }
    
    // Function to fetch data from a local JSON file
    async function fetchData() {
        try {
            const response = await fetch('data/academy.json');
            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json();
            
            // Store the fetched data in localStorage
            localStorage.setItem('items', JSON.stringify(data));
            displayData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    // Function to open the modal and show item details
    function openModal(itemId) {
        const data = JSON.parse(localStorage.getItem('items'));
        const item = data.find(i => i.id === itemId);
        
        if (item) {
            const modalData = document.getElementById('modal-data');
            modalData.innerHTML = `
                <h3>${item.title}</h3>
                <p>Category: ${item.category}</p>
                <p>Price: $${item.price}</p>
                <p>Description: ${item.description}</p>
                <p>Rating: ${item.rating}</p>
            `;
            document.getElementById('modal').style.display = 'block';
        }
    }
    
    // Function to close the modal
    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }
    
    // Event listener for the fetch data button
    document.getElementById('fetchDataBtn').addEventListener('click', fetchData);
    
    // Event listener for "View Details" buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details')) {
            const itemId = e.target.getAttribute('data-id');
            openModal(parseInt(itemId, 10)); 
        }
    });
    
    // Event listener for closing the modal
    document.getElementById('closeModal').addEventListener('click', closeModal);
    
    // When the DOM is loaded, check if data is available in localStorage
    document.addEventListener('DOMContentLoaded', () => {
        const storedData = localStorage.getItem('items');
        
        if (storedData) {
            try {
                const data = JSON.parse(storedData);
                displayData(data);
            } catch (error) {
                console.error('Error parsing data from localStorage:', error);
            }
        }
    });




    

    const courses = [
        {
            "id": 1,
            "title": "HTML Basics",
            "category": "Web Development",
            "price": 49.99,
            "rating": 4.5,
            "description": "Learn the fundamentals of HTML."
        },
        {
            "id": 2,
            "title": "CSS Mastery",
            "category": "Web Development",
            "price": 59.99,
            "rating": 4.7,
            "description": "Master CSS and create beautiful websites."
        },
        {
            "id": 3,
            "title": "JavaScript Essentials",
            "category": "Web Development",
            "price": 69.99,
            "rating": 4.8,
            "description": "Get a deep understanding of JavaScript for modern web development."
        },
        {
            "id": 4,
            "title": "React for Beginners",
            "category": "Web Development",
            "price": 79.99,
            "rating": 4.9,
            "description": "Learn how to build dynamic, interactive user interfaces using React."
        },
        {
            "id": 5,
            "title": "Node.js and Express",
            "category": "Backend Development",
            "price": 89.99,
            "rating": 4.6,
            "description": "Master server-side JavaScript with Node.js and Express."
        }
    ];
    
    // Fonction pour afficher la liste des cours
    function renderCourses() {
        const courseListDiv = document.getElementById('course-list');
        courses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.classList.add('course');
            courseDiv.innerHTML = `
                <h2>${course.title}</h2>
                <button class="course-detail-btn" onclick="openModal(${course.id})">see details</button>
            `;
            courseListDiv.appendChild(courseDiv);
        });
    }
    
    // Fonction pour ouvrir le modal et afficher les détails du cours
    function openModal(courseId) {
        const course = courses.find(course => course.id === courseId);
        const modal = document.getElementById('modal');
        const modalData = document.getElementById('modal-data');
        
        modalData.innerHTML = `
            <h2>${course.title}</h2>
            <p><strong>Category:</strong> ${course.category}</p>
            <p><strong>Price:</strong> $${course.price}</p>
            <p><strong>Rating:</strong> ${course.rating}</p>
            <p><strong>Description:</strong> ${course.description}</p>
        `;
        modal.style.display = 'flex';  // Afficher le modal
    }
    document.addEventListener("DOMContentLoaded", function () {
        const menuButton = document.querySelector(".hamburger-menu");
        const navList = document.querySelector(".nav-list");
    
        menuButton.addEventListener("click", function () {
            navList.classList.toggle("active");
        });
    });
    