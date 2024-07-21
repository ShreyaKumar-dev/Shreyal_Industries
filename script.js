var navBar = document.getElementById('navBar');
        window.onscroll = function() {
            if (window.pageYOffset > 22) {
                navBar.classList.add('scrolled');
                // navBar.classList.add('shadow');
            } else {
                navBar.classList.remove('scrolled');
                // navBar.classList.remove('shadow');
            }
        }

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}