document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const message = form.querySelector('#message').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all fields.');
        }
    });
});
