// =====================================================
// SCROLL REVEAL ANIMATIONS
// =====================================================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =====================================================
// ACTIVE NAVIGATION HIGHLIGHT
// =====================================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function highlightNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", highlightNavigation);
window.addEventListener("load", highlightNavigation);

// =====================================================
// BACK TO TOP BUTTON
// =====================================================

const backToTopButton =
    document.getElementById("backToTop");

function toggleBackToTopButton() {

    if (window.scrollY > 500) {
        backToTopButton.style.display = "flex";
        backToTopButton.style.alignItems = "center";
        backToTopButton.style.justifyContent = "center";
    } else {
        backToTopButton.style.display = "none";
    }
}

window.addEventListener(
    "scroll",
    toggleBackToTopButton
);

backToTopButton.addEventListener(
    "click",
    () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);

// =====================================================
// IMAGE LIGHTBOX
// =====================================================

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.querySelector(".lightbox-image");

const closeButton =
    document.querySelector(".lightbox-close");

const projectImages =
    document.querySelectorAll(".project-image img");

projectImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        document.body.style.overflow = "hidden";
    });
});

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}

closeButton.addEventListener(
    "click",
    closeLightbox
);

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        lightbox.classList.contains("active")
    ) {
        closeLightbox();
    }
});

// =====================================================
// HEADER SHADOW ON SCROLL
// =====================================================

const header = document.querySelector("header");

function updateHeaderShadow() {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 6px 20px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";
    }
}

window.addEventListener(
    "scroll",
    updateHeaderShadow
);

// =====================================================
// SMOOTH SCROLL FOR INTERNAL LINKS
// =====================================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach((anchor) => {

        anchor.addEventListener("click", function (e) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

// =====================================================
// SIMPLE IMAGE HOVER PRELOAD
// =====================================================

window.addEventListener("load", () => {

    const images =
        document.querySelectorAll(
            ".project-image img"
        );

    images.forEach((img) => {

        const preload = new Image();
        preload.src = img.src;
    });
});

// =====================================================
// CONSOLE SIGNATURE
// =====================================================

console.log(
    "%cJoseph Amara Portfolio",
    "color:#1B8F4D;font-size:18px;font-weight:bold;"
);

console.log(
    "Built with HTML, CSS, JavaScript and GitHub Pages."
);