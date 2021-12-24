import { getScores } from './api.js';

const scoreBoard = document.querySelector('.score-list');

const render = async () => {
  scoreBoard.innerHTML = '';
  const data = await getScores();
  const list = data.map((item) => {
    const listItem = `<li class="list-item"><p>${item.user}:</p> <p>${item.score}</p></li>`;
    return listItem;
  });
  scoreBoard.innerHTML = list.join();
};

export default render;
