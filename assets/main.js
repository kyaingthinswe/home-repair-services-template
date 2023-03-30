
let menuBar = document.querySelector('.menu-bar');
let bars = document.querySelector('.fa-bars');
let navItems = document.querySelector('.nav-items');
let navLink = document.querySelector('.nav-items').querySelectorAll("a");

// console.log(navLink);
menuBar.addEventListener('click',function(){
    bars.classList.toggle("fa-xmark");
    navItems.classList.toggle("navItems");
});
navLink.forEach(function(link){
    // console.log(index+"__"+link);
    link.addEventListener('click',function(){
        navLink.forEach(nav=>nav.classList.remove('active'));
        this.classList.add('active');
    })
})
