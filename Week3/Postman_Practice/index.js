const xhr = new XMLHttpRequest()

xhr.open("GET", "https://swapi.dev/api/planets/", true)
xhr.send()

xhr.open("GET", "https://swapi.dev/api/people/", true)
xhr.send()



