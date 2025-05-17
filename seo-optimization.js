// SEO Optimization Script
// This script adds structured data and improves SEO performance

document.addEventListener('DOMContentLoaded', function() {
  // Add structured data for person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sohaib Hasan",
    "url": window.location.origin,
    "image": window.location.origin + "/images/profile.jpg",
    "jobTitle": "Data Analyst & Mathematics Lecturer",
    "description": "Data analyst with an M.Phil in Mathematics (Research: Cryptography), experienced in Python, SQL, Power BI, and Excel.",
    "sameAs": [
      "https://github.com/Sohaib-Hasan",
      "https://www.linkedin.com/in/sohaibhassan05/",
      "https://www.facebook.com/sohaib.hassan.4314",
      "https://www.instagram.com/_sohaib05/"
    ]
  };

  // Add structured data for website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": window.location.origin,
    "name": "Sohaib Hasan | Data Analyst & Mathematics Expert",
    "description": "Professional portfolio of Sohaib Hasan, data analyst with M.Phil in Mathematics specializing in Cryptography.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": window.location.origin + "/blog?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Add structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sohaib Hasan",
    "url": window.location.origin,
    "logo": window.location.origin + "/images/logo.png",
    "sameAs": [
      "https://github.com/Sohaib-Hasan",
      "https://www.linkedin.com/in/sohaibhassan05/",
      "https://www.facebook.com/sohaib.hassan.4314",
      "https://www.instagram.com/_sohaib05/"
    ]
  };

  // Create and append schema script tags
  const appendSchema = (schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  };

  appendSchema(personSchema);
  appendSchema(websiteSchema);
  appendSchema(organizationSchema);

  // Lazy load images for performance
  const lazyImages = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }

  // Add canonical links if missing
  if (!document.querySelector('link[rel="canonical"]')) {
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = window.location.href.split('?')[0]; // Remove query parameters
    document.head.appendChild(canonical);
  }

  // Add meta description if missing
  if (!document.querySelector('meta[name="description"]')) {
    const metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    metaDesc.content = 'Professional portfolio of Sohaib Hasan, data analyst with M.Phil in Mathematics specializing in Cryptography. Expertise in Python, SQL, Power BI, and Excel.';
    document.head.appendChild(metaDesc);
  }

  // Track outbound affiliate links
  const trackAffiliateClick = (event) => {
    const link = event.currentTarget;
    if (link.hostname !== window.location.hostname && link.classList.contains('affiliate-link')) {
      // In a real implementation, this would send data to an analytics service
      console.log('Affiliate link clicked:', link.href);
    }
  };

  document.querySelectorAll('a.affiliate-link').forEach(link => {
    link.addEventListener('click', trackAffiliateClick);
  });

  // Add newsletter popup delay
  const showNewsletterPopup = () => {
    const popup = document.querySelector('.newsletter-popup');
    if (popup && !localStorage.getItem('newsletter_shown')) {
      setTimeout(() => {
        popup.classList.remove('hidden');
        localStorage.setItem('newsletter_shown', 'true');
      }, 30000); // Show after 30 seconds
    }
  };

  showNewsletterPopup();

  // Optimize AdSense placement
  const optimizeAdPlacement = () => {
    const contentBlocks = document.querySelectorAll('.blog-content p, .blog-content h2, .blog-content h3');
    if (contentBlocks.length > 3) {
      // Insert ad after the 3rd paragraph or heading
      const adContainer = document.createElement('div');
      adContainer.className = 'adsense-container my-6';
      adContainer.innerHTML = '<div class="adsense-placeholder"><p class="text-gray-500">Advertisement Space</p><p class="text-xs text-gray-400">Google AdSense will be integrated here</p></div>';
      
      contentBlocks[2].after(adContainer);
    }
  };

  // Only run on blog pages
  if (window.location.pathname.includes('/blog')) {
    optimizeAdPlacement();
  }

  // Add conversion tracking to buttons
  document.querySelectorAll('.btn-primary, .cta-primary').forEach(button => {
    button.addEventListener('click', () => {
      // In a real implementation, this would send conversion data to an analytics service
      console.log('Conversion button clicked:', button.textContent);
    });
  });
});
