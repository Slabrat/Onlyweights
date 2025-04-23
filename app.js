const selectormenu = document.querySelector('#mob__menu')
const linkmenu = document.querySelector('.navi__menu')

selectormenu.addEventListener('click', function() {
    selectormenu.classList.toggle('active');
    linkmenu.classList.toggle('active')
});