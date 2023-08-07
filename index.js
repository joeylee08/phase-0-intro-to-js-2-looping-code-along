function writeCards(array, event) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return result;
}

console.log(writeCards(['Charlie', 'Samip', 'Ali'], 'birthday'))

const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
  let i = 0;
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++;
  }
  return gifts;
}

wrapGifts(gifts);

function countDown(num) {
  while (num > -1) {
    console.log(num);
    num--;
  }
  return;
}