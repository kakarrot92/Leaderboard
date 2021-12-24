// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './main.css';
import { sendScore } from './app/api.js';
import render from './app/createElement.js';

const refreshBtn = document.querySelector('.refresh');
const form = document.getElementById('form');

document.addEventListener('DOMContentLoaded', () => {
  refreshBtn.addEventListener('click', async () => {
    render();
  });
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  sendScore();
  name.value = '';
  score.value = '';

  render();
});