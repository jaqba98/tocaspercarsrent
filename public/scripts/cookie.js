const setCookie = (cookieName, cookieValue, cookieDays) => {
    const newDate = new Date();
    newDate.setTime(newDate.getTime() + (cookieDays * 24 * 60 * 60 * 1000));
    const expires = "expires="+ newDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

const checkCookieAcceptCookies = () => {
    return /acceptCookies=true/gm.test(document.cookie);
}

if (!checkCookieAcceptCookies()) {
    document.body.innerHTML += `<section id="cookies">
    <h2>Zgoda na pliki cookie i dane</h2>
    <p>Używamy plików cookies na naszej stronie internetowej. Kontynuując korzystanie z naszej strony internetowej, bez zmiany ustawień prywatności przeglądarki, wyrażasz zgodę na przetwarzanie Twoich danych osobowych.</p>
    <button id="cookieAccept">Akceptuj</button>
    </section>`;
    const cookieAccept = document.getElementById('cookieAccept');
    cookieAccept.addEventListener('click', () => {
        setCookie('acceptCookies', true, 366);
        document.getElementById('cookies').remove();
    });
}
