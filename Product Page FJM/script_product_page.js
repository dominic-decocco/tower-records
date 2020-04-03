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


//SHOW/HIDE FOOTER
var footerHandle = document.getElementById('footer_handle')
var footer = document.getElementById('fixed_footer')


footerHandle.addEventListener('click', function() {
    footer.classList.toggle('expand');
  });


















