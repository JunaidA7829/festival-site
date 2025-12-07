// this section allows days to show different content by chanching which day is active based on what the user has clicked
function filterByDay(dayId, button) {
    const daySections = document.querySelectorAll('.day-section');
    daySections.forEach(section => section.classList.remove('active')); //will remove active which will hide the section , only active is shown

    document.getElementById(dayId).classList.add('active'); //active is added which will show the day

    const buttons = document.querySelectorAll('.day-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active'); //active is added to the button which was cliked
}




// form validation 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("bookingform");

    if (!form) return; 

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        // will get all the form fields
        const name = document.getElementById("fullname");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const tickets = document.getElementById("ticketCount");
        const type = document.getElementById("ticketType");
        const payment = document.getElementById("paymentMethod");
        const terms = document.getElementById("terms");

        clearErrors(); // removes any error messeges

        
        if (name.value.trim() === "") {
            showError("nameError", "Please enter your full name.");
            isValid = false;
        }

    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //ensures email is valid
        if (!emailPattern.test(email.value)) {
            showError("emailError", "Please enter a valid email address.");
            isValid = false;
        }

        
        const phonePattern = /^[0-9]{10,15}$/; // ensures phone is valid
        if (!phonePattern.test(phone.value)) {
            showError("phoneError", "Enter a valid phone number (numbers only).");
            isValid = false;
        }

        
        if (tickets.value < 1 || tickets.value > 5) { // sets min and max values for ticket number
            showError("ticketError", "Select ticket amount.");
            isValid = false;
        }

        
        if (type.value === "") {
            showError("typeError", "Select a ticket type.");
            isValid = false;
        }

        
        if (payment.value === "") {
            showError("paymentError", "Select a payment method.");
            isValid = false;
        }

        
        if (!terms.checked) { //checkbox must be ticked
            alert("You must agree to the Terms and Conditions.");
            isValid = false;
        }

        if (isValid) {
            alert("Booking Successful!");
            form.reset();
        }
    });
});


function showError(id, message) {
    const errorElement = document.getElementById(id); //error messege
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add("show");
    }
}

function clearErrors() { // removes evrything before new form
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(err => {
        err.textContent = "";
        err.classList.remove("show");
    });
}


