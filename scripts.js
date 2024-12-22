{
    const section = document.getElementById(sectionId);
    const icon = section.previousElementSibling.querySelector('.toggle-icon');

    if (section.style.display === 'none' || !section.style.display) {
        section.style.display = 'block'; // Show section
        icon.classList.remove('collapsed');
        icon.classList.add('expanded');
    } else {
        section.style.display = 'none'; // Hide section
        icon.classList.remove('expanded');
        icon.classList.add('collapsed');
    }
}
