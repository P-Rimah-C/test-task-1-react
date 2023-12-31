// Функция для построения массива ответов по индексам престановок
export function ShuffleByIndex (array, arrayIndexes) {
    const newArray = [];
    for (let i = 0; i < arrayIndexes.length; i++) {
        newArray.push(array[arrayIndexes[i]]);
    }
    return newArray;
}