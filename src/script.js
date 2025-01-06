/*==================== SHOW MENU ====================*/
function showMenu(toggleId,menuId) {
    const toggle = document.getElementById(toggleId);
    const navMenu = document.getElementById(menuId);

    if (toggle && navMenu) {
        toggle.addEventListener('click', ()=> {
            navMenu.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const menuLink = document.querySelectorAll('.nav-link');

function actionLink() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}

menuLink.forEach(link => link.addEventListener('click', actionLink))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop() {
    const scroll = document.getElementById('scroll-top')
    // ketika scroll lebih tinggi dari viewport 560, tambahkan kelas show-scroll
    if (scrollY >= 560) {
        scroll.classList.add('show-scroll');
    } else {
        scroll.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 


/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 


/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/ 


/*==================== GENERATE PDF ====================*/ 
// PDF generated area


// Html2pdf options


// Function to call areaCv and Html2Pdf options 


// When the button is clicked, it executes the three functions

    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements


    // 2. The PDF is generated


    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.