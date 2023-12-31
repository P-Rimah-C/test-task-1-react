// Функция создания индексов перестановок массива ответов у вопроса
export const CreateShuffleArrayIndexes = (len) => {
  const array = [];
  for (let i = 0; i < len; i++) array.push(i);
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}