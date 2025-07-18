   
const toggleButtons = document.querySelectorAll('.oval');


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
const extensionGrid = document.querySelector('.extension-grid');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterType = button.id;
    console.log(`You clicked: ${filterType}`);

    
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
 
  });
});





