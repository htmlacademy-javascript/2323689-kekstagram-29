import { createArrayPhotoInfo } from './createArrayPhoto.js';
const renderCards = () => {
  const pictureFragment = document.querySelector('#picture').content;
  const cardsContainer = document.querySelector('.pictures');
  const fragment = new DocumentFragment();

  createArrayPhotoInfo.forEach((item) => {
    const copyPicture = pictureFragment.cloneNode(true);
    copyPicture.querySelector('.picture__img').src = item.url;
    copyPicture.querySelector('.picture__img').alt = item.description;
    copyPicture.querySelector('.picture__likes').textContent = item.likes;
    copyPicture.querySelector('.picture__comments').textContent = item.comments.length;
    fragment.appendChild(copyPicture);
  });
  cardsContainer.appendChild(fragment);
};
export { renderCards };
