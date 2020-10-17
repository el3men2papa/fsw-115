axios.put("https://api.vschool.io/jochy/todo/5f665099a269067180b0f0b8",{title:"new title"})
.then(res => {

    console.log(res.data.description)
})
.catch(error=>console.log(error))




axios.post("https://api.vschool.io/jochy/todo",{

    "completed": false,
        "title": "Movies",
        "description": "Actions",
        "price": 0,
        "imgUrl": "http://path-to-url.jpg",
}) 


axios.get("https://api.vschool.io/jochy/todo")
.then(res => {
    for(var i = 0; i<res.data.length; i++){
        console.log(res.data[i])
        var div = document.getElementById("api")
        
        var listObject = document.createElement("div")
        div.appendChild(listObject)

        var heading = document.createElement("h1")
        heading.textContent = res.data[i].title
        listObject.appendChild(heading)

        var heading = document.createElement("h1")
        heading.textContent = res.data[i].title
        listObject.appendChild(heading)



    }

    console.log(res.data[0].description)
})
/* .catch(error=>console.log(error))

axios.get("https://api.vschool.io/jochy/todo/5f665099a269067180b0f0b8")

axios.delete("https://api.vschool.io/jochy/todo/5f665099a269067180b0f0b8") */ 