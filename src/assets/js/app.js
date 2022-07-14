// carrousel
let swapToRight = document.querySelectorAll('.portrait svg')[1];
let swapToLeft = document.querySelectorAll('.portrait svg')[0];
let image0 = document.querySelectorAll('.portrait img')[0];
let image1 = document.querySelectorAll('.portrait img')[1];
let image2 = document.querySelectorAll('.portrait img')[2];
console.log(swapToRight,swapToLeft);
console.log(image0,image1,image2);

swapToRight.addEventListener('click', function () {

    if (image2.classList == "active") {
        image2.classList.remove('active');
        image0.classList.add('active');

        image0.style.transform = "translateX(0px)";
        image1.style.transform = "translateX(0px)";
        image2.style.transform = "translateX(0px)";

    } else if (image1.classList == "active") {
        image1.classList.remove('active');
        image2.classList.add('active');

        image0.style.transform = "translateX(-137%)";
        image1.style.transform = "translateX(-137%)";
        image2.style.transform = "translateX(161%)";

    } else if (image0.classList == "active") {
        image0.classList.remove('active');
        image1.classList.add('active');

        image0.style.transform = "translateX(-245%)";
        image1.style.transform = "translateX(80%)";
        image2.style.transform = "translateX(100%)";
    }

})

swapToLeft.addEventListener('click', function () {

    if (image1.classList == "active") {
        image1.classList.remove('active');
        image0.classList.add('active');

        image0.style.transform = "translateX(0px)";
        image1.style.transform = "translateX(0px)";
        image2.style.transform = "translateX(0px)";

    } else if (image0.classList == "active") {
        image0.classList.remove('active');
        image2.classList.add('active');

        image0.style.transform = "translateX(-137%)";
        image1.style.transform = "translateX(-137%)";
        image2.style.transform = "translateX(161%)";

    } else if (image2.classList == "active") {
        image2.classList.remove('active');
        image1.classList.add('active');

        image0.style.transform = "translateX(-245%)";
        image1.style.transform = "translateX(300px)";
        image2.style.transform = "translateX(300px)";
    }

})