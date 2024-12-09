/*
    JS Script
    -Rodrigo Moreno Bielsa

*/

// Movile Menu:

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Form Validation: 

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email");
    const dni = document.getElementById("dni");
    const age = document.getElementById("age");
    const agree = document.getElementById("agree");
    const errorMessage = document.getElementById("error-message");

    // Clean error msg
    errorMessage.textContent = '';

    let isValid = true;

    // Email validation
    if (!validateEmail(email.value)) {
        isValid = false;
        errorMessage.textContent = "Please enter a valid email.";
    }

    // DNI validation
    if (!validateDni(dni.value)) {
        isValid = false;
        errorMessage.textContent = "Please enter a valid DNI.";
    }

    // Cookies validation
    if (!agree.checked) {
        isValid = false;
        errorMessage.textContent = "You must agree to the Cookies & Privacy Policy.";
    }

    if (isValid) {
        alert("Form submitted successfully!");
    } else {
        errorMessage.style.display = "block";
    }
});

// VALIDATION FUNTIONS

// Funtion Email Validation
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Funtion DNI Validation
const validateDni = (dni) => {
    const dniRegex = /^[0-9]{8}[A-Za-z]{1}$/;
    return dniRegex.test(dni);
}
