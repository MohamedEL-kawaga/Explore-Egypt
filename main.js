const layOut = document.querySelector(".lay-out");
const xMark = document.querySelector(".fa-x");
const bars = document.querySelector(".nav-res");
const listLi = document.querySelector(".responsev-list");
const marquee = document.querySelector(".explore");
const contentBox = document.querySelector(".content-box");
const btnPackage = document.querySelectorAll(".btn-packge")

const backToTop = document.querySelector("#backToTop");
const hero = document.querySelector("#hero");

window.addEventListener("scroll", () => {

    if (window.scrollY > hero.offsetHeight) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


const locations = [
    {
        title: "The Pyramids of Giza",
        image: "./images/PopularDestinations/giza.jpg",
        alt: "The Pyramids of Giza",
        description: "Visit the Great Pyramid of Giza and discover one of the Seven Wonders of the Ancient World."
    },
    {
        title: "Cairo",
        image: "./images/PopularDestinations/cairo.jpg",
        alt: "Cairo",
        description: "Explore the heart of Egypt and discover Cairo's historic landmarks, vibrant streets, and rich cultural heritage."
    },
    {
        title: "Alexandria",
        image: "./images/PopularDestinations/alex.jpg",
        alt: "Alexandria",
        description: "Explore the Pearl of the Mediterranean and discover Alexandria's beautiful coastline, historic landmarks, and rich heritage."
    },
    {
        title: "Aswan",
        image: "./images/PopularDestinations/aswan.jpg",
        alt: "Aswan",
        description: "Discover the beauty of Aswan and explore its ancient temples, peaceful Nile views, and rich Nubian culture."
    },
    {
        title: "Luxor",
        image: "./images/PopularDestinations/Luxsur.jpg",
        alt: "Luxor",
        description: "Step into ancient history and explore Luxor's magnificent temples, tombs, and timeless treasures along the Nile."
    },
    {
        title: "Hurghada",
        image: "./images/PopularDestinations/red see.jpg",
        alt: "Hurghada",
        description: "Enjoy the beauty of the Red Sea and discover Hurghada's stunning beaches, crystal-clear waters, and vibrant marine life."
    }
];

function displayNavBar() {
    layOut.style.display = "block";
    listLi.style.transform = "translateX(0%)";
};
function removeNavBar() {
    listLi.style.transform = "translateX(-100%)";
    setTimeout(() => {
        layOut.style.display = "none";
    }, 350);
}
bars.addEventListener("click", () => {
    displayNavBar();
});
xMark.addEventListener("click", () => {
    removeNavBar();
});

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {
        layOut.style.display = "none";
        listLi.style.transform = "translateX(-100%)";
    }

});


marquee.innerHTML = `${Array(6).fill(`
        <span>EXPLORE EGYPT</span>`).join("")}
`;

function displayDestination() {
    contentBox.innerHTML = "";
    let destinationBox = "";
    locations.forEach((location) => {
        destinationBox += `
        <div class="destination">
                        <div class="inner">
                            <figure>
                                <div class="card-image">
                                    <img src="${location.image}" alt="${location.alt}">
                                </div>
                                <figcaption>
                                    <h4>${location.title}</h4>
                                    <p>
                                        ${location.description}
                                    </p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>`;
    });
    contentBox.innerHTML = destinationBox;
};
window.addEventListener("load", () => {
    displayDestination();
})

btnPackage.forEach((btn) => {
    btn.addEventListener("click", function () {
        btnPackage.forEach((button) => {
            button.classList.remove("active");
        });

        this.classList.add("active");
    });
});

