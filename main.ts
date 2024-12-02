const hello: string = 'Hello World!';
const myString: string = 'Hello!';
const myNumbre: number = 42;
const myBoolean: boolean = true;

console.log(hello)

function sum(a: number, b: number):number {
    return a + b
}

const numbers: number[] = [1, 2, 3];
const strings: string[] = ['a', 'b', 'c'];

let a: any = '1'; //не опреділений тип

a = () => 1;

type NumberOrString = number | string

function addTwo(num: NumberOrString): number { //можна створити тип самостійно
    return 1 + Number(num)
}

function addOne(num: number | string): number { //два потенційних типи
    return 1 + Number(num)
}

const person1: {
    name: string
    age: number
    hobbies: string[]
} = {
    name: 'Oleg',
    age: 29,
    hobbies: ['guitar', 'rap']
}

// для зручності типізацію можна вивести в інтерфейс

interface User {
    name: string
    age: number
    hobbies: string[]
} 

const person2: User = {
    name: 'Oleg',
    age: 29,
    hobbies: ['guitar', 'rap'],
}

