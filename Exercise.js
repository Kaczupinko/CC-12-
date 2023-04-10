
/*
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



//Przykład z użyciem LocalStorage - przechowywanie i odczytywanie listy zadań w aplikacji do zarządzania zadaniami:

// Zapisywanie listy zadań
function saveTaskList(taskList) {
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

// Odczytywanie listy zadań
function loadTaskList() {
    let taskListJson = localStorage.getItem("taskList");
    if (taskListJson) {
        return JSON.parse(taskListJson);
    }
    return [];
}

//Usuwanie listy zadań
function deleteTaskList() {
    localStorage.removeItem("taskList");
}

*/

// Przykład z użyciem sessionStorage - przechowywanie i odczytywanie listy zadań w aplikacji do zarządzania zadaniami:

function saveFormData(formData) {
    sessionStorage.setItem("formData", JSON.stringify(formData));
}

function getFormData() {
    let formDataJson = sessionStorage.getItem("formData");
    if (formDataJson) {
        return JSON.parse(formDataJson);
    }
    return null;
}

function deleteFormData() {
    sessionStorage.removeItem("formData");
}
