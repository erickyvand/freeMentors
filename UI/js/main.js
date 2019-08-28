//add sticky navbar
window.onscroll = () => {createFixed()};
const navbar = document.querySelector('nav');
const sticky = navbar.offsetTop;

function createFixed(){
  if(window.pageYOffset >= sticky){
    navbar.classList.add('sticky');
  }else{
    navbar.classList.remove('sticky');
  }
}

// images sliding
let i = 0;
let images = [];
const time = 3000;

images[0] = 'img/image1.jpeg';
images[1] = 'img/image2.jpg';
images[2] = 'img/image3.jpg';
images[3] = 'img/image4.jpg';
images[4] = 'img/image5.jpg';
images[5] = 'img/image6.jpg';

function changeImages(){
  document.slide.src = images[i];
  if(i < images.length - 1){
    i++;
  }else{
    i = 0;
  }

  setTimeout("changeImages()", time);
}
window.onload = changeImages;
