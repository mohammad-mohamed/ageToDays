
calculate_button = document.getElementById('calculate_button');
calculate_button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicked');
    ageTodays();
})
console.log('click addEventListener');


function ageTodays()  {
    age = document.getElementById('age').value
    console.log('age: ' + age);
    document.getElementById('days').value = age * 365
}
    
    