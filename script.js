document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');

            // Add smooth transition animation
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    });
});

