const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');

// Track if sidebar is open or closed
let isSidebarOpen = false;

// Toggle sidebar visibility when the menu icon is clicked (mobile screens)
menuIcon.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        // For mobile screens, use 'open' class to slide down the sidebar
        sidebar.classList.toggle('open');
        isSidebarOpen = !isSidebarOpen;
    } else {
        // For desktop screens, toggle sidebar on the left
        if (isSidebarOpen) {
            sidebar.style.left = '-200px';
        } else {
            sidebar.style.left = '0';
        }
        isSidebarOpen = !isSidebarOpen;
    }
});

// Close sidebar when a page is selected (both on desktop and mobile)
function selectPage(event) {
    event.preventDefault(); // Prevent the link from navigating
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('open'); // Close the sidebar on mobile
    } else {
        sidebar.style.left = '-200px'; // Close the sidebar on desktop
    }
    isSidebarOpen = false; // Reset state to closed
}
