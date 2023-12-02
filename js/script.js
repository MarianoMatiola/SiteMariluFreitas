class MobileNavbar {
    constructor(t, o, n) {
      this.mobileMenu = document.querySelector(t);
      this.navList = document.querySelector(o);
      this.navLinks = document.querySelectorAll(n);
      this.activeClass = "active";
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach(((t, o) => {
        t.style.animation ? t.style.animation = "" : t.style.animation = `navLinkFade 0.3s ease forwards ${o / 7 + 0.3}s`;
      }));
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      return this.mobileMenu && this.addClickEvent(), this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(".mobile-menu", ".menu", ".menu li");
  mobileNavbar.init();
  
  function createButton(t, o) {
    const n = document.querySelector("body");
    backToTopButton = document.createElement("span");
    backToTopButton.classList.add("softr-back-to-top-button");
    backToTopButton.id = "softr-back-to-top-button";
    o ? o.appendChild(backToTopButton) : n.appendChild(backToTopButton);
  
    // Styling for the back-to-top button
    backToTopButton.style.width = t.buttonWidth;
    backToTopButton.style.height = t.buttonHeight;
    // ... (other style properties)
  
    // Setting up the SVG for the button
    backToTopButton.innerHTML = '<svg class="back-to-top-button-svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> <g fill="none" fill-rule="evenodd"> <path d="M0 0H32V32H0z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> <path class="back-to-top-button-img" fill-rule="nonzero" d="M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z" transform="translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)" /> </g> </svg>';
  
    // Adding the button to the DOM
    // ... (other code for appending the button)
  
    // Handling the scroll behavior
    // ... (scroll event and click event handling)
  }
  
  // Configuration object for the button
  const configObj = {
    buttonD: "M11.384 13.333h9.232c.638 0 .958.68.505 1.079l-4.613 4.07c-.28.246-.736.246-1.016 0l-4.613-4.07c-.453-.399-.133-1.079.505-1.079z",
    buttonT: "translate(-1028 -172) translate(832 140) translate(32 32) translate(164) matrix(1 0 0 -1 0 32)",
    // ... (other configuration properties)
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    createButton(configObj, null);
  });
  
  // Obfuscated code (optional)
  (function (o, d, l) {
    try {
      // ... (obfuscated code)
    } catch (e) {}
  }({}, document, location));
  