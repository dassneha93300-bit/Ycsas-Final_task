function showSection(id) {
  let sections = document.querySelectorAll('.content');
  sections.forEach(section => section.style.display = 'none');

  document.getElementById(id).style.display = 'block';
}

function toggleMode() {
  document.body.classList.toggle('dark');
}

function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return false;
  }
  alert("Form submitted successfully!");
  return false;
}
