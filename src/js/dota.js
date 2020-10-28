!async function(){
    let data = await fetch("https://api.opendota.com/api/heroes")
        .then((response) => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });
    
    console.log(data[0].localized_name);
    }();