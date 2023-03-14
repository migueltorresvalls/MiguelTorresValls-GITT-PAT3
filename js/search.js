var repos = [];

async function getData(){
    repos = [];
    const username = document.getElementById("search-bar").value;
    const url = `https://api.github.com/users/${username}/repos`;

    if (username != ''){
        try{

            const response = await fetch(url);
            const data = await response.json();

            // Se añade un elemento al final del array con .push

            data.forEach(repo => {
                let name = repo.name; 
                let full_name = repo.full_name; 
                let avatar_url = repo.owner.avatar_url;
                let html_url = repo.html_url; 

                let obj = {
                    name : name,
                    full_name : full_name, 
                    avatar_url : avatar_url,
                    html_url : html_url
                };
                
                repos.push(obj);
            })
            
            console.log(repos);
            showData();
        }catch(error){
            alert("Usuario no encontrado. Puede que se haya alcanzado el maximo numero de peticiones a la api de Github desde la misma direccion IP en una hora. Si es el caso, vuelve a intentarlo pasado un tiempo")
        }
    }

}


function showData(){
    let max = 20;
    let index = 0;
    var html = ``;
    while (index < max){
        if (repos.length > index){
            html += `<div class=search-result><div class="left-content"><img src="${repos[index].avatar_url}"></div><div class="right-content"><p id="full-name">${repos[index].full_name}</p><a href="${repos[index].html_url}" id="name">${repos[index].name}</a></div></div>`;

        }
        index ++;
    }
    document.getElementById("search-result-container").innerHTML = html;
}
