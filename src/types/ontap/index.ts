//Array
const fruits: (string | number)[] = ['Apple', 'Orange', 'Banana', 5];
console.log(fruits);

const fruits2: Array<string | number> = ['Apple', 'Orange', 'Banana', 3423];
console.log(fruits2);

const person: [number, string, boolean] = [1, "Steve", true];
console.log(person);

// Enum 
enum URL_API {
    Khong,
    Mot,
    Hai,
    Ba,
}
console.log(URL_API);

enum STRING {
    USER = "http://localhost:3000/users",
    PRODUCTS = "http://localhost:3000/products",
    CATEGORIES = "http://localhost:3000/categories",
}
console.log(STRING);

console.log(STRING.USER);

// Union

const code: (string | number) = "truong";
console.log(code);

//Any
let something: any = "Hello World!"; 
something = 23;
something = true;

console.log(something);


// void
function sayHi(): void {
    console.log("Hi!");
}

sayHi();

// Nerver
function throwError(errorMsg: string): never { 
    throw new Error(errorMsg); 
} 

throwError("Truong!");

function keepProcessing(): never { 
    while (true) { 
 console.log('I always does something and never ends.')
}
}

keepProcessing();


type Name = {
    id: number | string;
    name: string;
    genders: string;
    age: number;
}

type Name2 = Partial<Name>;

type Name3 = Required<Name2>;

type Name4 = Omit<Name3, "name">;

type Name5 = Pick<Name4, "genders" | "age">




