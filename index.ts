type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "completed" | "ordered";
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Peperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj,
  };
  menu.push(newPizza);
  return newPizza;
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number): Order {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`Order with ID ${orderId} not found`);
    throw new Error();
  }
  order.status = "completed";
  return order;
}

function addToArray<T>(array: T[], item: T): T[] {
  array.push(item);
  return array;
}

export function getPizzaDetails(
  identifier: string | number
): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) =>
        pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError("Parameter `identifier` must be a string or a number ");
  }
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
