// Функция проверки данных в localStorage и их изменение
export const SaveData = (key, value) => {
    if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
    }
    localStorage.setItem(key, value);
}
