$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    autoplay: true, 
    autoplayTimeout: 3000, 
    nav: false,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 2.7
      }
    }
  });

  $('.custom-nav .prev').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });

  $('.custom-nav .next').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
  });
});


//popup
function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}