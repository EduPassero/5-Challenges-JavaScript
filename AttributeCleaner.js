// Create a function that receives and object and deletes it's empty attributes
// Crie uma funçao que receba um objeto e delete seus atriutos vazios

const person1 = {
    name : "Eduardo",
    surname : "Passero",
    age : "28"
}

const person2 = {
    name : "",
    surname : "Doe",
    age : ""
}

function AttributeCleaner(obj){
    Object.keys(obj).forEach(key => {
        if(obj[key] === ""){
            delete(obj[key])
        }
    });

    console.log(obj);
}

AttributeCleaner(person2)