// Form validation and submission script
// Author: Manus AI
// Version: 1.0

document.addEventListener('DOMContentLoaded', function() {
    // Contact form validation and submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            let isValid = true;
            let errorMessage = '';
            
            if (!name) {
                isValid = false;
                errorMessage += 'Name is required.\n';
                document.getElementById('name').classList.add('error');
            } else {
                document.getElementById('name').classList.remove('error');
            }
            
            if (!email) {
                isValid = false;
                errorMessage += 'Email is required.\n';
                document.getElementById('email').classList.add('error');
            } else if (!isValidEmail(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
                document.getElementById('email').classList.add('error');
            } else {
                document.getElementById('email').classList.remove('error');
            }
            
            if (!subject) {
                isValid = false;
                errorMessage += 'Subject is required.\n';
                document.getElementById('subject').classList.add('error');
            } else {
                document.getElementById('subject').classList.remove('error');
            }
            
            if (!message) {
                isValid = false;
                errorMessage += 'Message is required.\n';
                document.getElementById('message').classList.add('error');
            } else {
                document.getElementById('message').classList.remove('error');
            }
            
            if (!isValid) {
                alert('Please correct the following errors:\n' + errorMessage);
                return;
            }
            
            // In a real implementation, this would send the form data to a server
            // For GitHub Pages, we'll use a service like Formspree or a serverless function
            
            // Simulate form submission success
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
            
            // Log form submission for demonstration
            console.log('Form submitted with values:', { name, email, subject, message });
        });
    }
    
    // Newsletter form validation and submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input[type="email"]').value.trim();
            
            if (!email) {
                alert('Please enter your email address');
                return;
            } else if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // In a real implementation, this would send the email to a newsletter service
            alert('Thank you for subscribing to my newsletter!');
            newsletterForm.reset();
            
            // Log newsletter subscription for demonstration
            console.log('Newsletter subscription:', email);
        });
    }
    
    // Email validation helper function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
