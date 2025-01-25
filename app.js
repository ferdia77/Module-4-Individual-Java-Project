// http://www.omdbapi.com/?i=tt3896198&apikey=b59e5615

function openSearchResults() {
    document.body.classList += " results--searched"
}

async function main() {
    const movies = await fetch("https://omdbapi.com/?s=fast&apikey=b59e5615");
    const moviesData = await movies.json();
    const result = moviesData.Search;
    console.log(result);
    renderMovies(result); //pass the data to renderMovies
}

main();

function renderMovies(movies) {
    const moviesDataWrapper = document.querySelector ('.movies');

    moviesDataWrapper.innerHTML = movies
        .map((movie) => {
            return `<div class="movie">
    <figure class="movie__img--wrapper">
        <img src="${movie.Poster}" alt="${movie.Title}">
    </figure>
    <div class="movie__title">
        ${movie.Title}
    </div>
    <div class="movie__year">
        ${movie.Year}
    </div>
</div>` 
    })
    .join(''); // Join the array to create a single HTML string
    
   
}

//const firstSix = Array.prototype.slice.call(document.querySelectorAll("selector"), 0, 6);


    renderMovies();

    

function getMovies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    "Title": "The Fast and the Furious",
                    "Year": "2001",
                    "imdbID": "tt0232500",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"
                    },
                    {
                    "Title": "Fast & Furious 6",
                    "Year": "2013",
                    "imdbID": "tt1905041",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
                    },
                    {
                    "Title": "Fast Five",
                    "Year": "2011",
                    "imdbID": "tt1596343",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
                    },
                    {
                    "Title": "Fast & Furious",
                    "Year": "2009",
                    "imdbID": "tt1013752",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BM2Y1YzhkNzUtMzhmZC00OTFkLWJjZDktMWYzZmQ0Y2Y5ODcwXkEyXkFqcGc@._V1_SX300.jpg"
                    },
                    {
                    "Title": "The Fast and the Furious: Tokyo Drift",
                    "Year": "2006",
                    "imdbID": "tt0463985",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
                    },
                    {
                    "Title": "2 Fast 2 Furious",
                    "Year": "2003",
                    "imdbID": "tt0322259",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BOTQzYzEwNWMtOTAwYy00YWYwLWE1NTEtZTkxOGQxZTM0M2VhXkEyXkFqcGc@._V1_SX300.jpg"
                    },
                    {
                    "Title": "Fast & Furious Presents: Hobbs & Shaw",
                    "Year": "2019",
                    "imdbID": "tt6806448",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNmU4OTA5NGYtMTFjMS00MzgxLWFjNTMtYjdlMThlYzc4M2M4XkEyXkFqcGc@._V1_SX300.jpg"
                    },
                    {
                    "Title": "F9: The Fast Saga",
                    "Year": "2021",
                    "imdbID": "tt5433138",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BODJkMTQ5ZmQtNzQxYy00ZWNlLWI0ZGYtYjU1NzdiMjcyNDRmXkEyXkFqcGc@._V1_SX300.jpg"
                    },
                    {
                    "Title": "Fast X",
                    "Year": "2023",
                    "imdbID": "tt5433140",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BYzEwZjczOTktYzU1OS00YjJlLTgyY2UtNWEzODBlN2RjZDEwXkEyXkFqcGc@._V1_SX300.jpg"
                    },
                    {
                    "Title": "Fast Times at Ridgemont High",
                    "Year": "1982",
                    "imdbID": "tt0083929",
                    "Type": "movie",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMWM4NTc3N2YtMjk2Ny00MTRmLWE4YzItNTVhMTRlODVkNmE5XkEyXkFqcGc@._V1_SX300.jpg"
                    },                    
            ]);
        }, 1000);
    });
}