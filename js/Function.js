(function() {
  'use strict';

  function showNav() {
    return {
      init: function() {
        var burger = document.querySelector('.burger');
        var navList = document.querySelector('.nav-list');
        var navLinks = document.querySelectorAll('.nav-list li');

        burger.addEventListener('click', function() {
          navList.classList.toggle('nav-active');

          Array.prototype.forEach.call(navLinks, function(li, index) {
            if(li.style.animation) {
              li.style.animation = '';
            } else {
              li.style.animation = `navListFade 500ms ease forwards ${index / 7 }s`;
            }
          });

          burger.classList.toggle('close');
        });
      }
    }
  }

  showNav().init();
})();