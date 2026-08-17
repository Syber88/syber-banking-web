function greet(name: string): string {
    return `Hello, ${name}`;
}

const message: string = greet("World");
console.log(message);

function double(num: number): number{
    return num * 2;
}

const result: number = double(6);
console.log(result);