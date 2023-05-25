

function add(x : number, y : number) : number {
    return x + y;
}

console.log(add(100,200))

class Employee {

    //static method
    static create(id : number, name : string, city : string ) {
        return new Employee(id, name, city)
    }

    //fields
    private _id : number = 0;
    private _name : string = '';
    private _city : string = '';

    //accessors for fields
    get id() : number {
        console.log('getter-id invoked')
        return this._id;
    }
    set id(val : number) {
        console.log('setter-id invoked')
        this._id = val;
    }

    get name() : string {
        return this._name;
    }
    set name(val : string) {
        this._name = val;
    }

    get city() : string {
        return this._city;
    }
    set city(val : string) {
        this._city = val;
    }

    constructor(id : number, name : string, city : string) {
        this._id = id;
        this._name = name;
        this._city = city;
    }

    display() : string {
        return `id = ${this.id}, name = ${this.name}, city = ${this.city}`;
    }
}

const emp = Employee.create(100, 'Magesh', 'Bangalore')
console.log(emp.id)