function hashTriangle() {
  const hash = '#';
  let triangleString = '';

  for (let i = 0; i < 7; i++) {
    let hashRow = '';
    for (let j = 0; j <= i; j++) {
      hashRow += hash;
    }
    triangleString += hashRow + '\n';
  }

  return triangleString;
}

export default hashTriangle;
