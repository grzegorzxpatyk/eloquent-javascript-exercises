import './styles.css';
import { printChessboard } from './programStructure/chessboard';

document.getElementById('app').innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

document.querySelector('#app').innerHTML += printChessboard(8).replaceAll(
  '\n',
  '<br />'
);
