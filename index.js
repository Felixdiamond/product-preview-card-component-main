const mqm = window.matchMedia('(max-width: 600px)')
if (mqm.matches) {
    var pic = document.getElementById("hero-pic");
    pic.classList.add("card-img-top");
    actualPic = document.getElementById("imagee");
    actualPic.setAttribute("src", "./images/image-product-mobile.jpg");
}