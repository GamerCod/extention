
// Select ALL toggle buttons
const toggleButtons = document.querySelectorAll('.oval');

// Loop through each one and attach event
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});


const darkToggle = document.getElementById('darkModeToggle');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


const filterButtons = document.querySelectorAll('.filter-bttn');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterType = button.id;
    console.log(`You clicked: ${filterType}`);

    // Optional: add an 'active' style
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // You can now filter cards or content here based on filterType
  });
});






   





cd57bbf (updated)
