

  const xhr = new XMLHttpRequest()

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        iputResults(data.results)
    } 
}


function iputResults(arr){
        for(let j = 0; j < arr.length; j++){
            const h3 = document.createElement('h3')
            h3.textContent = arr[j].name
            document.body.appendChild(h3)
        }
}  


