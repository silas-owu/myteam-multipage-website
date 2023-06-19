//Using Jquery for homepage modal
//Using jQuery for DOM manipulations

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('#menu-btn');
    const homepageModal = document.querySelector('#homepage-modal');
    const closeBtn = document.querySelector('#close-btn');
  
    menuBtn.addEventListener('click', function() {
      homepageModal.style.visibility = 'visible';
    });
  
    closeBtn.addEventListener('click', function() {
      homepageModal.style.visibility = 'hidden';
    });
})

