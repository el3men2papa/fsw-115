/* axios.get("https://api.vschool.io/samallen1108/todo")
    .then (res => {}) */

function api(){
    axios.get("https://swapi.dev/api/people")
        .then(res =>{
            for(i=0;i<res.data.results.length; i++){
                const h1 = document.createElement("h1")
                h1.textContent = res.data.results[i].name
                h1.classList.add("color") 
                document.getElementById("whatever").appendChild(h1)
            }
        })
        .catch(error=> console.log(error)) ///mandatory
}

function api2(){
    axios.get("https://swapi.dev/api/films/")
    .then(res =>{
        for(j=0; j<res.data.results.length; j++){
            const h2 =document.createElement("h2")
            h2.textContent = res.data.results[j].title
            h2.classList.add("color")
            document.getElementById("whatever").appendChild(h2)
        }
    })
    .catch(error=> console.log(error))
}



var btn = document.getElementById("btn")
btn.addEventListener("click", api)

var btn2 = document.getElementById("btn2")
btn2.addEventListener("click", api2)
