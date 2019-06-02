// variables
const naviBar = document.querySelector('#navi');
const mobileIcon = document.querySelector('#navi-icon');
const links = document.querySelector('#links');
const projectsTarget = document.querySelector('#projects').offsetTop;
const skillsTarget = document.querySelector('#skills').offsetTop;
const aboutTarget = document.querySelector('#about').offsetTop;

// events
mobileIcon.addEventListener('click', toggleMobile);
links.addEventListener('click', closeMobile);
window.addEventListener('scroll', projectEvent);
window.addEventListener('scroll', skillsEvent);
window.addEventListener('scroll', aboutEvent);

// functions
// nav menu
function toggleMobile(){
    if(naviBar.style.height == '250px'){
        naviBar.style.height = '60px';
    } else {
        naviBar.style.height = '250px';
    }
};

function closeMobile(){
    naviBar.style.height = '60px';
}

// project event
 function projectEvent(){
    let siteArr = ["#site1", "#site2", "#site3", "#site4", "#site5", "#site6"];         
  
    if (window.pageYOffset > projectsTarget/1.25) {
      for (let i = 0; i < siteArr.length; i++) {
        let siteId = document.querySelector(''+siteArr[i]+'');
        (function(i){
          setTimeout(function(){
              siteId.style.opacity = 1;
              siteId.style.webkitTransform = 'translateY(0)';
          }, 500*i);
        })(i);   
      };
    };
 }

// skills event

function slide(element) {
    element.style.opacity = 1;
    element.style.webkitTransform = 'translateX(0)';
  }

function skillsEvent(){
    let skillsTitle = document.querySelector('#skills-title');
    let skillsContent = document.querySelector('#skills-icons');
    if (window.pageYOffset > skillsTarget/1.1) {
        slide(skillsTitle);
        slide(skillsContent);
    }
}

// about event

function aboutEvent(){
    if (window.pageYOffset > aboutTarget/1.1) { 
        document.querySelector('#about img').style.opacity = 1;
    }
}

// Jquery snippet 
$(document).ready(function(){
    $('a[href*="#"]').click(function(event) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              event.preventDefault();
              $('html, body').animate({scrollTop: target.offset().top}, 1000, function() {
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) {
                      return false;
                  } else {
                      $target.attr('tabindex','-1');
                      $target.focus();
                  };
              });
          }
        }
    });
  });