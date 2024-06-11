document.addEventListener('DOMContentLoaded', function() {
    const expandables = document.querySelectorAll('.expandable');

    expandables.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.width = '40em';
            element.style.height = '15em';

            const expanded = element.querySelector('.expanded');
            const minimized = element.querySelector('.minimized');

            if (expanded) {
                expanded.style.display = 'inline';
            }
            if (minimized) {
                minimized.style.display = 'none';
            }
        });

        element.addEventListener('mouseleave', () => {
            element.style.width = '25em';
            element.style.height = '15em';

            const expanded = element.querySelector('.expanded');
            const minimized = element.querySelector('.minimized');

            if (expanded) {
                expanded.style.display = 'none';
            }
            if (minimized) {
                minimized.style.display = 'inline';
            }
        });
    });
});