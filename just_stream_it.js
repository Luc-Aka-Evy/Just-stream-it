
console.log("hello world !")

/*the url of all movies from API*/
var moviesUrls = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";

/* movies urls for each category sort by imdb score */

var actionsMoviesUrls = "http://localhost:8000/api/v1/titles/?genre_contains=action&sort_by=-imdb_score";
var comedyMoviesUrls = "http://localhost:8000/api/v1/titles/?genre_contains=comedy&sort_by=-imdb_score";
var animationMoviesUrls = "http://localhost:8000/api/v1/titles/?genre_contains=animation&sort_by=-imdb_score";


async function getMovies(url){
    var response = await fetch(url);
    var responseJson = await response.json();
    return responseJson;
}

/* get the best movie on API*/
getMovies(moviesUrls).then(function(response){

    let newImage = document.createElement('img');
    newImage.src = response.results[0].image_url;
    document.querySelector('section.best_movie').append(newImage);

});


getMovies(moviesUrls).then(function(response){
    let movies = [];
    let i = 0;
    let max = 7;
    while (i < response.results.length){
        movies.push(response.results[i].image_url);
        i++;
    }
    if (movies.length < max){
        max = max - movies.length;
        getMovies(response.next).then(function(response){
            i = 0;
            while (i < max){
                movies.push(response.results[i].image_url);
                i++
            }

    for (movie of movies){

        let newImage = document.createElement('img');
        newImage.src = movie
        document.querySelector('section.best_rated').append(newImage)

    }
        })
    }
})

getMovies(actionsMoviesUrls).then(function(response){
    let movies = [];
    let i = 0;
    let max = 7;
    while (i < response.results.length){
        movies.push(response.results[i].image_url);
        i++;
    }
    if (movies.length < max){
        max = max - movies.length;
        getMovies(response.next).then(function(response){
            i = 0;
            while (i < max){
                movies.push(response.results[i].image_url);
                i++
            }

    for (movie of movies){

        let newImage = document.createElement('img');
        newImage.src = movie
        document.querySelector('section.action').append(newImage)

    }
        })
    }
})

getMovies(comedyMoviesUrls).then(function(response){
    let movies = [];
    let i = 0;
    let max = 7;
    while (i < response.results.length){
        movies.push(response.results[i].image_url);
        i++;
    }
    if (movies.length < max){
        max = max - movies.length;
        getMovies(response.next).then(function(response){
            i = 0;
            while (i < max){
                movies.push(response.results[i].image_url);
                i++
            }

    for (movie of movies){

        let newImage = document.createElement('img');
        newImage.src = movie
        document.querySelector('section.comedy').append(newImage)

    }
        })
    }
})

getMovies(animationMoviesUrls).then(function(response){
    let movies = [];
    let i = 0;
    let max = 7;
    while (i < response.results.length){
        movies.push(response.results[i].image_url);
        i++;
    }
    if (movies.length < max){
        max = max - movies.length;
        getMovies(response.next).then(function(response){
            i = 0;
            while (i < max){
                movies.push(response.results[i].image_url);
                i++
            }

    for (movie of movies){

        let newImage = document.createElement('img');
        newImage.src = movie
        document.querySelector('section.animation').append(newImage)

    }
        })
    }
})