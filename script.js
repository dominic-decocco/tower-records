// JQUERY TO COLLAPSE NAVBAR

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);






// JQUERY FOR PAGE SCROLLING

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});










// SLIDER
console.clear();
const elements = document.querySelectorAll(".rotating-cards__el");
const inners = document.querySelectorAll(".rotating-cards__el div");
const total = elements.length - 1;
const innerOffset = 100;
const watchTime = 1000;
const duration = 6000;
const tilt = 0;
const gap = 60;
const depth = 60;
const factor = -1; // -1 to go from right to left
const ease = 'spring(1, 100, 15, 0)';
const tl = anime.timeline({
    easing: ease,
    loop: true
});
let firstHalf = [],
  secHalf = [],
  setObj = [],
  transforms = [],
  innerFH = [],
  innerSH = [],
  setInners = [],
  innerTransforms = [];

for (let i = 0; i <= total / 2; i++) {
  transforms.push({
    translateX: factor * gap * i,
    rotateY: -factor * tilt * i,
    translateZ: -depth * i
  });
  innerTransforms.push({
    translateX: Number(((factor * i * 2 * innerOffset) / total).toFixed(2))
  });
}

for (let i = total / 2; i < total; i++) {
  transforms.push({
    translateX: -factor * gap * (total - i),
    rotateY: factor * tilt * (total - i),
    translateZ: -depth * (total - i)
  });
  innerTransforms.push({
    translateX: Number(
      ((-factor * (total - i) * 2 * innerOffset) / total).toFixed(2)
    )
  });
}

elements.forEach((el, index) => {
  if (index === 0) {
    setObj = transforms[total];
    setInners = innerTransforms[total];
  } else {
    setObj = transforms[index - 1];
    setInners = innerTransforms[index - 1];
  }
  anime.set(el, setObj);
  anime.set(inners[index], setInners);
});

transforms.forEach((el, index) => {
  el.delay = watchTime;
  el.duration = duration;
  innerTransforms[index].delay = watchTime;
  innerTransforms[index].duration = duration;
});

transforms[total / 2 + 1].easing = 'spring(0, 100, 100, 0)';
innerTransforms[total / 2 + 1].easing = 'spring(0, 100, 100, 0)';

elements.forEach((el, index) => {
  firstHalf = transforms.slice(0, index);
  secHalf = transforms.slice(index, total + 1);
  firstHalf.forEach(el => secHalf.push(el));
  tl.add({
    targets: el,
    keyframes: secHalf
  }, 0);
  
  // ----------------------------
  
  innerFH = innerTransforms.slice(0, index);
  innerSH = innerTransforms.slice(index, total + 1);
  innerFH.forEach(el => innerSH.push(el));
  tl.add({
    targets: inners[index],
    keyframes: innerSH,
  }, 0);
});