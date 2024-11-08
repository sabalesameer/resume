document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const certificateLinks = document.querySelectorAll('.certificate-link');
    const closeButtons = document.querySelectorAll('.close');

    // Ensure modals are hidden initially
    modals.forEach((modal) => {
        modal.style.display = 'none';
    });

    // Open the modal when a certificate is clicked
    certificateLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            modals.forEach((modal) => {
                modal.style.display = 'none'; // Ensure all modals are hidden before opening a new one
            });
            document.getElementById(`certificate${index + 1}`).style.display = 'flex';
        });
    });

    // Close the modal when the close button is clicked
    closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            modals.forEach((modal) => {
                modal.style.display = 'none';
            });
        });
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
