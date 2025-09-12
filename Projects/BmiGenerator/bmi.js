const form = document.querySelector("form");

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const comparison = document.querySelector('#comparison');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML= `Please Type a Valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML= `Please Type a Valid Weight ${weight}`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
    if (bmi < 18.6) {
      comparison.innerHTML = `<span>Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      comparison.innerHTML = `<span>Normal Range</span>`;
    } else {
      comparison.innerHTML = `<span>Over Weight</span>`;
    }
})