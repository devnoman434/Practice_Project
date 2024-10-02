new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

console.log("hi there");
let togglestatus = false;
let toggle = document.getElementById('hit');
let element =  document.querySelector('.nav-main ul')
toggle.addEventListener('click',()=>{

 if(togglestatus === false) { document.getElementById('change').setAttribute('transform','rotate(45),translate(0)')
   document.getElementById('change').setAttribute('y','0')
    document.getElementById('change1').setAttribute('transform','rotate(-45),translate(-45)')
   document.getElementById('change1').setAttribute('y','30')
     document.getElementById('change0').setAttribute('transform','rotate(-45),translate(-40)')
   document.getElementById('change0').setAttribute('y','30')
    }
    else if (togglestatus === true){
        document.getElementById('change').setAttribute('transform','rotate(0),translate(0)')
   document.getElementById('change').setAttribute('y','30')
    document.getElementById('change1').setAttribute('transform','rotate(0),translate(0)')
   document.getElementById('change1').setAttribute('y','60')
     document.getElementById('change0').setAttribute('transform','rotate(0),translate(0)')
   document.getElementById('change0').setAttribute('y','0')
    }
   if(togglestatus === false)
{ 
    element.style.visibility="visible";
    element.style.boxShadow= "0 10px 25px rgba(92, 99, 105, .2)";
    togglestatus = true;
    }
  else if(togglestatus === true){

    element.style.visibility="hidden";
    togglestatus = false;
  }
});