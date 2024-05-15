function solve() {
  let text = document.querySelector(`#input`).value;
  let output = document.querySelector(`#output`);
  let pattern = /[“‘]?[A-Z][^.?!]+((?![.?!][’”]?\s[“‘]?[A-Z][^.?!]).)+[.?!’”]+/g;
  let input = text.match(pattern);

  for (let i = 0; i < input.length; i += 3) {
    let newArr = [];
    for (let j = 0; j < 3; j++) {
      if (input[i + j] !== undefined) {
        newArr.push(input[i + j]);
      }
    }
    let newPara = newArr.join(`. `);
    output.innerHTML += `<p>${newPara}<\p>`
  }
}