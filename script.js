const barIcon = document.getElementById('bar'); // Hamburger icon
const xmarkIcon = document.getElementById('xmark'); // Close icon

const navlink = document.querySelector('.nav-links');
const arrow = document.querySelector('.arrow');


const downMenus = document.querySelectorAll('.down-menu');
const submenu = document.querySelector('.sub-menu');
const allListItems = document.querySelectorAll('li');



//---------Hamburger------------//
barIcon.addEventListener('click', () => {
    navlink.classList.add('show'); // Show the nav menu
    barIcon.style.display = 'none'; // Hide the hamburger icon
    xmarkIcon.style.display = 'block'; // Show the close icon
});

xmarkIcon.addEventListener('click', () => {
    navlink.classList.remove('show'); // Hide the nav menu
    barIcon.style.display = 'block'; // Show the hamburger icon
    xmarkIcon.style.display = 'none'; // Hide the close icon
});


//--------------arrow upside down sub menu toggle--------------//

downMenus.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Get the closest `li` parent of the clicked link
        const parentLi = link.closest('li');

        // Find the submenu within this parent `li`
        const submenu = parentLi.querySelector('.sub-menu');

        // Find the arrow icon within this parent `li`
        const arrow = parentLi.querySelector('.arrow');

        // Close all submenus and arrows by removing the class
        downMenus.forEach(otherLink => {
            const otherParentLi = otherLink.closest('li');
            const otherSubmenu = otherParentLi.querySelector('.sub-menu');
            const otherArrow = otherParentLi.querySelector('.arrow');

            if (otherSubmenu && otherSubmenu !== submenu) {
                otherSubmenu.classList.remove('dropdown-menu'); // Hide other submenus
            }

            if (otherArrow && otherArrow !== arrow) {
                otherArrow.classList.remove('rotate'); // Reset the other arrows
            }
        });

        // Toggle the `dropdown-menu` class for the clicked submenu
        if (submenu) {
            submenu.classList.toggle('dropdown-menu');
        }

        // Rotate the arrow for the clicked submenu
        if (arrow) {
            arrow.classList.toggle('rotate');
        }
    });
});

// Close all submenus when clicking outside
document.addEventListener('click', (e) => {
    let isClickInside = false;

    // Check if the click was inside any of the dropdowns or their submenus
    downMenus.forEach(link => {
        if (link.contains(e.target)) {
            isClickInside = true;
        }
    });

    // If the click was outside, close all submenus
    if (!isClickInside) {
        downMenus.forEach(link => {
            const parentLi = link.closest('li');
            const submenu = parentLi.querySelector('.sub-menu');
            const arrow = parentLi.querySelector('.arrow');

            if (submenu) {
                submenu.classList.remove('dropdown-menu'); // Hide the submenu
            }

            if (arrow) {
                arrow.classList.remove('rotate'); // Reset the arrow rotation
            }
        });
    }
});






