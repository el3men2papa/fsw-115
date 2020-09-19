axios.get("https://api.vschool.io/samallen1108/todo")
    .then(response => {
        for (let i = 0; i < response.data.length; i++){
            const h2 = document.createElement('h2')
            h2.textContent = response.data[i].title
            document.body.appendChild(h2)
            if (response.data[i].completed === true) {
                h2.textContent.strike()
            }
        }
    })
    .catch(error => console.log(error))