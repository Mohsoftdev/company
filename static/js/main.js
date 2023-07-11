let nav = document.querySelector("nav.navbar"),
    menu = document.querySelector("nav.navbar ul");

document.addEventListener("scroll", (e) => {
    let pageScroll = document.scrollingElement.scrollTop,
        navScroll = nav.offsetTop;

    if (pageScroll > navScroll + 0.5) {
        nav.classList.add("nav-show");
    } else {
        nav.classList.remove("nav-show");
    }
});

if (document.body.classList.contains("landing-page")) {
    let navLink = document.querySelectorAll(".navbar .navbar-container>ul>li>a");

    for (let n = 0; n < navLink.length; n++) {
        navLink[n].addEventListener("click",  (event) => {
            let target = "#" + navLink[n].getAttribute("href");
            event.preventDefault();
            event.stopPropagation();
            return false,
            window.scrollTo({
                top: document.querySelector(target).offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }

    if (document.body.classList.contains("landing-page")) {

        let menuButton = document.querySelector(".phone-menu");
    
        menuButton.addEventListener("click",  () => { //on click on menu in phone size ==>
            nav.classList.toggle("navbar-show-phone"); //add style to nav to change background and color if no scroll in action
            menu.classList.toggle("show-list"); //show menu list with this class
        })
    
    }

    let sections = document.querySelectorAll('.section-container');

    window.onscroll = () => {
        let scrollPosition = document.documentElement.scrollTop + 75 || document.body.scrollTop + 75;

        for (let s = 0; s < sections.length; s++) {
            if (sections[s] && sections[s].offsetTop <= scrollPosition) {
                let id = sections[s].getAttribute("id");
                document.querySelector('.active').classList.remove('active');
                document.querySelector("a[href*=" + id + "]").classList.add('active');
            }
        }
    }
}



let projectImage = document.querySelectorAll(".project-image"),
    projectImageLength = projectImage.length,
    layer = document.querySelector(".layer"),
    layerClose = document.querySelector(".far")
    layerImage = document.querySelector(".layer .layer-container img");

if (document.body.classList.contains("project")){    
    for(let i=0; i<projectImageLength; i++){
        projectImage[i].addEventListener("click", function() {
            let imageSrc = projectImage[i].getAttribute("src")
            layerImage.setAttribute("src", imageSrc)
            layer.classList.add("layer-show")
        })
        layerClose.addEventListener("click", (n) => {
            layer.classList.remove("layer-show")
        })

        layer.addEventListener("click", (n) => {
            layer.classList.remove("layer-show")
        })
    }    
}


