// Apply saved theme and font size on page load
document.addEventListener('DOMContentLoaded', () => {
    // Apply dark mode if saved in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Apply saved font size
    const fontSize = localStorage.getItem('fontSize');
    if (fontSize) {
        document.body.classList.add(`${fontSize}-font`);
    }
});

// Toggle dark mode
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Change font size
function changeFontSize(size) {
    document.body.classList.remove('small-font', 'medium-font', 'large-font');
    document.body.classList.add(`${size}-font`);
    localStorage.setItem('fontSize', size);
}
