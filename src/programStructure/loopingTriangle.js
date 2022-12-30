function printTriangle() {
  const hash = "#";
  let triangleString = "";

  for (let i = 0; i < 7; i++) {
    let hashRow = "";
    for (let j = 0; j <= i; j++) {
      hashRow += hash;
    }
    triangleString += hashRow + "\n";
  }

  console.log(triangleString);
}

export default printTriangle;
