// ==============TABS=============

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)  
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active');
    })
})


// ============ DROPDOWN LIST FOR MOBILE =========

function display() {
  var dropList = document.getElementById('dropdown-list');

  dropList.classList.toggle('hide-dropdown');

}

function changeName(anything) {
  document.querySelector('.drop-btn-text').innerHTML = 
  anything;
  
  var dropList = document.getElementById('dropdown-list');
  dropList.classList.add('hide-dropdown');

}


// +========Sticky SCROLLBAR===========

var prevScrollpos = window.pageYOffset;
var sticky = navlist.offsetTop+100;
var sticky2 = navlist.offsetTop+200;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos && window.scrollY >= sticky) {
    document.getElementById("navlist").style.top = "0";
    navlist.classList.add("sticky");
  } 
  
  else {
    document.getElementById("navlist").style.top = "-100px";
  }

  if (window.scrollY <= sticky2) {

  document.getElementById('navlist').style.top = "-100px"
  }

  if (window.scrollY <= sticky) {
    navlist.classList.remove('sticky')
  }
  prevScrollpos = currentScrollPos;
}

// =================== SLIDER TEXTS =============

const sliderText = document.querySelector(".hero-right").children;
      textLen = sliderText.length;
let index = 0;

const inTimer = 3000;
const outTimer = 2800;

function textSlider () {

  for(let i = 0; i<textLen; i++){
    sliderText[i].classList.remove('show',)
  };

  sliderText[index].classList.add('show');
  if (index == textLen-1) {
    index = 0
  }
  else {
    index++
  }
  setTimeout(textSlider, 3000);
}
window.onload = textSlider;



// ========== SIDEBAR ===============

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// =========== FOOTER COMPONENT 

function repeat() {
  console.log('hi');
 }
 