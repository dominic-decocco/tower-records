// JQUERY TO COLLAPSE NAVBAR

function collapseNavbar() {
    if ($(".top_navbar").offset().top > 200) {
        $(".top_navbar").addClass("white");
        $(".logo").addClass("invert");
        $("#burger_menu").addClass('invert');
        $(".search").addClass('invert');
        $("#hidden_navbar").addClass('white')
        $ (".list li a").addClass('white')
        $ (".list li a").removeClass('white_text')

    } else {
        $(".top_navbar").removeClass("white");
        $(".logo").removeClass("invert");
        $("#burger_menu").removeClass('invert');
        $(".search").removeClass('invert');
        $("#hidden_navbar").removeClass('white')
        $ (".list li a").removeClass('white')
        $ (".list li a").addClass('white_text')



    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);








// IMAGE SLIDER
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




// SHOW/HIDE NAVBAR
var burger = document.getElementById('burger_menu')
var hiddenNavbar = document.getElementById('hidden_navbar')
var navbar = document.getElementById('navbar')

burger.addEventListener('click', function() {
    hiddenNavbar.classList.toggle('expand');
    navbar.classList.toggle('down')
  });



//MAKE MENU ITEMS CLOSE NAVBAR
const breakdownButton = document.querySelectorAll('.breakdown_button');
breakdownButton.forEach(function(btn) {
  btn.addEventListener('click', function() {
    hiddenNavbar.classList.toggle('expand');
  });
});





