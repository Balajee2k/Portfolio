// ---------Script for button in about me--------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Add event listeners to tab links
for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function () {
        for (let j = 0; j < tablinks.length; j++) {
            tablinks[j].classList.remove("active-link");
            tabcontents[j].classList.remove("active-tab");
        }
        tablinks[i].classList.add("active-link");
        tabcontents[i].classList.add("active-tab");
    });
}

// -----------------Script for sidemenu for small screen ------------
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// ------------------Script for contact form accepting response-----
const scriptURL = 'https://script.google.com/macros/s/AKfycbxMkL5klvBQZVaTEYyWtgWfV_Ei6QEfvIPwR4XEIL8YdtiSVV0WOV1zP5_U4tc9t3Fs/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            if (data.result === "success") {
                msg.innerHTML = "Message sent successfully";
                setTimeout(function () {
                    msg.innerHTML = "";
                }, 1000);
                form.reset();
            } else {
                msg.innerHTML = "Error sending message. Please try again later.";
            }
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "Error sending message. Please try again later.";
        });
});
