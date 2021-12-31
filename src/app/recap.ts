const username: string | number = "user01";

const sum = (a: number, b: number) => {
  return a + b;
}

sum(1,2);

class Person {
  private age: number;
  lastname: string;

  constructor(lastname: string, age: number) {
    this.age = age;
    this.lastname = lastname;
  }
}

const person = new Person("lasname", 15);
