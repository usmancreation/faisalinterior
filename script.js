// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  // We can add a simple mobile menu toggle here if we add the HTML for it later
  console.log("Faisal Design website loaded.");
  
  // Update year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Handle Free Quote form submission
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const area = document.getElementById('area').value;
      const service = document.getElementById('service').value;
      const budget = document.getElementById('budget').value;

      // Construct WhatsApp Message
      const message = `Hello Faisal Design! I want a Free Quote.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Area:* ${area}%0A*Service:* ${service}%0A*Budget:* ${budget}`;

      // Open WhatsApp
      window.open(`https://wa.me/923036047227?text=${message}`, '_blank');
    });
  }

  // Handle service parameter from URL (for services page "Get Quote" buttons)
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  if (serviceParam && document.getElementById('service')) {
    const serviceSelect = document.getElementById('service');
    // Convert URL parameter to match option values
    const serviceMap = {
      'wallpaper': 'Wallpaper',
      'pvc-floor': 'PVC Vinyl Floor',
      'wooden-floor': 'Wooden Floor',
      'blinds': 'Window Blinds',
      'curtains': 'Curtains',
      'carpet': 'Carpet',
      'astro-turf': 'Astro Turf'
    };
    const mappedService = serviceMap[serviceParam.toLowerCase()] || serviceParam;
    
    // Set the selected option
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].value === mappedService) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }
});
