// Write your solution in this file!
const employee = {
    name: "Zack Mwangi",
    streetAddress: "Ruaka, Kiambu",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employeeCopy = {...employee};
    employeeCopy[key] = value;
    return employeeCopy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const employeeCopy = {...employee};
    delete employeeCopy[key];
    return employeeCopy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}