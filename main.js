let icons = document.querySelectorAll(".icon");
let mainSection = document.querySelector("div.mainSection");
let logo = document.querySelector(".logo");
let date = new Date();
let currentYear = document.querySelector("span.currentYear");
currentYear.innerHTML = date.getFullYear();
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let msgInput = document.getElementById("msg");
let contactForm = document.getElementById("contact-form");
let invalidErrorP = document.getElementById("invalid-email");
let okBtn = document.getElementById("ok-btn");
let emailRegeX = /[^\s@]+@[^\s@]+\.[^\s@]+/;




// Main Section
logo.addEventListener('click', () => {
    window.location.reload();
})
icons.forEach((e) => {
    let randomNum = Math.floor(Math.random() * 95) + 1;
    let randomNum2 = Math.floor(Math.random() * 95) + 1;
    e.style.top = `${randomNum}%`;
    e.style.left = `${randomNum2}%`;
})

mainSection.addEventListener("mousemove", moveIcons);

function moveIcons(e) {
    icons.forEach((icon) => {
        let x = e.clientX / 5;
        let y = e.clientY / 5;
        icon.style.transform = `translate(${x}%, ${y}%)`;
    })
}

// Burger list 
let burger = document.getElementById("burger");
let burgerList = document.getElementById("burger-list");
let burgerLinks = document.querySelectorAll("ul#burger-list li");
let burgerListOpen = false;

burger.addEventListener('click', () => {
    if (burgerListOpen == false) {
        burgerList.style.display = "flex";
        burgerListOpen = true;
    } else {
        burgerList.style.display = "none";
        burgerListOpen = false;
    }
});

burgerLinks.forEach(e => {
    e.addEventListener('click', () => {
        burgerList.style.display = "none";
        burgerListOpen = false;
    })

});

// Theme changer 
let themeToggler = document.querySelector("nav div.theme-changer");
let theme1 = document.querySelector("nav div.theme-changer div.theme1");
let theme2 = document.querySelector("nav div.theme-changer div.theme2");

if (localStorage.length > 0) {
    if (localStorage.theme == 1) {
        document.body.classList.remove("theme-2");
        theme1.style.visibility = "visible";
        theme2.style.visibility = "hidden";
        theme1.classList.remove("invisible");
        theme1.classList.add("visible");
        theme2.classList.remove("visible");
        theme2.classList.add("invisible");
    } else if (localStorage.theme == 2) {
        document.body.classList.add("theme-2");
        theme1.style.visibility = "hidden";
        theme2.style.visibility = "visible";
        theme1.classList.remove("visible");
        theme1.classList.add("invisible");
        theme2.classList.remove("invisible");
        theme2.classList.add("visible");
    }
}
themeToggler.addEventListener('click', () => {
    if (theme1.classList.contains('invisible') === true) {  // theme-2
        document.body.classList.remove("theme-2");
        theme1.style.visibility = "visible";
        theme2.style.visibility = "hidden";
        theme1.classList.remove("invisible");
        theme1.classList.add("visible");
        theme2.classList.remove("visible");
        theme2.classList.add("invisible");
        localStorage.setItem("theme", 1);
    } else {
        document.body.classList.add("theme-2");
        theme1.style.visibility = "hidden";
        theme2.style.visibility = "visible";
        theme1.classList.remove("visible");
        theme1.classList.add("invisible");
        theme2.classList.remove("invisible");
        theme2.classList.add("visible");
        localStorage.setItem("theme", 2);
    }
})


// Categories section 
let list = document.querySelectorAll("ul.list li");
let categories = document.querySelectorAll("section>div");

let toRight = document.getElementById("right");
let toLeft = document.getElementById("left");

let cRight = document.querySelector("span span.c-right");
let cLeft = document.querySelector("span span.c-left");

list.forEach((e) => {
    e.addEventListener('click', (ele) => {
        let id = ele.target.id;

        list.forEach((currentElement) => {
            currentElement.style.color = "var(--acc1)";
            currentElement.classList.remove("active");
        });
        e.classList.add("active");
        e.style.color = "var(--main)";
        categories.forEach((cat) => {
            cat.style.display = "none";
        })
        document.querySelector(`section div.${id}`).style.display = "block";
        if (document.querySelector(`section div.${id} div.container2`).style.display == "grid") {
            toLeft.style.visibility = "visible";
            toRight.style.visibility = "hidden";
            cRight.style.backgroundColor = "var(--main)";
            cLeft.style.backgroundColor = "var(--acc1)";
        } else {
            toLeft.style.visibility = "hidden";
            toRight.style.visibility = "visible";
            cRight.style.backgroundColor = "var(--acc1)";
            cLeft.style.backgroundColor = "var(--main)";
        }
    })
})

toRight.addEventListener('click', () => {
    let id = document.querySelector("ul.list li.active").id;
    moveToRight(id);
})

cRight.addEventListener('click', () => {
    let id = document.querySelector("ul.list li.active").id;
    moveToRight(id);

})

toLeft.addEventListener('click', () => {
    let id = document.querySelector("ul.list li.active").id;
    moveToLeft(id);

})
cLeft.addEventListener('click', () => {
    let id = document.querySelector("ul.list li.active").id;
    moveToLeft(id);

})

function moveToRight(id) {
    document.querySelector(`section div.${id} div.container1`).style.display = "none";
    document.querySelector(`section div.${id} div.container2`).style.display = "grid";
    toRight.style.visibility = "hidden";
    toLeft.style.visibility = "visible";
    cRight.style.backgroundColor = "var(--main)";
    cLeft.style.backgroundColor = "var(--acc1)";
}

function moveToLeft(id) {
    document.querySelector(`section div.${id} div.container1`).style.display = "grid";
    document.querySelector(`section div.${id} div.container2`).style.display = "none";
    toLeft.style.visibility = "hidden";
    toRight.style.visibility = "visible";
    cRight.style.backgroundColor = "var(--acc1)";
    cLeft.style.backgroundColor = "var(--main)";
}


// Contact Section 
let nameError = false, emailError = false, msgError = false;
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (nameInput.value == "") {
        nameInput.style.border = '1px solid var(--error)';
        nameError = true;
    } else {
        nameInput.style.border = 'none';
        nameError = false;
    }
    if (emailInput.value == "" || emailRegeX.test(emailInput.value) == false) {
        emailInput.style.border = '1px solid var(--error)';
        invalidErrorP.style.cssText = "visibility: visible";
        emailError = true;
    } else {
        emailInput.style.border = 'none';
        invalidErrorP.style.visibility = "hidden";
        emailError = false;
    }
    if (msgInput.value == "") {
        msgInput.style.border = '1px solid var(--error)';
        msgError = true;
    } else {
        msgInput.style.border = 'none';
        msgError = false;
    }
    if (nameError === false && emailError === false && msgError === false) {
        Email.send({
            SecureToken: "d790028c-1971-4677-9065-138a8bb0982a",
            To: 'mahmoudamin123321@gmail.com',
            From: 'mahmoudamin123321@gmail.com',
            Subject: "The message is : ",
            Body: `From : ${nameInput.value} => ${msgInput.value} from email => ${emailInput.value}`
        })
        document.getElementById("confirm-sending").style.visibility = "visible";
        document.getElementById("confirm-sending").classList.remove("invisible");
    }
});
okBtn.addEventListener('click', () => {
    document.getElementById("confirm-sending").style.cssText = "display: none";
});



let rocketSvg = document.getElementById("rocket");
let rocketSvg2 = document.getElementById("rocket-2");
// 3562
window.addEventListener('scroll', () => {
    if (screen.width <= 400) {
        if (scrollY >= 3400) {
            if (document.body.classList.contains("theme-2") == true) {
                rocketSvg2.style.left = "66.6667%";
            } else {
                rocketSvg.style.left = "66.6667%";
            }
        } else {
            if (document.body.classList.contains("theme-2") == true) {
                rocketSvg2.style.left = "1000%";
            } else {
                rocketSvg.style.left = "1000%";
            }
        }

    } else {
        if (scrollY >= 2650) {
            if (document.body.classList.contains("theme-2") == true) {
                rocketSvg2.style.left = "66.6667%";
            } else {
                rocketSvg.style.left = "66.6667%";
            }
        } else {
            if (document.body.classList.contains("theme-2") == true) {
                rocketSvg2.style.left = "1000%";
            } else {
                rocketSvg.style.left = "1000%";
            }
        }
    }

})




// footer Section 
let whatsAppIcon = document.getElementById("whatsapp");

whatsAppIcon.addEventListener('click', copyPhoneNumber);

function copyPhoneNumber() {
    let phoneNumber = "+20 1228050484";
    let inputPhone = document.createElement("input");
    inputPhone.setAttribute("value", phoneNumber);
    document.body.appendChild(inputPhone);
    inputPhone.select();
    document.execCommand("copy");
    inputPhone.remove();
    document.getElementById("copied").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("copied").style.visibility = "hidden";
    }, 2000)
}

// Scroll to top button
let scrollTop = document.getElementById("scroll-to-top");

window.onscroll = function () {
    if (this.scrollY >= 558) {
        scrollTop.style.right = "20px";
    } else {
        scrollTop.style.right = "-50px";
    }
}

scrollTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}




