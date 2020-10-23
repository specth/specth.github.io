let getRandomMeal = () =>  {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        .then(response.json().then(function(myUrl) {
            return myUrl.meals[0].strMealThumb;
        }))
}

let printMeal = (url) => {
    document.getElementById("currentMealImage").innerHTML = "<img src='" + url + "'>";
}


/*
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(response => response.json())
    .then(data => console.log(data.meals[0].strMealThumb));
*/