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

const navBarList = document.getElementById('navbar__list');
const numberOfSections = document.getElementsByTagName('section');


// build the nav
for(const section of numberOfSections){
    window.addEventListener('scroll', function(){
        if(Math.floor(section.getBoundingClientRect().bottom) <= window.innerHeight + 100){
            removeActive(numberOfSections);
            addActive(section);
        }
    })
    // Create list elements for the navbar depending on how many sections exist
    newListItem = document.createElement('li');

    // Create a listener for each list item to scroll the section of the list item into view
    newListItem.addEventListener('click', function(){
        section.scrollIntoView({behavior: 'smooth', block:'start'});
        section.classList.toggle('your-active-class');
    })
    // Capture names of list elements for navbar and apply 
    newListItem.textContent = section.dataset.nav;

    // Append the new list item into the navigation bar
    navBarList.appendChild(newListItem);
}


// Applies active class to a given section
function addActive(section){
    section.classList.add('your-active-class');
    
}

// Loops over all sections to remove the active class
function removeActive(numberOfSections){
    for(section of numberOfSections){
        section.classList.remove('your-active-class');
    }
}