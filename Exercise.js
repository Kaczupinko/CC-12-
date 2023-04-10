//Zapisywanie preferencji jezyka w ciasteczku
function setLanguagePreference(language) {
    document.cookie = "preferredLanguage=" + language + "; path=/;max-age=31536000";
}

//Odczytywanie preferencji jezyka z ciasteczka
function getLanguagePreference() {
    let cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith("preferredLanguage")) {
            return cookie.substring("preferredLanguage=".length);
        }
    }
    return null;
}

//Usuwanie preferencji jezyka z ciasteczka

function deleteLanguagePreference() {
    document.cookie = "preferredLanguage=; path=/;max-age=0";
}