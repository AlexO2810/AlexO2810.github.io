// public/js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    languageSelector.addEventListener('change', changeLanguage);

    // Initial language setup
    changeLanguage();

    function changeLanguage() {
        const selectedLanguage = languageSelector.value || 'en'; // Default to 'en'
        fetch(`SPA/public/resx/${selectedLanguage}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Apply the language data to the page
                document.querySelector('h1').textContent = data.title;
                document.querySelector('#culture h2').textContent = data.cultureTitle;
                document.querySelector('#places h2').textContent = data.placesTitle;
                document.querySelector('#language h2').textContent = data.languageTitle;
                document.querySelector('#facts h2').textContent = data.factsTitle;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
});
