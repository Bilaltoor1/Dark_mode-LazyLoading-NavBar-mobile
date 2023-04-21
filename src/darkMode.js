const darkMode = () => {
    /*
    Selectors
    */
    const darkModeTogglerButton = document.querySelectorAll('.header__sun-icon');

    /*
    theme Toggler functions
     */
    darkModeTogglerButton.forEach((btn) => {

        const theme = localStorage.getItem('theme');

        theme && document.body.classList.add(theme)

        btn.addEventListener('click', () =>
        {

            document.body.classList.toggle('light-mode')

            if (document.body.classList.contains('light-mode'))
            {
                window.localStorage.setItem('theme', 'light-mode')
            }
            else {
                window.localStorage.removeItem('theme')
            }
        })
    })
}

export default darkMode