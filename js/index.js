const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navbar = document.querySelector("nav");
navbar.children[0].textContent = siteContent["nav"]["nav-item-1"];
navbar.children[1].textContent = siteContent["nav"]["nav-item-2"];
navbar.children[2].textContent = siteContent["nav"]["nav-item-3"];
navbar.children[3].textContent = siteContent["nav"]["nav-item-4"];
navbar.children[4].textContent = siteContent["nav"]["nav-item-5"];
navbar.children[5].textContent = siteContent["nav"]["nav-item-6"];


const bigWords = document.querySelector("h1");
bigWords.textContent = siteContent["cta"]["h1"];

const image = document.querySelector("#cta-img");
image.setAttribute("src", siteContent["cta"]["img-src"]);

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

const feature = document.querySelector(
  ".top-content .text-content:nth-of-type(1)"
);
featureP = feature.querySelector("p");
featureH4 = feature.querySelector("h4");
featureH4.textContent = siteContent["main-content"]["features-h4"];
featureP.textContent = siteContent["main-content"]["features-content"];

const about = document.querySelector(
  ".top-content .text-content:nth-of-type(2)"
);
aboutH4 = about.querySelector("h4");
aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutP = about.querySelector("p");
aboutP.textContent = siteContent["main-content"]["about-content"];

const bigpic = document.querySelector(".middle-img");
bigpic.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
const service = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1)"
);
serviceH4 = service.querySelector("h4");
serviceH4.textContent = siteContent["main-content"]["services-h4"];
serviceP = service.querySelector("p");
serviceP.textContent = siteContent["main-content"]["services-content"];

const product = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2)"
);
productH4 = product.querySelector("h4");
productH4.textContent = siteContent["main-content"]["product-h4"];
productP = product.querySelector("p");
productP.textContent = siteContent["main-content"]["product-content"];

const vision = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3)"
);
visionH4 = vision.querySelector("h4");
visionH4.textContent = siteContent["main-content"]["vision-h4"];
visionP = vision.querySelector("p");
visionP.textContent = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];
const contactAddress = document.querySelector(".contact p:nth-of-type(1)");
contactAddress.textContent = siteContent["contact"]["address"];
const contactPhone = document.querySelector(".contact p:nth-of-type(2)");
contactPhone.textContent = siteContent["contact"]["phone"];
const contactEmail = document.querySelector(".contact p:nth-of-type(3)");
contactEmail.textContent = siteContent["contact"]["email"];

const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

const link = document.createElement("a");
link.textContent = "map";
link.href = "#";

document.querySelector("nav").appendChild(link);

const boom = document.createElement("a");
boom.textContent = "boom";
boom.href = "#";

document.querySelector("nav").appendChild(boom);

navbar.children[0].style.color = "green";
navbar.children[1].style.color = "green";
navbar.children[2].style.color = "green";
navbar.children[3].style.color = "green";
navbar.children[4].style.color = "green";
navbar.children[5].style.color = "green";
navbar.children[6].style.color = "green";
navbar.children[7].style.color = "green";