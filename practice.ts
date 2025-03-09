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

function displayInfo(person) {
  console.log(`${person.name} lives at ${person.address.street}`);
}

displayInfo(person1);
