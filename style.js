// ------------------
// -------Contact----
// ----------------
  function handleSubmit(event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name && email && message) {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
        setTimeout(() => popup.style.display = 'none', 3000);
        event.target.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    }