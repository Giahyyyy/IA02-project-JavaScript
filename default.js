var inputElement = 
document.getElementById('input1');



inputElement.oninput = function(e) {
    console.log(e.target.value);
}