
// State and city data
const statesAndCities = {
    "West Bengal": ["Kolkata", "Bandel", "Durgapur", "Asansol", "Siliguri"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar"],
    "Delhi": ["New Delhi", "Delhi"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Allahabad"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner"]
};

// Sample bus data with multiple routes
const allBuses = [
    {
        id: 1,
        name: "Express Deluxe",
        type: "AC Sleeper",
        fromState: "West Bengal",
        fromCity: "Kolkata",
        toState: "Bihar",
        toCity: "Patna",
        departure: "08:00 AM",
        arrival: "12:30 PM",
        duration: "4h 30m",
        price: 45,
        seats: 40,
        amenities: ["Wi-Fi", "Charging Port", "Restroom", "Reclining Seats"],
        image: "https://images.unsplash.com/photo-1544627872-3c2b19c7486b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 2,
        name: "City Traveler",
        type: "AC Semi-Sleeper",
        fromState: "West Bengal",
        fromCity: "Kolkata",
        toState: "Bihar",
        toCity: "Patna",
        departure: "10:30 AM",
        arrival: "03:00 PM",
        duration: "4h 30m",
        price: 35,
        seats: 36,
        amenities: ["Wi-Fi", "Charging Port", "Snacks"],
        image: "https://images.unsplash.com/photo-1506499803350-5b302be68373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 3,
        name: "Comfort Ride",
        type: "Non-AC Seater",
        fromState: "West Bengal",
        fromCity: "Kolkata",
        toState: "Bihar",
        toCity: "Patna",
        departure: "02:15 PM",
        arrival: "07:00 PM",
        duration: "4h 45m",
        price: 25,
        seats: 42,
        amenities: ["Charging Port"],
        image: "https://images.unsplash.com/photo-1506499803350-5b302be68373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 4,
        name: "Bandel Express",
        type: "AC Sleeper",
        fromState: "West Bengal",
        fromCity: "Bandel",
        toState: "Bihar",
        toCity: "Patna",
        departure: "09:30 PM",
        arrival: "10:00 AM",
        duration: "12h 30m",
        price: 1200,
        seats: 40,
        amenities: ["Wi-Fi", "Charging Port", "Restroom", "Reclining Seats", "Blanket"],
        image: "https://images.unsplash.com/photo-1544627872-3c2b19c7486b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 5,
        name: "Patna Deluxe",
        type: "AC Semi-Sleeper",
        fromState: "West Bengal",
        fromCity: "Bandel",
        toState: "Bihar",
        toCity: "Patna",
        departure: "10:00 PM",
        arrival: "11:30 AM",
        duration: "13h 30m",
        price: 950,
        seats: 36,
        amenities: ["Wi-Fi", "Charging Port", "Snacks"],
        image: "https://images.unsplash.com/photo-1506499803350-5b302be68373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 6,
        name: "Bihar Express",
        type: "Non-AC Seater",
        fromState: "West Bengal",
        fromCity: "Bandel",
        toState: "Bihar",
        toCity: "Patna",
        departure: "08:00 PM",
        arrival: "09:00 AM",
        duration: "13h 00m",
        price: 650,
        seats: 42,
        amenities: ["Charging Port"],
        image: "https://images.unsplash.com/photo-1506499803350-5b302be68373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 7,
        name: "Kolkata Superfast",
        type: "AC Sleeper",
        fromState: "West Bengal",
        fromCity: "Kolkata",
        toState: "Delhi",
        toCity: "New Delhi",
        departure: "07:00 PM",
        arrival: "02:00 PM",
        duration: "19h 00m",
        price: 1800,
        seats: 40,
        amenities: ["Wi-Fi", "Charging Port", "Restroom", "Reclining Seats", "Blanket", "Meals"],
        image: "https://images.unsplash.com/photo-1544627872-3c2b19c7486b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 8,
        name: "Mumbai Express",
        type: "AC Semi-Sleeper",
        fromState: "Maharashtra",
        fromCity: "Mumbai",
        toState: "Maharashtra",
        toCity: "Pune",
        departure: "06:30 AM",
        arrival: "11:00 AM",
        duration: "4h 30m",
        price: 450,
        seats: 36,
        amenities: ["Wi-Fi", "Charging Port", "Snacks"],
        image: "https://images.unsplash.com/photo-1506499803350-5b302be68373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 9,
        name: "Chennai Traveler",
        type: "AC Sleeper",
        fromState: "Tamil Nadu",
        fromCity: "Chennai",
        toState: "Karnataka",
        toCity: "Bangalore",
        departure: "10:00 PM",
        arrival: "06:00 AM",
        duration: "8h 00m",
        price: 800,
        seats: 40,
        amenities: ["Wi-Fi", "Charging Port", "Restroom", "Reclining Seats"],
        image: "https://images.unsplash.com/photo-1544627872-3c2b19c7486b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 10,
        name: "Hyderabad Express",
        type: "AC Semi-Sleeper",
        fromState: "Telangana",
        fromCity: "Hyderabad",
        toState: "Andhra Pradesh",
        toCity: "Vijayawada",
        departure: "08:00 AM",
        arrival: "01:00 PM",
        duration: "5h 00m",
        price: 500,
        seats: 36,
        amenities: ["Wi-Fi", "Charging Port", "Snacks"],
        image: "https://images.unsplash.com/photo-1506499803350-5b302be68373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
];

// DOM elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const authSection = document.getElementById('authSection');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeRegisterModal = document.getElementById('closeRegisterModal');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const searchForm = document.getElementById('searchForm');
const busListings = document.getElementById('busListings');
const resultsTitle = document.getElementById('resultsTitle');
const fromStateSelect = document.getElementById('fromState');
const fromCitySelect = document.getElementById('fromCity');
const toStateSelect = document.getElementById('toState');
const toCitySelect = document.getElementById('toCity');
const swapLocationsBtn = document.getElementById('swapLocations');

// State variables
let currentUser = null;
let displayedBuses = [...allBuses]; // Initially show all buses

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeStateSelectors();
    renderBuses(displayedBuses);
    setupEventListeners();
    updateAuthUI();
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').min = today;
    
    // Set default values for search
    setDefaultSearchValues();
    
    // Perform initial search
    performSearch();
});

// Setup event listeners
function setupEventListeners() {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    closeLoginModal.addEventListener('click', () => closeModal(loginModal));
    closeRegisterModal.addEventListener('click', () => closeModal(registerModal));
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(registerModal);
    });
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerModal);
        openModal(loginModal);
    });
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    searchForm.addEventListener('submit', handleSearch);
    fromStateSelect.addEventListener('change', updateFromCities);
    toStateSelect.addEventListener('change', updateToCities);
    swapLocationsBtn.addEventListener('click', swapLocations);
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            closeModal(loginModal);
        }
        if (event.target === registerModal) {
            closeModal(registerModal);
        }
    });
}

// Initialize state selectors
function initializeStateSelectors() {
    // Populate state dropdowns
    Object.keys(statesAndCities).forEach(state => {
        const option1 = document.createElement('option');
        option1.value = state;
        option1.textContent = state;
        fromStateSelect.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = state;
        option2.textContent = state;
        toStateSelect.appendChild(option2);
    });
}

// Update from cities based on selected state
function updateFromCities() {
    const selectedState = fromStateSelect.value;
    fromCitySelect.innerHTML = '<option value="">Select City</option>';
    
    if (selectedState && statesAndCities[selectedState]) {
        statesAndCities[selectedState].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            fromCitySelect.appendChild(option);
        });
    }
}

// Update to cities based on selected state
function updateToCities() {
    const selectedState = toStateSelect.value;
    toCitySelect.innerHTML = '<option value="">Select City</option>';
    
    if (selectedState && statesAndCities[selectedState]) {
        statesAndCities[selectedState].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            toCitySelect.appendChild(option);
        });
    }
}

// Swap from and to locations
function swapLocations() {
    const fromState = fromStateSelect.value;
    const fromCity = fromCitySelect.value;
    const toState = toStateSelect.value;
    const toCity = toCitySelect.value;
    
    fromStateSelect.value = toState;
    fromCitySelect.value = toCity;
    toStateSelect.value = fromState;
    toCitySelect.value = fromCity;
    
    // Update city dropdowns
    updateFromCities();
    updateToCities();
}

// Set default search values
function setDefaultSearchValues() {
    fromStateSelect.value = "West Bengal";
    updateFromCities();
    fromCitySelect.value = "Bandel";
    
    toStateSelect.value = "Bihar";
    updateToCities();
    toCitySelect.value = "Patna";
    
    document.getElementById('passengers').value = '3';
}

// Toggle mobile menu
function toggleMobileMenu() {
    mainNav.classList.toggle('active');
}

// Open modal
function openModal(modal) {
    modal.style.display = 'flex';
}

// Close modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Handle login form submission
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // In a real application, you would validate credentials with a server
    // For this demo, we'll use a simple check
    if (email && password) {
        // Simulate successful login
        currentUser = {
            name: email.split('@')[0],
            email: email
        };
        
        // Save to localStorage to persist login state
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        updateAuthUI();
        closeModal(loginModal);
        
        // Clear form
        loginForm.reset();
        
        // Show success message
        alert(`Welcome back, ${currentUser.name}!`);
    } else {
        alert('Please enter both email and password.');
    }
}

// Handle register form submission
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }
    
    // Simulate successful registration
    currentUser = {
        name: name,
        email: email
    };
    
    // Save to localStorage to persist login state
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    updateAuthUI();
    closeModal(registerModal);
    
    // Clear form
    registerForm.reset();
    
    // Show success message
    alert(`Account created successfully! Welcome to BusExpress, ${name}!`);
}

// Handle logout
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    alert('You have been logged out successfully.');
}

// Update authentication UI based on login state
function updateAuthUI() {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
    
    if (currentUser) {
        // User is logged in
        authSection.innerHTML = `
            <div class="user-info">
                <div class="user-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
                <span>Hi, ${currentUser.name}</span>
                <a href="#" class="btn btn-light" id="logoutBtn">Logout</a>
            </div>
        `;
        
        // Add event listener to logout button
        document.getElementById('logoutBtn').addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    } else {
        // User is not logged in
        authSection.innerHTML = `
            <a href="#" class="btn btn-accent" id="loginBtn">Sign In</a>
        `;
        
        // Add event listener to login button
        document.getElementById('loginBtn').addEventListener('click', function(e) {
            e.preventDefault();
            openModal(loginModal);
        });
    }
}

// Perform search based on form values
function performSearch() {
    const fromState = fromStateSelect.value;
    const fromCity = fromCitySelect.value;
    const toState = toStateSelect.value;
    const toCity = toCitySelect.value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
    
    // Filter buses based on search criteria - EXACT MATCH
    const filteredBuses = allBuses.filter(bus => 
        bus.fromState === fromState && 
        bus.fromCity === fromCity && 
        bus.toState === toState && 
        bus.toCity === toCity
    );
    
    // Update displayed buses
    displayedBuses = filteredBuses;
    
    // Update results title
    if (filteredBuses.length > 0) {
        resultsTitle.textContent = `Available Buses (${filteredBuses.length} found)`;
    } else {
        resultsTitle.textContent = "No Buses Found";
    }
    
    // Re-render buses
    renderBuses(filteredBuses);
}

// Handle search form submission
function handleSearch(e) {
    e.preventDefault();
    performSearch();
}

// Render buses to the page
function renderBuses(busesToRender) {
    busListings.innerHTML = '';
    
    if (busesToRender.length === 0) {
        busListings.innerHTML = `
            <div class="no-results">
                <i class="fas fa-bus-slash"></i>
                <h3>No buses found for your search</h3>
                <p>Try adjusting your search criteria or check back later for new routes.</p>
                <button class="btn" id="showAllBuses" style="margin-top: 20px;">Show All Buses</button>
            </div>
        `;
        
        // Add event listener to show all buses button
        document.getElementById('showAllBuses').addEventListener('click', function() {
            fromStateSelect.value = '';
            fromCitySelect.innerHTML = '<option value="">Select City</option>';
            toStateSelect.value = '';
            toCitySelect.innerHTML = '<option value="">Select City</option>';
            performSearch();
        });
        return;
    }
    
    busesToRender.forEach(bus => {
        const busCard = document.createElement('div');
        busCard.className = 'bus-card';
        
        busCard.innerHTML = `
            <img src="${bus.image}" alt="${bus.name}" class="bus-image">
            <div class="bus-details">
                <div class="bus-header">
                    <h3 class="bus-name">${bus.name}</h3>
                    <span class="bus-type">${bus.type}</span>
                </div>
                <div class="bus-info">
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${bus.fromCity}, ${bus.fromState} to ${bus.toCity}, ${bus.toState}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-clock"></i>
                        <span>${bus.departure} - ${bus.arrival}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-hourglass-half"></i>
                        <span>${bus.duration}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chair"></i>
                        <span>${bus.seats} Seats</span>
                    </div>
                </div>
                <div class="bus-amenities">
                    <strong>Amenities:</strong> ${bus.amenities.join(', ')}
                </div>
                <div class="bus-footer">
                    <div class="price">₹${bus.price}</div>
                    <button class="btn select-seat-btn" data-id="${bus.id}">Select Seats</button>
                </div>
            </div>
        `;
        
        busListings.appendChild(busCard);
    });
    
    // Add event listeners to "Select Seats" buttons
    const selectSeatButtons = document.querySelectorAll('.select-seat-btn');
    selectSeatButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!currentUser) {
                alert('Please sign in to book tickets.');
                openModal(loginModal);
                return;
            }
            
            const busId = parseInt(this.getAttribute('data-id'));
            const bus = busesToRender.find(b => b.id === busId);
            alert(`Redirecting to seat selection for ${bus.name}...`);
            // In a real application, you would redirect to a seat selection page
        });
    });
}
