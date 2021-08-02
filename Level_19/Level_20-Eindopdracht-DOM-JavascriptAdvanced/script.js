//load all movies to DOM
const addMoviesToDom = function (film) {
    film.forEach(function (list) {
        const filmWrapper = document.querySelector('#filmWrapper');
        const makeNewLi = document.createElement('li'); //create li-tag
        const aTag = document.createElement('a'); //create a-tag
        const posterImage = document.createElement('img'); //create img-tag
        makeNewLi.setAttribute('class', 'movie-list'); //class attribute for li-tags
        aTag.setAttribute('href', list.Poster); //attribute (href) for a-tags
        posterImage.src = list.Poster;
        filmWrapper.appendChild(makeNewLi); //add li-element
        makeNewLi.append(aTag); //add a href element
        aTag.append(posterImage); //add image
    });
};
//eventlistener buttons when selected
const addEventListeners = function () {
    const filmFilters = document.getElementsByName('filter'); //select all buttons
    //click-event for each button 
    filmFilters.forEach(function (btn) {
        btn.addEventListener('change', function () {
            console.log(event.target.value);
        });
    });
};

const handleOnChangeEvent = function (event) {
    console.log(event);
    switch (event) {
        case 'nieuwste':
            console.log('nieuwste films', event);
            break;
        case 'avangers':
            console.log('avangers films')
            break;
        case 'x-men':
            console.log('x-men films')
            break;
        case 'princess':
            console.log('princess films')
            break;
        case 'batman':
            console.log('batman films')
            break;
        default:
            text = "other movies";
    };
};




    addMoviesToDom(movies);
    addEventListeners();
    handleOnChangeEvent(addEventListeners);