//Change the title and the header title
let title = document.querySelector("h1");
console.log(title.textContent);
title.textContent = "Fruits & Vegetables Corp";
let headerTitle = document.querySelector("title")
headerTitle.textContent = "Fruits & Vegetables Corp"

let allA = document.querySelectorAll("a");
console.log(allA);

// Make a loop so the code will work where ever Bananas is 
for (let i = 0; i < allA.length; i++) {
    let myLink = allA[i];
    console.log(myLink);
    if (myLink.getAttribute("href") === "#bananas") {
        myLink.setAttribute("href", "#Vegetables");
    }
    if (myLink.textContent === "Bananas") {
        myLink.textContent = "Vegetables";
    }
}
//changing place by remove and then add, htere must be a better way to do it 

let main = document.querySelector("#main")
let contact = document.querySelector("#contact");
let about = document.querySelector("#about")
contact.remove()
console.log(contact);
main.appendChild(contact)

//creat a p tag 
about.textContent = ""
let pTag = document.createElement("p");
let pTagText = document.createTextNode("We're the best in fruits & vegetables")
pTag.appendChild(pTagText);
about.appendChild(pTag);

//Creating the both h2

let abouth2 = document.createElement("h2");
abouth2.textContent = about.getAttribute("id");
about.insertBefore(abouth2, about.childNodes[0])

let contacth2 = document.createElement("h2");
contacth2.textContent = contact.getAttribute("id");
contact.insertBefore(contacth2, contact.childNodes[0])

//change td to th
let allTd = contact.querySelectorAll("thead td")
console.log(allTd);
for (let i = 0; i < allTd.length; i++) {
    allTd[i].outerHTML = allTd[i].outerHTML.replace(/td/g, "th")
}

// add main css
let head = document.querySelector("head");
let mainCss = document.createElement("link");
//I will make a funtion so i could set multi attr att once 
function setAttributes(el, attrs) {
    for(let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
setAttributes(mainCss, {"href": "main.css", "rel":"stylesheet", "type":"text/css"});
head.appendChild(mainCss);

//last change title
console.log("OBS i have already changed the title in the first step:) ");








