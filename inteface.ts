interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function displayPerson(person: Person): void {
    console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
}

let user: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

displayPerson(user);
