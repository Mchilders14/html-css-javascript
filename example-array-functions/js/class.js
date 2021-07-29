/*
    This example demonstrates Objects, Arrays, Functions, Foreach Loop and Properties(.splice, .push, .getElementById)
*/

// Course object
class Course {
    constructor(name, rating = 3){
        this.name = name;
        this.rating = rating;
    }
    log(){
        console.log(`Course Name = ${this.name} : Rating ${this.rating}`)
    }
}

// Array of type schoolClass
let topics = [
    new Course("SQL", 2),
    new Course("Java", 5),
    new Course("C#", 4),
    new Course("Azure", 5),
    new Course("Scrum", 3)
]

// Display all the courses in the array via 'for-each-of' loop
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

// Remove item in list by 'name' via input field
const remove = () => {
    let name = document.getElementById("name").value;
    let idx = -1;
    for(let i in topics){
        if(name.toLowerCase() === topics[i].name.toLowerCase()){
            idx = i;
            break;
        }
    }
    // (If the array is not empty) <-- splice array to find index to remove
    if(idx != -1){
        topics.splice(idx, 1)
    }

    displayTopics();
}

// Add item in list of type schoolClass (name + rating)
const add = () => {
    let name = document.getElementById("name").value;
    let rating = document.getElementById("rating").value;

    topics.push(new Course(name, rating))
    
    displayTopics();
}