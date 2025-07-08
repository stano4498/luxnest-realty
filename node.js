// scripts.js

// Mortgage Calculator
document.addEventListener('DOMContentLoaded', () => {
  const loanAmountInput = document.getElementById('loanAmount');
  const interestRateInput = document.getElementById('interestRate');
  const loanTermInput = document.getElementById('loanTerm');
  const calculateBtn = document.getElementById('calculateBtn');
  const resultDiv = document.getElementById('result');

  if (calculateBtn) {
    calculateBtn.addEventListener('click', () => {
      const principal = parseFloat(loanAmountInput.value);
      const annualInterestRate = parseFloat(interestRateInput.value) / 100;
      const years = parseInt(loanTermInput.value);

      if (
        isNaN(principal) || principal <= 0 ||
        isNaN(annualInterestRate) || annualInterestRate <= 0 ||
        isNaN(years) || years <= 0
      ) {
        resultDiv.textContent = 'Please enter valid positive numbers for all fields.';
        return;
      }

      const monthlyInterestRate = annualInterestRate / 12;
      const numberOfPayments = years * 12;
      const monthlyPayment = (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      resultDiv.textContent = `Estimated Monthly Payment: KSh ${monthlyPayment.toFixed(2)}`;
    });
  }
});

// Property Search Functionality
document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  const resultsContainer = document.getElementById('results');

  // Sample property data - in real app, this would come from a database or API
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa in Karen',
      location: 'Karen',
      price: 35000000,
      type: 'Residential',
      bedrooms: 5,
      bathrooms: 4,
      image: 'images/property1.jpg'
    },
    {
      id: 2,
      title: 'Modern Apartment in Westlands',
      location: 'Westlands',
      price: 15000000,
      type: 'Residential',
      bedrooms: 3,
      bathrooms: 2,
      image: 'images/property2.jpg'
    },
    {
      id: 3,
      title: 'Commercial Office Space in Upper Hill',
      location: 'Upper Hill',
      price: 45000000,
      type: 'Commercial',
      bedrooms: 0,
      bathrooms: 2,
      image: 'images/property3.jpg'
    },
    {
      id: 4,
      title: 'Prime Land in Kitengela',
      location: 'Kitengela',
      price: 8000000,
      type: 'Land',
      bedrooms: 0,
      bathrooms: 0,
      image: 'images/property4.jpg'
    },
    // ... add remaining 11 properties for a total of 15 ...
  ];

  const filterProperties = () => {
    const location = document.getElementById('location').value;
    const priceRange = document.getElementById('priceRange').value;
    const propertyType = document.getElementById('propertyType').value;
    const bedrooms = parseInt(document.getElementById('bedrooms').value);
    const bathrooms = parseInt(document.getElementById('bathrooms').value);

    if (!location || !priceRange || !propertyType || !bedrooms || !bathrooms) {
      resultsContainer.innerHTML = '<p style="text-align:center; color:#d9534f;">Please fill all search fields.</p>';
      return;
    }

    const [minPrice, maxPrice] = priceRange.split('-').map(Number);

    const filtered = properties.filter(prop => {
      const inLocation = prop.location === location;
      const inPriceRange = prop.price >= minPrice && prop.price <= maxPrice;
      const isType = prop.type === propertyType;
      const hasBedrooms = prop.bedrooms >= bedrooms;
      const hasBathrooms = prop.bathrooms >= bathrooms;

      return inLocation && inPriceRange && isType && hasBedrooms && hasBathrooms;
    });

    if (filtered.length === 0) {
      resultsContainer.innerHTML = '<p style="text-align:center;">No properties match your criteria.</p>';
      return;
    }

    resultsContainer.innerHTML = filtered.map(p => `
      <div class="result-card">
        <img src="${p.image}" alt="${p.title}" />
        <div class="result-info">
          <h3>${p.title}</h3>
          <p><strong>Location:</strong> ${p.location}</p>
          <p><strong>Price:</strong> KSh ${p.price.toLocaleString()}</p>
          <p><strong>Type:</strong> ${p.type}</p>
          <p><strong>Bedrooms:</strong> ${p.bedrooms}</p>
          <p><strong>Bathrooms:</strong> ${p.bathrooms}</p>
        </div>
      </div>
    `).join('');
  };

  if (searchForm) {
    searchForm.addEventListener('submit', e => {
      e.preventDefault();
      filterProperties();
    });
  }

  // Optional: Clear results on page load
  if (resultsContainer) {
    resultsContainer.innerHTML = '';
  }
});
