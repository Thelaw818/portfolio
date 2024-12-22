{
  const sectionContent = document.getElementById(sectionId);
  const toggleIcon = sectionContent.previousElementSibling.querySelector('.toggle-icon');
  if (sectionContent.style.display === 'block') {
    sectionContent.style.display = 'none';
    toggleIcon.textContent = '+';
  } else {
    sectionContent.style.display = 'block';
    toggleIcon.textContent = '-';
  }
}
