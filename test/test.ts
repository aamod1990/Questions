interface Employee { 
    name: string; 
    code: number; 
}

let employee = <Employee>{ };
employee.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
employee.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'

console.log(employee.name)