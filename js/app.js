/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//Dynamic Navigation Menu
function generateNav(){
    //li = document.createElement("li");
    for (let section of sections){
        let li = document.createElement("li");
        li.innerHTML = `<li><a class="menu__link"  href="#${section.id}">${section.dataset.nav}</a></li>` 
        navBarList.appendChild(li);
    }
    //navBarList.appendChild(li);

}
generateNav();
//function to style active class


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
generateNav;
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


