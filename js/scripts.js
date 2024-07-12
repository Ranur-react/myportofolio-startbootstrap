// function toggleText() {
//     const content = document.getElementById('experience-content');
//     const button = document.getElementById('read-more-btn');

//     if (content.classList.contains('show-all')) {
//         content.classList.remove('show-all');
//         button.textContent = 'Read More';
//     } else {
//         content.classList.add('show-all');
//         button.textContent = 'Read Less';
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.read-more-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const content = this.previousElementSibling;

            if (content.classList.contains('text-truncate')) {
                content.classList.remove('text-truncate');
                this.textContent = 'Read Less';
            } else {
                content.classList.add('text-truncate');
                this.textContent = 'Read More';
            }
        });
    });
});
