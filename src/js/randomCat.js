const cat_result = document.getElementById('randomCatImage');
const cat_btn = document.getElementById('cat_btn');

function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
            cat_result.innerHTML = `<img src="${data.file}"/>`;
        })
}

cat_btn.addEventListener('click', getRandomCat);