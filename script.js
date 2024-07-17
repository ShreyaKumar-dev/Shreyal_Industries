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