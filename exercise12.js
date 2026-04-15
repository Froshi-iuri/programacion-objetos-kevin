/*12. University Class with Department Management

Write a JavaScript program that creates a class called University with properties 
for university name and departments. Include methods to add a department, remove a 
department, and display all departments. Create an instance of the University class 
and add and remove departments.*/
class University {
    #universityName;
    #departments;

    constructor(universityName) {
        this.#universityName = universityName;
        // Inicializamos como arreglo vacío para poder usar .push() después
        this.#departments = [];
    }

    addDepartment(deptName) {
        this.#departments.push(deptName);
        return `Department "${deptName}" added to ${this.#universityName}.`;
    }

    removeDepartment(deptName) {
        // Recreamos el arreglo sin el departamento que queremos quitar
        const initialLength = this.#departments.length;
        this.#departments = this.#departments.filter(d => d !== deptName);

        if (this.#departments.length < initialLength) {
            return `Department "${deptName}" removed from ${this.#universityName}.`;
        }
        return `Department "${deptName}" not found.`;
    }

    displayDepartments() {
        if (this.#departments.length === 0) {
            return `${this.#universityName} has no departments yet.`;
        }
        return `Departments in ${this.#universityName}: ${this.#departments.join(", ")}`;
    }
}

// Pruebas:
const myUni = new University("SENA");
console.log(myUni.addDepartment("Software Development"));
console.log(myUni.addDepartment("Design"));
console.log(myUni.displayDepartments());
console.log(myUni.removeDepartment("Design"));
console.log(myUni.displayDepartments());