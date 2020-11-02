function showSubMenu() {
    const subMenu = document.getElementsByClassName("menu__sub")[0];
    subMenu.style.display = "block";
}

function hideSubMenu() {
    const subMenu = document.getElementsByClassName("menu__sub")[0];
    subMenu.style.display = "none";
}

let active = null;

function onMenuItemsMouseEnter(item) {
    if(active){
        active.classList.remove("menu-items--active");
    }
    active = item;
    item.classList.add("menu-items--active");
    showSubMenu();
}

const menuItems = document.getElementsByClassName("menu-items");
for (const menuItem of menuItems) {
    menuItem.onmouseenter = showSubMenu;
}

const menu = document.getElementsByClassName("menu")[0];
menu.onmouseleave = hideSubMenu;