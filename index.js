const textMovie = document.getElementById("movieName")
const btnAction = document.getElementById("search")
const myDiv = document.getElementById("text")

const action = () => {
    key = "616456ea"
    const movie = textMovie.value
    const url = `http://www.omdbapi.com/?t=${movie}&apikey=${key}`

    fetch(url).then((resp) => resp.json()).then((data) => {

        if(data.Response = "True") {
            myDiv.innerHTML = `<br>
        <div class="info">
            <img src=${data.Poster} />
            <h1 id="title">${data.Title}<br>
            <div class="genre">
                <div>${data.Genre.split(",").join("</div><div>")}</div>
            </div>  
            <span class="rating">${data.imdbRating}</span>
            <br>
        <div class="details">
            <span>${data.Rated}</span>
            <span>${data.Runtime}</span>
            <span>${data.Year}</span>
        </div>

            </h1>
        </div>
        

        <div id="plot">
            <h1>Plot:</h1>
            <p>${data.Plot}</p>
        </div>

        <div id="cast">
            <h1>Cast:</h1>
            <p>${data.Actors}</p>
        </div>`
        } else {
            myDiv.innerHTML = "This movie don't exist"
        }

    }).catch(() => {
        myDiv.innerHTML = "This movie don't exist"
    })
}

btnAction.addEventListener("click", action)
