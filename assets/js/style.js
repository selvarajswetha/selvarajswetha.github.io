let currentlyAtTop = "home";

const navItems = document.querySelectorAll('[data-nav-item]')
const navItemIds = Array.from(navItems).map(e => e.attributes['data-nav-item'].value)

navItemIds.forEach(id => {
    document.addEventListener("scroll", function (e) {
        const position = document.querySelector("#" + id).getClientRects();

        if (position[0].top < 100 && position[0].top > -100 && currentlyAtTop !== id) {
            currentlyAtTop = id;
            navItems.forEach(e => e.classList.remove('active'));
            document.querySelector('[data-nav-item=' + currentlyAtTop + ']').classList.add('active');
        }
    });
});