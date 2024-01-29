document.addEventListener('DOMContentLoaded', () => {
      const menuBar = document.querySelector(".bars");
    
      if (menuBar) {
        menuBar.addEventListener('click', () => {
          const menusElement = document.querySelector(".menus");
    
          if (menusElement) {
            // Toggle the display property
            menusElement.style.display = (menusElement.style.display === 'none' || menusElement.style.display === '') ? 'flex' : 'none';
          }
        });
      }
    });
    