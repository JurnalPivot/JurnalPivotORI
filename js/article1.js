document.addEventListener('DOMContentLoaded', function() {
    const referencesToggle = document.querySelector('.references-toggle');
    const referencesContent = document.querySelector('.references-content');
    const toggleIcon = document.querySelector('.toggle-icon');
    
    referencesToggle.addEventListener('click', function() {
        referencesContent.classList.toggle('active');
        if (referencesContent.classList.contains('active')) {
            toggleIcon.textContent = '−';
        } else {
            toggleIcon.textContent = '+';
        }
    });
});