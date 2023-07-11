import {getData} from './data.js'
import {getRandomInteger, createRandomIdFromRangeGenerator} from './util.js';
const countObj = 25;
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
  message: getRandomArrayElement(getData().messageMock),
  name: getRandomArrayElement(getData().nameMock),
});
const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(getData().descriptionMock),
  likes: generatePhotoLikes(),
  comments: Array.from({length: generateCommentsCount()}, createComments)
});
const array25 = [];
for(let i = 1; i <= countObj; i++) {
  array25.push(createPhoto());
}
export{array25};
