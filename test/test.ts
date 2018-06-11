import { Entity } from '../index';
import { Column } from '../lib/Entity';

console.log('before TestClass');

export class TestClass extends Entity {
    name: string = 'name is ins';
    constructor() {
        super();
        console.log('constructor called');
    }

    b(): void {
        console.log('b called');
    }


    @Column('test')
    key: string;
}


console.log('before');
const a = new TestClass();
console.log('after');
console.log(TestClass['_entityInfo']);

a.b();
//console.log(a.getTableName());
//console.log(a.getTableName());
a.key = 'tet';
console.log((a.constructor as typeof TestClass).columns);
console.log((a.constructor as typeof TestClass).getTableName());
