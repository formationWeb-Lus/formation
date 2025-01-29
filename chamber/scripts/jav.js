document.addEventListener('DOMContentLoaded', function () {

    // Add current date to the hidden timestamp field
    const timestampField = document.getElementById('timestamp');
    timestampField.value = new Date().toISOString();

    // Modal handling
    document.querySelectorAll('[data-modal]').forEach(card => {
        card.addEventListener('click', function () {
            const modalId = card.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    // Close modal when 'X' is clicked
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function () {
            closeBtn.closest('.modal').style.display = 'none';
        });
    });

});