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
const themeButton = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

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