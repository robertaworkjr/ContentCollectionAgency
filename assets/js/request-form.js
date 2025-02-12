document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('requestForm');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Basic validation
        const requiredFields = ['projectTitle', 'projectType', 'projectDescription', 'name', 'email'];
        const missingFields = requiredFields.filter(field => !data[field]);
        
        if (missingFields.length > 0) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        try {
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';
            
            // Here you would typically send the data to your server
            // For demonstration, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            alert('Thank you for your request! We will contact you shortly.');
            form.reset();
            
            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
            
        } catch (error) {
            alert('There was an error submitting your request. Please try again.');
            console.error('Form submission error:', error);
        }
    });
});
