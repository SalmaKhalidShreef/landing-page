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
 * Define Global Variables
 *
*/
const sections= document.querySelectorAll('section'); // array holding all sections in the document
const ul = document.getElementById('navbar__list');   // holding unordered elements of class 'navbar__list'
let secIds = []

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//getting ids of sections 
function getSectionsId(item){
    secIds.push(item.id);
}
//distinguishing section in view 
function IsinView(element){
    const rect = element.getBoundingClientRect();//getting element boundaries
    if(rect.top >= 0 && top >0 && rect.top<rect.height){
        return true;
        window.alert('yarab');
    }
    else 
        return false;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav and scroll into section 
function buildNav(){
    var df = document.createDocumentFragment();
    var i =1;
    for (const section of sections){
        var a = document.createElement('a');
        var liName = section.getAttribute('data-nav');
        var text = document.createTextNode(liName);
        a.appendChild(text);
        a.id=i;
        i++;
        var li = document.createElement('li');
        a.classList.add('menu__link');
        a.addEventListener("click",(event)=>{section.scrollIntoView({behavior: 'smooth' })});
        //addActive();
        li.appendChild(a);
        df.appendChild(li);
    }
    ul.appendChild(df);
}

//
// Scroll to anchor ID
//active

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu &&  Scroll to section on link click
buildNav(); 
//distinguishing active sections and links
window.addEventListener('scroll',function (){
    for( section of sections){
        const rect =section.getBoundingClientRect(); 
        if(rect.top >=0 && rect.bottom <(window.innerHeight|| document.documentElement.clientHeight)){
            const current =section.getAttribute('data-nav');
            for(all of sections){
                if(all.classList.contains('your-active-class'))
                    all.classList.remove('your-active-class');}
                section.classList.add('your-active-class');
                const links = document.querySelectorAll('a');
                for(var j =0; j<links.length;j++){
                    if(links[j].text==section.getAttribute('data-nav')){
                        for(var x =0; x<links.length;x++)
                            links[x].classList.remove('your-active-class');
                    links[j].classList.add('your-active-class');} 
            }
        }
}});
// Set sections as active
