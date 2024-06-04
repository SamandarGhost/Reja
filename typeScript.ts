let box: string;
box = "hello";
box = 100;

let box1: string = "hello";
box1 = "100";

let price : number = 100;
price = "100";

let phone: number | string = "100";
phone = 100;

let pending: boolean = true;
pending = false;

// interface orqali kiritish
interface Person {
  name: string,
  age: number,
  nation: string
}

const peroson: Person = {
  name: 'Sam',
  // age: 30,
  age: true, // xato type
  nation: 'American'
}

// togridan togri kiritish
let person1: {
  name: string,
  age: number,
  nation: string
} = {
  name: 'Sam',
  age: 30,
  nation: 'American'
}

let skills: string[];
skills = ['PHP', 'Python', 'JavaScript'];

skills = ['PHP', 'Python', 'JavaScript', 1000];

let raqam: number[];
raqam = [12, 13, 14, 15, 16];

raqam = [12, 13, 14, 15, '16'];

let raqamlar: ( number | string)[];
raqamlar = [12, '13', 14, '16'];


class Person {

  age: number;
  firstName: string;
  lastName: string;


  constructor (age: number, firstName: string, lastName: string) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}