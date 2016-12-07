export class Employee {
    constructor(
        public id: number,
        public name: string = "employee " + id,
        public position: string = "worker " + id,
        public age: number = 26
    ){}
}