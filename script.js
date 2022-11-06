//Слайдер

const slider = document.querySelector('.main_swiper');
const slider2 = document.querySelector('.main_hero__swiper');

let mySwiper = new Swiper('.main_swiper', {
    slidesPerView: 1,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: 'swiper-pagination',
        clickable: true,
      
    },

    navigation: {
        nextEl: '.main_swiper__next',
        prevEl: '.main_swiper__prev',
      },

      breakpoints: {
        320: {
          initialSlide: 18,
          spaceBetween: 10,
        },

        844: {
          spaceBetween: 10,
        },
      },
})



let mySwiper2 = new Swiper('.main_hero__swiper', {
  slidesPerView: 1,
  slidesPerColumnFill: 'row',
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,

  pagination: {
      el: 'swiper-pagination',
      clickable: true,
    
  },

  navigation: {
      nextEl: '.main_hero__next',
      prevEl: '.main_hero__prev',
    },

    breakpoints: {
      320: {
        spaceBetween: 20,
      },
    },
})

//Дроп

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 25,
  });
  })

  const btns = document.querySelectorAll(".menu__btn");
  const dropdowns = document.querySelectorAll(".dropdown");
  const activeClassdropdowns = "dropdown__active";
  
  btns.forEach(item => {
    item.addEventListener("click", function() {
      let DropThis = this.parentElement.querySelector(".dropdown");
      dropdowns.forEach(el => {
        if (el != DropThis) {
          el.classList.remove(activeClassdropdowns)
        }
      });
      btns.forEach(el => {
        if (el != this) {
          el.classList.remove(activeClassbtns)
        }
      });
      DropThis.classList.toggle(activeClassdropdowns);
      this.classList.toggle(activeClassbtns);
    })
  }); 

  document.querySelector(".menu__btn").addEventListener("click", function(e) {
    document.querySelector(".menu__svg").classList.toggle("active");
  });


//Бургер

  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  let mainHeroContent = document.querySelector('.main_hero__content');
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    mainHeroContent.classList.toggle('main_hero__content--active');
});

//Форма footer

function check() {
var submit = document.getElementsByName('submit')[0];
if (document.getElementById('politics').checked)
submit.disabled = '';
else
submit.disabled = 'disabled';
}

document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
      var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
          if (val.length < matrix.match(/([\_\d])/g).length) {
              e.target.value = '';
              return;
          }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
  }
  var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
          elem.addEventListener(ev, eventCalllback);
      }
  }
});

  