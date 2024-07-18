document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.getElementById('toggle-button');
    const toggleButtonHamburger = document.getElementById('toggle-button-mobile');

    toggleButtonHamburger.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-closed');
    });

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-closed');
        if (sidebar.classList.contains('sidebar-closed')) {
            toggleButton.src = 'https://faheim.ai/files/rightArrow.svg';
        } else {
            toggleButton.src = 'https://faheim.ai/files/leftArrow.svg';
        }
    });

    // Add event to close sidebar when clicking out of it
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !toggleButtonHamburger.contains(event.target) && !toggleButton.contains(event.target)) {
            if (!sidebar.classList.contains('sidebar-closed')) {
                sidebar.classList.add('sidebar-closed');
                toggleButton.src = 'https://faheim.ai/files/rightArrow.svg';
            }
        }
    });
});
