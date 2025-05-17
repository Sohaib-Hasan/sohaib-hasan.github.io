// AdSense Integration Script for Sohaib Hasan's Portfolio
// Author: Manus AI
// Version: 1.0

document.addEventListener('DOMContentLoaded', function() {
    // This script handles the integration of Google AdSense ads
    // In a real implementation, this would be replaced with actual AdSense code
    
    // Function to create and insert ad units
    function createAdUnit(container, adType) {
        // Create placeholder for AdSense
        const adPlaceholder = document.createElement('div');
        adPlaceholder.className = 'adsense-placeholder';
        
        // Different styling based on ad type
        switch(adType) {
            case 'banner':
                adPlaceholder.style.height = '90px';
                adPlaceholder.innerHTML = '<p>Advertisement Banner</p><p class="small">Google AdSense will be integrated here</p>';
                break;
            case 'sidebar':
                adPlaceholder.style.height = '250px';
                adPlaceholder.innerHTML = '<p>Sidebar Advertisement</p><p class="small">Google AdSense will be integrated here</p>';
                break;
            case 'in-content':
                adPlaceholder.style.height = '200px';
                adPlaceholder.innerHTML = '<p>In-Content Advertisement</p><p class="small">Google AdSense will be integrated here</p>';
                break;
            default:
                adPlaceholder.innerHTML = '<p>Advertisement Space</p><p class="small">Google AdSense will be integrated here</p>';
        }
        
        // Insert the ad unit into the container
        if (container) {
            container.appendChild(adPlaceholder);
        }
    }
    
    // Find ad containers and create ad units
    const adContainers = document.querySelectorAll('.adsense-container');
    
    adContainers.forEach((container, index) => {
        // Determine ad type based on container position or class
        let adType = 'default';
        
        if (container.classList.contains('adsense-banner')) {
            adType = 'banner';
        } else if (container.classList.contains('adsense-sidebar')) {
            adType = 'sidebar';
        } else if (container.classList.contains('adsense-in-content')) {
            adType = 'in-content';
        } else {
            // Default ad type based on position
            if (index === 0) {
                adType = 'banner';
            } else if (index === adContainers.length - 1) {
                adType = 'banner';
            } else {
                adType = 'in-content';
            }
        }
        
        // Create and insert ad unit
        createAdUnit(container, adType);
    });
    
    // Add in-content ads to blog posts
    const blogContent = document.querySelectorAll('.blog-content');
    
    blogContent.forEach(content => {
        const paragraphs = content.querySelectorAll('p');
        
        // Insert ad after the 3rd paragraph if there are enough paragraphs
        if (paragraphs.length >= 4) {
            const adContainer = document.createElement('div');
            adContainer.className = 'adsense-container adsense-in-content';
            
            // Insert after the 3rd paragraph
            paragraphs[2].after(adContainer);
            
            // Create and insert ad unit
            createAdUnit(adContainer, 'in-content');
        }
    });
    
    // Function to track affiliate link clicks
    function trackAffiliateClick(event) {
        const link = event.currentTarget;
        
        // In a real implementation, this would send data to an analytics service
        console.log('Affiliate link clicked:', link.href);
        
        // You could also add UTM parameters to the URL
        // This is just a demonstration and doesn't modify the actual link
    }
    
    // Add click tracking to affiliate links
    const affiliateLinks = document.querySelectorAll('a.affiliate-link');
    
    affiliateLinks.forEach(link => {
        link.addEventListener('click', trackAffiliateClick);
    });
});
