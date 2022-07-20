(() => {
    const refs = {
        openMenuBtn: document.querySelector(".header__burger"),
        closeMenuBtn: document.querySelector(".mob__close"),
        menu: document.querySelector(".mob__menu"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle("is-hidden");
    }
})();