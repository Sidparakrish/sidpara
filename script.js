
/*======== swiper wrapper =========*/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*======== navbar toggle =========*/
let navBar = document.querySelector('.navBar');

document.querySelector('#menuBar').onclick = () => {
  navBar.classList.add('active');
}

document.querySelector('#close').onclick = () => {
  navBar.classList.remove('active');
}

/*====== popular selection ==========*/
const buttonElement = document.querySelectorAll('.tablinks');
const tabContent = document.querySelectorAll('.tabContent');

tabContent[0].style.display = "block";

buttonElement.forEach(function (i) {
    i.addEventListener('click', function (event) {

        for (let x = 0; x < buttonElement.length; x++){
            if (event.target.id == buttonElement[x].id){
                buttonElement[x].className = buttonElement[x].className.replace(" active", "");
                tabContent[x].style.display = "block";
                event.currentTarget.className += " active";
            }
            else{
                tabContent[x].style.display = "none";
                buttonElement[x].className = buttonElement[x].className.replace(" active", "");
            }
        }
    });
});
