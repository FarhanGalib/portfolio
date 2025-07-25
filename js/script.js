document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const closeSidebarButton = document.getElementById('close-sidebar-button');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    function openSidebar() {
        mobileSidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden'); // Prevent scrolling of main content
    }

    function closeSidebar() {
        mobileSidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    if (mobileMenuButton && mobileSidebar && closeSidebarButton && sidebarOverlay) {
        mobileMenuButton.addEventListener('click', openSidebar);
        closeSidebarButton.addEventListener('click', closeSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar); // Close when overlay is clicked

        // Close sidebar when a navigation link inside it is clicked
        mobileSidebar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeSidebar);
        });
    }

    // Set current year dynamically in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
