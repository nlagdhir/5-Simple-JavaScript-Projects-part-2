const toggle = document.querySelector('#toggle');

toggle.addEventListener('change',event => {
    document.body.classList.toggle('dark',event.target.checked);
})