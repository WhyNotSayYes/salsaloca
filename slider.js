var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      modifier: 1,
      slideShadows: true,
      depth: 100,
    },
    centeredSlides: true,
    // spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });