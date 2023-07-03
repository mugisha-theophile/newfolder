// script.js

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
      // If dark mode is enabled, update CSS variables for dark mode
      document.documentElement.style.setProperty('--primary-background-color', '#333');
      document.documentElement.style.setProperty('--primary-text-color', '#fff');
      document.documentElement.style.setProperty('--secondary-background-color', '#222');
      document.documentElement.style.setProperty('--secondary-text-color', '#fff');
    } else {
      // If light mode is enabled, revert CSS variables to default light mode values
      document.documentElement.style.setProperty('--primary-background-color', '#f2f2f2');
      document.documentElement.style.setProperty('--primary-text-color', '#333');
      document.documentElement.style.setProperty('--secondary-background-color', '#333');
      document.documentElement.style.setProperty('--secondary-text-color', '#fff');
    }
  }
  
  // Check local storage to maintain user's theme preference on page refresh
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    toggleTheme();
  };

  const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
  const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
  const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
  const header = document.querySelector('.header.container');
  
  hamburger.addEventListener('click',()=>{
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
  })
  
  document.addEventListener('scroll',()=>{
      var scroll_position = window.scrollY;
      if(scroll_position > 250){
          header.style.backgroungColor = '#29323c';
      }
      else{
          header.style.backgroungColor = 'transparent'
      }
  })
  
  menu_item.forEach(item =>{
      item.addEventListener('click',()=>{
          hamburger.classList.toggle('active');
          mobile_menu.classList.toggle('active');
  
      })
  })