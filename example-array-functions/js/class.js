class schoolClass {
    constructor(name, rating = 3){
        this.name = name;
        this.rating = rating;
    }
    log(){
        console.log(`Class Name = ${className} : Rating ${rating}`)
    }
}

let topics = [
    new schoolClass("SQL", 2),
    new schoolClass("Java", 5),
    new schoolClass("C#", 4),
    new schoolClass("Azure", 5),
    new schoolClass("Scrum", 3)
]

const displayTopics = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let topic of topics) {
        let tr = "<tr>";
        tr+= `<td>${topic.name}</td>`;
        tr+= `<td>${topic.rating}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}

const remove = () => {
    let name = document.getElementById("name").value;
    let idx = -1;
    for(let i in topics){
        if(name.toLowerCase() === topics[i].name.toLowerCase()){
            idx = i;
            break;
        }
    }
    if(idx != -1){
        alert("Name not found!")
        topics.splice(idx, 1)
    }

    displayTopics();
}

function addClass(){
    let name = document.getElementById("name").value;
    let rating = document.getElementById("rating").value;
    topics.push(new schoolClass(name, rating))
}