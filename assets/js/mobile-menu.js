// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    
    openMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
    });

    // Close menu when clicking menu items
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        });
    });
});
