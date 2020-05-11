const navHTML = `
    <ul>
        <li>
            <a href="index.html"><i class="material-icons">home</i></a>
        </li>
        <li>
            <a href="about.html"><i class="material-icons">info</i></a>
        </li>
        <li>
            <a><i class="material-icons">person</i></a>
        </li>
    </ul>`;

window.addEventListener('load', ()=> {
    document.getElementsByClassName('top-nav')[0].innerHTML = navHTML;
});