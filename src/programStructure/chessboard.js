export function printChessboard(size) {
  let chessboard = '';
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      chessboard += i % 2 === 0
        ? (j % 2 === 0
          ? '\xa0\xa0\xa0\xa0'
          : '#')
        : (j % 2 === 0
          ? '#'
          : '\xa0\xa0\xa0\xa0')
    }
    chessboard += '\n';
  }
  return chessboard
}

