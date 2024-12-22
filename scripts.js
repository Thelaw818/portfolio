{
  const section = document.getElementById(sectionId);
  const icon = section.previousElementSibling.querySelector('.toggle-icon');

  if (section.style.display === 'none' || !section.style.display) {
    section.style.display = 'block'; // Show section
    icon.textContent = '-'; // Change to minus icon
  } else {
    section.style.display = 'none'; // Hide section
    icon.textContent = '+'; // Change to plus icon
  }
}
