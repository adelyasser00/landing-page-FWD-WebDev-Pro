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
    //loop over every section dynamically
    for (let section of sections){
        let li = document.createElement("li");
        //add the HTML code from javascript according to format required.
        li.innerHTML = `<li><a class="menu__link"  href="#${section.id}">${section.dataset.nav}</a></li>` 
        //add the <li> elements to the navbar__list Id element
        navBarList.appendChild(li);
    }


}

//function to style active class
function viewportCheck(section){
    //check if section given in parameter is in viewport
    coordinate=section.getBoundingClientRect();
    if(coordinate.top >=0 ){
        return true;
    }
    else{
        return false;
    }
}

function activeSection(){
    //check every section to find the one in viewport
    for(let section of sections){
        if(viewportCheck(section)){
            //declare the section active
            if(!section.classList.contains("your-active-class")){
                section.classList.add("your-active-class");
            }
        }
        //remove active section class if left viewport
        else{
            section.classList.remove("your-active-class");
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
document.addEventListener("scroll",activeSection);
// Scroll to anchor ID using scrollTO event

/* already done */

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

