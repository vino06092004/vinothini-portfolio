const roles = [
    "Data Science Enthusiast",
    "Data Analyst",
    "Machine Learning Enthusiast",
    "GenAI Learner"
];

let roleIndex = 0;
let characterIndex = 0;

function typeRole() {

    const typingText = document.getElementById("typing-text");

    if (characterIndex < roles[roleIndex].length) {

        typingText.textContent += roles[roleIndex][characterIndex];

        characterIndex++;

        setTimeout(typeRole, 100);

    } else {

        setTimeout(deleteRole, 1500);

    }
}


function deleteRole() {

    const typingText = document.getElementById("typing-text");

    if (characterIndex > 0) {

        typingText.textContent =
            roles[roleIndex].substring(0, characterIndex - 1);

        characterIndex--;

        setTimeout(deleteRole, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeRole, 300);

    }
}


typeRole();

const menuButton = document.getElementById("menu-btn");
const navMenu = document.querySelector("nav ul");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);

sections.forEach(function (section) {

    section.classList.add("hidden");

    observer.observe(section);

});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(function(section) {

    section.classList.add("hidden");

    observer.observe(section);

});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(function(section) {

    section.classList.add("hidden");

    observer.observe(section);

});