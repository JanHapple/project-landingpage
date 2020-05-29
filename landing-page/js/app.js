// copy section 2 and place it at the end of <main>
const sec = document.getElementById('section2');
const mySection = sec.cloneNode(true);
document.querySelector('main').appendChild(mySection);

//change id, data and h2 of copy to section4/Section 4
const secList = document.getElementsByTagName('section');
const newSec = secList[3];
newSec.id = 'section4';

const newData = document.querySelector('#section4');
newData.dataset.nav = 'Section 4';

const head = document.getElementsByTagName('h2');
const newHead = head[3];
newHead.textContent = 'Section 4';

//Building the Navigation and scrolling
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

const navBuilder = () => {
    let navUI = '';
     sections.forEach(section => {
        const navId = section.id;
        const sectionNav = section.dataset.nav;
     navUI += `<li><a class="menu__link" href="#${navId}">${sectionNav}</a></li>`;
    });
    navList.innerHTML = navUI;
};
navBuilder();

// building active sections by scrolling
const activeSection = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
    };

const addActiveClass = (condition,section) => {
    if(condition) {
        section.classList.add('your-active-class');
        section.style.cssText = 'background-color: black; opacity: 0.8;';
    };
};

const removeActiveClass =(section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = 'background-color: none;';
 };

const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = activeSection(section);

        viewPort = () => elementOffset < 300 && elementOffset >= -300;
        removeActiveClass(section);
        addActiveClass(viewPort(),section);
    });
};

window.addEventListener('scroll',sectionActivation);

//building back to top button
const newBtn = document.getElementById('btn');

window.onscroll = function() {scrollFunction()};

function scrollFunction () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    newBtn.style.display = 'block';
  } else {
    newBtn.style.display = 'none';
  }
};

// scroll to the top
function goToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};