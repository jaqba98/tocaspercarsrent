const cookieMsg = `<section id="cookies">
<h2>Zgoda na pliki cookie i dane</h2>
<p>Używamy plików cookies na naszej stronie internetowej. Kontynuując korzystanie z naszej strony internetowej, bez zmiany ustawień prywatności przeglądarki, wyrażasz zgodę na przetwarzanie Twoich danych osobowych.</p>
<button id="cookieAccept">Akceptuj</button>
</section>`;

const setCookie = (cname, cvalue, exdays) => {
    const newDate = new Date();
    newDate.setTime(newDate.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires="+ newDate.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const getCookie = (cname) => {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

if (getCookie('acceptCookies') === '') {
    document.body.innerHTML += cookieMsg;
    const cookieAccept = document.getElementById('cookieAccept');
    cookieAccept.addEventListener('click', () => {
        setCookie('acceptCookies', 'true', 366);
        const cookies = document.getElementById('cookies');
        cookies.remove();
    });
}
