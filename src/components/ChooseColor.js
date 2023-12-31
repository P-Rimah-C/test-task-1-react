// Функция выбора цвет в зависимости от прогресса выполения теста
export const ChooseColor = (progress) => {
    if (progress <= 50) return "danger";
    else if (progress <= 75) return "warning";
    else return "success";
}
