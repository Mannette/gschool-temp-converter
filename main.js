var temperatures = function(t) {
  var input, output, fah, cel;

  input = document.getElementById('temp').valueOf();

  if (t === "F") {
    fah = input * 1.8 + 32;
    fah = output;

  }
  if (t === "C") {
    cel = (input - 32) / 1.8;
    cel = output;
  }
  document.getElementById('result').innerHTML = output;

}

document.getElementById('fahrenheit').addEventListener('click', function(){temperatures('F')})

document.getElementById('celsius').addEventListener('click', function(){temperatures('C')})
