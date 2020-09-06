
var starWars = `{
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Film",
            "type": "boolean",
            "difficulty": "medium",
            "question": "Sean Connery wasn&#039;t in &quot;Indiana Jones and the Kingdom of the Crystal Skull&quot; because he found retirement too enjoyable.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "hard",
            "question": "Artis Leon Ivey Jr. is better known as which rap artist?",
            "correct_answer": "Coolio",
            "incorrect_answers": [
                "Dr Dre",
                "Snoop Dogg",
                "Ice T"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "easy",
            "question": "The Flag of the European Union has how many stars on it?",
            "correct_answer": "12",
            "incorrect_answers": [
                "10",
                "14",
                "16"
            ]
        }
    ]
}`


for(var i = 0; i < starWars.length ; i ++){
    var jason = JSON.parse(starWars)

    var list = document.createElement("li")
var test = document.getElementById("test")
list.textContent =`
 ${jason.results[i].type} ||
  ${jason.results[i].question} ||
  ${jason.results[i].difficulty} ||
  ${jason.results[i].correct_answer} || 
  ${jason.results[i].incorrect_answers}`
test.append(list)
}