type Person = {
    name: string;
};

type Employee= Person & {
    employeeId: number;
};


const employeeA: Employee = {
    name: "HUNG",
    employeeId: 10
};

console.log(employeeA);