type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1 = {
  name: "Joe",
  age: 42,
  isStudent: true,
};

let person2 = {
  name: "Jill",
  age: 66,
  isStudent: false,
};

let people: Person[] = [person1, person2];

let ages: number[] = [100, 200];

function displayInfo(person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);
