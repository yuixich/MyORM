import { Entity } from '../index';

class TestClass extends Entity {
    name: string;
    constructor() {
        super();
        console.log('constructor called');
    }

    b(): void {
        console.log('b called');
    }
}


console.log('before');
const a = new TestClass();
console.log('after');
console.log(TestClass['_entityInfo']);

a.b();
