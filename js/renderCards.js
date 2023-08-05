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
    copyPicture.querySelector('.picture').id = item.id;

    fragment.appendChild(copyPicture);

  });
  cardsContainer.appendChild(fragment);
  cardsContainer.addEventListener('click', (e) => {
    e.preventDefault();
    const targetCard = e.target.closest('.picture');
    let dataCard;
    createArrayPhotoInfo.forEach((item) => {
      if (item.id == targetCard.id) {
        dataCard = item;

      }
    });


    if (targetCard) {
      document
        .querySelector('.big-picture')
        .classList.remove('hidden');

      document
        .querySelector('.big-picture')
        .querySelector('img').src =
        dataCard.url;

      document
        .querySelector('.big-picture')
        .querySelector('.likes-count').textContent =
        dataCard.likes;

      document
        .querySelector('.big-picture')
        .querySelector('.comments-count').textContent =
      dataCard.comments.length;

      dataCard.comments.forEach((item)=> {
        document.querySelector('.social__comments').innerHTML += `<li class="social__comment">
        <img class="social__picture" src="${item.avatar}" alt="Аватар комментатора фотографии" width="35" height="35">
        <p class="social__text">${item.message}</p>
      </li>`;
        console.log(item)
      })

    }
  });
  const closeButton = document.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', () => {
    document.querySelector('.big-picture').classList.add('hidden');
    document.querySelector('.social__comments').innerHTML = '';
  });
};
export { renderCards };
