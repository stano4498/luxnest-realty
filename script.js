// Theme toggle button
const toggleThemeBtn = document.getElementById('toggle-theme');
const toggleBtn = document.getElementById("themeToggle");
  const prefersDark = localStorage.getItem("theme") === "dark";

  function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

  if (prefersDark) {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

// Handle property search form submission (demo only)
const searchForm = document.getElementById('property-search-form');
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Search functionality is coming soon!');
});

// Handle email alerts subscription form
const emailForm = document.getElementById('email-alert-form');
const confirmationMsg = document.querySelector('.confirmation-message');

emailForm.addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = emailForm.email.value.trim();
  if (!emailInput || !validateEmail(emailInput)) {
    confirmationMsg.textContent = 'Please enter a valid email address.';
    confirmationMsg.style.color = 'red';
    return;
  }
  // Simulate submission success
  confirmationMsg.style.color = 'var(--primary-blue)';
  confirmationMsg.textContent = `Thanks for subscribing, ${emailInput}!`;
  emailForm.reset();
});

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Initialize Google Maps with sample markers
function initMap() {
  const center = { lat: 39.8283, lng: -98.5795 }; // Center of USA

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: center,
  });

  // Sample property locations
  const properties = [
    { position: { lat: 25.7617, lng: -80.1918 }, title: 'Miami Luxury Villa' },
    { position: { lat: 40.7128, lng: -74.0060 }, title: 'NY Downtown Apartment' },
    { position: { lat: 30.2672, lng: -97.7431 }, title: 'Austin Suburban Home' },
  ];

  properties.forEach(prop => {
    new google.maps.Marker({
      position: prop.position,
      map: map,
      title: prop.title,
    });
  });
}

// Load Google Maps script async and initialize map
function loadGoogleMaps() {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
  script.defer = true;
  document.head.appendChild(script);
}

window.onload = loadGoogleMaps;

// Sample property data
const properties = [
  {
    id: 1,
    title: "Luxury Villa with Pool",
    location: "Miami",
    type: "house",
    price: 1250000,
    bedrooms: 5,
    image: "images/property1.jpg",
    address: "1234 Palm Street, Miami, FL",
    priceText: "$1,250,000",
    link: "property-detail.html?id=1",
  },
  {
    id: 2,
    title: "Modern Downtown Apartment",
    location: "New York",
    type: "apartment",
    price: 850000,
    bedrooms: 3,
    image: "images/property2.jpg",
    address: "789 City Ave, New York, NY",
    priceText: "$850,000",
    link: "property-detail.html?id=2",
  },
  {
    id: 3,
    title: "Cozy Suburban Home",
    location: "Austin",
    type: "house",
    price: 560000,
    bedrooms: 4,
    image: "images/property3.jpg",
    address: "456 Oak Lane, Austin, TX",
    priceText: "$560,000",
    link: "property-detail.html?id=3",
  },
  {
    id: 4,
    title: "Downtown Office Space",
    location: "Chicago",
    type: "commercial",
    price: 700000,
    bedrooms: 0,
    image: "images/property4.jpg",
    address: "100 Business Rd, Chicago, IL",
    priceText: "$700,000",
    link: "property-detail.html?id=4",
  },
  {
    id: 5,
    title: "Luxury Condo Suite",
    location: "San Francisco",
    type: "condo",
    price: 950000,
    bedrooms: 2,
    image: "images/property5.jpg",
    address: "200 Market St, San Francisco, CA",
    priceText: "$950,000",
    link: "property-detail.html?id=5",
  },
  {
    id: 6,
    title: "Open Land Parcel",
    location: "Dallas",
    type: "land",
    price: 150000,
    bedrooms: 0,
    image: "images/property6.jpg",
    address: "Lot 23, Dallas, TX",
    priceText: "$150,000",
    link: "property-detail.html?id=6",
  },
  {
    id: 7,
    title: "Beachfront Bungalow",
    location: "Miami",
    type: "house",
    price: 780000,
    bedrooms: 3,
    image: "images/property7.jpg",
    address: "432 Beach Rd, Miami, FL",
    priceText: "$780,000",
    link: "property-detail.html?id=7",
  },
  {
    id: 8,
    title: "Luxury Penthouse",
    location: "New York",
    type: "apartment",
    price: 2250000,
    bedrooms: 4,
    image: "images/property8.jpg",
    address: "500 Central Park West, NY",
    priceText: "$2,250,000",
    link: "property-detail.html?id=8",
  },
  {
    id: 9,
    title: "Industrial Warehouse",
    location: "Houston",
    type: "commercial",
    price: 550000,
    bedrooms: 0,
    image: "images/property9.jpg",
    address: "99 Industrial Way, Houston, TX",
    priceText: "$550,000",
    link: "property-detail.html?id=9",
  },
  {
    id: 10,
    title: "Family Home with Garden",
    location: "Austin",
    type: "house",
    price: 460000,
    bedrooms: 3,
    image: "images/property10.jpg",
    address: "789 Oakwood Dr, Austin, TX",
    priceText: "$460,000",
    link: "property-detail.html?id=10",
  },

];

// DOM Elements
const listingsGrid = document.getElementById("listings-grid");
const noResults = document.getElementById("no-results");
const filterForm = document.getElementById("filter-form");
const filterLocation = document.getElementById("filter-location");
const filterType = document.getElementById("filter-type");
const filterPrice = document.getElementById("filter-price");
const filterBedrooms = document.getElementById("filter-bedrooms");
const clearFiltersBtn = document.getElementById("clear-filters");

// Render cards function
function renderProperties(list) {
  listingsGrid.innerHTML = "";
  if (list.length === 0) {
    noResults.hidden = false;
    return;
  }
  noResults.hidden = true;

  list.forEach((property) => {
    const card = document.createElement("article");
    card.className = "property-card";

    card.innerHTML = `
      <img src="${property.image}" alt="${property.title}" loading="lazy" />
      <div class="property-info">
        <h3>${property.title}</h3>
        <p>${property.address}</p>
        <p>Type: ${capitalize(property.type)}</p>
        <p>Bedrooms: ${property.bedrooms > 0 ? property.bedrooms : "N/A"}</p>
        <p class="price">${property.priceText}</p>
        <a href="${property.link}" class="btn-secondary">View Details</a>
      </div>
    `;
    listingsGrid.appendChild(card);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Price filtering helper
function inPriceRange(price, range) {
  if (!range) return true;
  if (range === "600000+") return price >= 600000;
  const [min, max] = range.split("-").map(Number);
  return price >= min && price <= max;
}

// Filtering function
function filterProperties() {
  let filtered = properties.filter((prop) => {
    const loc = filterLocation.value.trim().toLowerCase();
    if (loc && !prop.location.toLowerCase().includes(loc)) return false;

    if (filterType.value && prop.type !== filterType.value) return false;

    if (!inPriceRange(prop.price, filterPrice.value)) return false;

    if (filterBedrooms.value && prop.bedrooms < parseInt(filterBedrooms.value))
      return false;

    return true;
  });

  renderProperties(filtered);
}

// Event listeners
filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  filterProperties();
});

clearFiltersBtn.addEventListener("click", () => {
  filterLocation.value = "";
  filterType.value = "";
  filterPrice.value = "";
  filterBedrooms.value = "";
  renderProperties(properties);
});

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  renderProperties(properties);
});

function handleSubjectChange() {
  const subject = document.getElementById("subject").value;
  const conditionalSection = document.getElementById("conditional-section");

  if (subject === "buying" || subject === "renting") {
    conditionalSection.classList.remove("hidden");
  } else {
    conditionalSection.classList.add("hidden");
  }
}

// Optional: Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent successfully!");
  this.reset();
  document.getElementById("conditional-section").classList.add("hidden");
});

function filterFAQ() {
  const input = document.getElementById('faqSearch').value.toLowerCase();
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? 'block' : 'none';
  });
}

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const toggleLink = document.querySelector('.toggle-link');
const formTitle = document.getElementById('formTitle');

function toggleForms() {
  if (loginForm.style.display !== 'none') {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    toggleLink.innerText = 'Already have an account? Login here';
    formTitle.innerText = 'Register';
  } else {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    toggleLink.innerText = "Don't have an account? Register here";
    formTitle.innerText = 'Login';
  }
}

function biometricLogin() {
  if (window.PublicKeyCredential) {
    alert('Biometric login simulated (in a real app, this would use WebAuthn).');
  } else {
    alert('Biometric login not supported on this browser.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const messageDiv = document.getElementById('message');
  const toggleLink = document.querySelector('.toggle-link');
  const formTitle = document.getElementById('formTitle');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would do real login validation
    messageDiv.textContent = "✅ Logged in successfully!";
    messageDiv.style.color = 'green';
    loginForm.reset();
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = registerForm.querySelector('input[type="password"]').value;
    const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;
    if (password !== confirmPassword) {
      messageDiv.textContent = "❌ Passwords do not match.";
      messageDiv.style.color = 'red';
      return;
    }
    // Here you would do real registration logic
    messageDiv.textContent = "✅ Registered successfully! You can now login.";
    messageDiv.style.color = 'green';
    registerForm.reset();
    toggleForms();
  });

  toggleLink.addEventListener('click', toggleForms);

  function toggleForms() {
    if (loginForm.style.display === 'none') {
      loginForm.style.display = 'flex';
      registerForm.style.display = 'none';
      toggleLink.textContent = "Don't have an account? Register here";
      formTitle.textContent = "Login";
      messageDiv.textContent = '';
    } else {
      loginForm.style.display = 'none';
      registerForm.style.display = 'flex';
      toggleLink.textContent = "Already have an account? Login here";
      formTitle.textContent = "Register";
      messageDiv.textContent = '';
    }
  }
});

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navToggle.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    navMenu.classList.toggle('active');
  }
});
