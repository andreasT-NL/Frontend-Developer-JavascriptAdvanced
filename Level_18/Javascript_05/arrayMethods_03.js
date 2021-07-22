const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
];
//////// opdracht 01
const allNames = superheroes.map((heroeNames) => {
    return heroeNames.name;
});
// console.log(allNames);

//////// opdracht 02
const lightHeroes = superheroes.filter((hero) => {
    return hero.weight < 190;
});
// console.log('heroes lighter than 190', lightHeroes);

//////// opdracht 03
const heavyHeroes = superheroes.filter((hero) => {
    return parseInt(hero.weight) === 200;
}).map(hero => {
    return hero.name;
});
console.log('200 pound Heroes:', heavyHeroes);

//////// opdracht 04
const firstAppComics = superheroes.map((heroes) => {
    return heroes.first_appearance;
});
// console.log('all comics', firstAppComics);

//////// opdracht 05
// const selectedPublisher = superheroes.filter((hero) => {
// return hero.publisher === "DC Comics";
// }).map(hero => {
//     return hero.name;
// });
// console.log('heroes in DC Comics:', selectedPublisher);

const dcComicHeroes = superheroes.filter((hero) => {
    return hero.publisher === 'DC Comics';
});

const marvelComicHeroes = superheroes.filter((hero) => {
    return hero.publisher === 'Marvel Comics';
});

//of 
const dcComicHeroesShort = superheroes.filter((hero) => hero.publisher === 'DC Comics');
const marvelComicHeroesShort = superheroes.filter((hero) => hero.publisher === 'Marvel Comics');

// console.log('DC Comics heroes:', dcComicHeroes);
// console.log('heroes in Marvel Comics:', marvelComicHeroes);
// console.log('DC Comics heroes:', dcComicHeroesShort);
// console.log('heroes in Marvel Comics:', marvelComicHeroesShort);


//////// opdracht 06
const totalHeroWeights = superheroes.map((heroes) => {
    if (heroes.weight === 'unknown') { //turn 'unknown' into value
        return 0;
    }
    return parseInt(heroes.weight); //catch all weights and 'parse' strings to numbers
}).reduce((currentTotal, weight) => { // add all weights
    return (weight + currentTotal);
}, 0);
console.log('weight of heroes:', totalHeroWeights);

//////// opdracht 07
const totalMarvelHeroWeights = superheroes.filter((hero) => {
    return hero.publisher === 'Marvel Comics'; //select all marvel heroes
}).map((heroes) => {
    if (heroes.weight === 'unknown') { //turn 'unknown' into value
        return 0;
    }
    return parseInt(heroes.weight); //catch all weights and 'parse' strings to numbers
}).reduce((currentTotal, weight) => { // add all weights
    return (weight + currentTotal);
}, 0);
console.log('weight of Marvel heroes (long code):', totalMarvelHeroWeights);

// of met gebruik van eerdere functie "marvel comic heroes":
const marvelWeightsTotal = marvelComicHeroes.map((heroes) => {
    if (heroes.weight === 'unknown') { //turn 'unknown' into value
        return 0;
    }
    return parseInt(heroes.weight); //catch all weights and 'parse' strings to numbers
}).reduce((currentTotal, weight) => { // add all weights
    return (weight + currentTotal);
}, 0);
console.log('weight of Marvel heroes (short code):', marvelWeightsTotal);

//////// opdracht 08
const maxWeight = superheroes.map((heroes) => {
    if (heroes.weight === 'unknown') {
        return 0;
    }
    return parseInt(heroes.weight);
}).reduce((acc, val) => {
    acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0]
    acc[1] = (acc[1] === undefined || val > acc[1]) ? val : acc[1]
    return acc;
}, []);
console.log('heaviest heroe:', maxWeight);

