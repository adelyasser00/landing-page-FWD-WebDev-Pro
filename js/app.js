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
// store pointers to all sections in the html file in an array
const sections = Array.from(document.querySelectorAll("section"));
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
//Dynamic Navigation Menu
function generateNav() {
    const navBarList = document.getElementById("navbar__list");
    //loop over every section dynamically
    for (let section of sections) {
        // for every section in the html file, insert the html code in the format:
        //<li><a class="menu__link"  href="#sectionNum">Section Num</a></li>
        navBarList.insertAdjacentHTML("beforeend", `<li><a class="menu__link" id = Link${section.id}  href="#${section.id}">${section.dataset.nav}</a></li>`);
    }


}

function activeSection() {
    //check every section to find the one in viewport with every scroll event
    for (let section of sections) {
        //get coordinate and check it
        boundCheck = section.getBoundingClientRect()
        //check the top and bottom of viewport with additional margins for smooth transition between sections
        if (boundCheck.top <= 160 && boundCheck.top >= -430) {
            //declare the section active
            section.classList.add("your-active-class");
            //change the section link's colors in dynamic navigation bar aswell
            let activeLink = document.getElementById(`Link${section.id}`);
            activeLink.classList.replace("menu__link", "active__link");
        }
        //remove active section class if left viewport
        else if (section.classList.contains("your-active-class")) {
            section.classList.remove("your-active-class");
            //remove the section link's colors in dynamic navigation bar aswell
            let activeLink = document.getElementById(`Link${section.id}`);
            activeLink.classList.replace("active__link", "menu__link");
        }
    }
}




/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
generateNav();
// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", activeSection);
// Scroll to anchor ID using scrollTO event
//add all anchor objects in an array and then add a listener for each array element.
document.querySelectorAll('a[href^="#"]').forEach(link => {
    //add listener to each element
    link.addEventListener('click', function(event) {
        event.preventDefault();
        //make every scroll smooth
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
    });
});
/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

/* already done */

// Scroll to section on link click

/* to scroll instead of jump. in styles.css file we add scroll-behavior: smooth; */

// Set sections as active
/* already done */