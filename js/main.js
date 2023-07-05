const name = [
  'Ivan',
  'Fedor',
  'Jack',
  'Mark',
  'ken',
  'Bob',
  'Alen',
  'Den'
];

const description = [
  'hello world',
  'world is beautifull',
  'life is good',
  'sky is blue',
  'sky is black',
  'life is worst',
  'goodbye world',
  'where i am'

];
const message = [
  'i am programmer',
  'i am manager',
  'i am shoes seller',
  'i am engeneer',
  'i am ofice worcker',
  'i am driver',
  'i am drug seller',
  'i am doctor'

];
const countObj = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
function createRandomIdFromRangeGenerator(min, max){
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while(previousValues.includes(currentValue)){
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}
const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generatePhotoUrl = createRandomIdFromRangeGenerator(1, 25);
const generatePhotoLikes = createRandomIdFromRangeGenerator(15, 200);
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const generateCommentsCount = () => getRandomInteger(1, 6);
const generateCommentsId = createRandomIdFromRangeGenerator(0, 999);
const generateCommentsAvatar = () => getRandomInteger(1, 6);

const createComments = () => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${generateCommentsAvatar()}.svg`,
  message: getRandomArrayElement(message),
  name: getRandomArrayElement(name),
});
const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(description),
  likes: generatePhotoLikes(),
  comments: Array.from({length: generateCommentsCount()}, createComments)
});
const array25 = [];
for(let i = 1; i <= countObj; i++) {
  array25.push(createPhoto());
}
console.log(array25);


