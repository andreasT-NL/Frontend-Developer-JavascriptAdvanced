const bigFiveButtons = document.querySelectorAll('.big-five-button');
const animalList = document.querySelector('#spotted-animals-list');
const buttonRemoveFirstLi = document.querySelector('#remove-first-item-button');
const buttonRemoveAll = document.querySelector('#remove-all-button');

bigFiveButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let makeNewLi = document.createElement('li');
        makeNewLi.setAttribute('class', 'spotted-animals-list-item');
        makeNewLi.innerHTML = event.target.innerHTML;
        animalList.appendChild(makeNewLi);
    });
});


// deel 2

buttonRemoveFirstLi.addEventListener('click', function () {
    let firstLi = animalList.getElementsByTagName('li')[0];
    // console.log(firstLi);
    let removedLi = animalList.removeChild(firstLi);
    // console.log(removedLi);
});

//same result as above
// buttonRemoveFirstLi.addEventListener('click', function(){
// let liElement = animalList.getElementsByTagName('li')[0];
// liElement.remove(); 
// console.log(liElement);
// });


// deel 3
buttonRemoveAll.addEventListener('click', function () {
    animalList.innerHTML = '';
});

