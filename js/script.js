```javascript
// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.getElementById("mainNav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.padding = "10px 0";

    } else {

        navbar.style.padding = "18px 0";

    }

});


// =========================
// CLOSE MOBILE NAVBAR
// =========================

const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});
```
