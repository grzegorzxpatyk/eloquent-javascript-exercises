import './styles.css';
import minimumOfTwo from './functions/minimum';

const rootContainer = document.querySelector('#app');

window.addEventListener('DOMContentLoaded', () => {
  const heading = document.createElement('h1');
  heading.style.color = 'cornflower blue';
  heading.innerText = 'Eloquent JavaScript Sandbox';

  const paragraph = document.createElement('p');
  paragraph.style.lineHeight = '1.2';
  paragraph.innerText = 'This is a exercise playground to repeat the basics of Vanilla JavaScript using the exercises from the end of every chapter of Eloquent JavaScript book.'

  const titleSection = document.createElement('section');
  titleSection.style.display = 'flex';
  titleSection.style.flexDirection = 'column';
  titleSection.style.width = 'min(90vw, 500px)'

  titleSection.append(heading, paragraph);
  rootContainer.append(titleSection);
  console.log(minimumOfTwo(7, 69));
})