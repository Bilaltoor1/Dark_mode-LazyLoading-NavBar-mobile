const mobileNav = () => {

    const mobileNav = document.querySelector('.mobile__nav');
    const menuButton = document.querySelector('.menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link')
    let isMobileNav = false;

    const menuToggleHandler = () => {
        isMobileNav = !isMobileNav;
        if (mobileNav) {
            mobileNav.style.display = 'flex'
            console.log('click')
        } else {
            mobileNav.style.display = 'none'
        }
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNav = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
    menuButton.addEventListener('click', menuToggleHandler);
}
export default mobileNav