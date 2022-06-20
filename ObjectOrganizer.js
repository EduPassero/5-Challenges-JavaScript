// Create a function that orders a list of object by hierarchy (me, admins, contacts)
// Crie uma funçao que organiza uma lista de objetos por hierarquia (me, admins, contacts)

const profileList = [
    {
        class: "admin",
        name: "Eduardo"
    },
    {
        class: "me",
        name: "Barbara"
    },
    {
        class: "admin",
        name : "Fernando"
    },
    {
        class: "contact",
        name: "John"
    },
    {
        class: "contact",
        name: "Frank"
    }
]

function ObjectOrganizer(list){
    list.sort(function(a, b){
        let x = a.class.toLowerCase();
        let y = b.class.toLowerCase();
        if((x === 'me') || (x === 'admin' && y === 'contact')){return -1}
        else if((y === 'me') || (y === 'admin' && x == 'contact')){return 1}
        else if((x === 'admin' && y === 'admin') || (x == 'contact' && y == 'contact') ){return 0}
    })
    console.log(list)
}

ObjectOrganizer(profileList)