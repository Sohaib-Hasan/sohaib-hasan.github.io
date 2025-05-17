// GitHub Pages Integration Script
// Author: Manus AI
// Version: 1.0

document.addEventListener('DOMContentLoaded', function() {
    // This script adds GitHub Pages specific functionality
    
    // Check if we're running on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    if (isGitHubPages) {
        console.log('Running on GitHub Pages');
        
        // Fix relative paths if needed
        const fixRelativePaths = () => {
            // Get the repository name from the URL
            const pathSegments = window.location.pathname.split('/');
            const repoName = pathSegments[1]; // First segment after the domain
            
            // Only fix paths if we're in a repository (not a custom domain)
            if (repoName && repoName.length > 0) {
                // Fix links
                document.querySelectorAll('a[href^="/"]').forEach(link => {
                    if (!link.getAttribute('href').startsWith('/' + repoName)) {
                        link.href = '/' + repoName + link.getAttribute('href');
                    }
                });
                
                // Fix images
                document.querySelectorAll('img[src^="/"]').forEach(img => {
                    if (!img.getAttribute('src').startsWith('/' + repoName)) {
                        img.src = '/' + repoName + img.getAttribute('src');
                    }
                });
                
                // Fix CSS
                document.querySelectorAll('link[rel="stylesheet"][href^="/"]').forEach(link => {
                    if (!link.getAttribute('href').startsWith('/' + repoName)) {
                        link.href = '/' + repoName + link.getAttribute('href');
                    }
                });
                
                // Fix scripts
                document.querySelectorAll('script[src^="/"]').forEach(script => {
                    if (!script.getAttribute('src').startsWith('/' + repoName)) {
                        script.src = '/' + repoName + script.getAttribute('src');
                    }
                });
            }
        };
        
        // Call the function to fix paths
        fixRelativePaths();
    }
});
