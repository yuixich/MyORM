import * as _ from 'lodash';
import * as util from 'util';

export abstract class Entity {

    static columns: Record<string, number> = {};

    constructor() {
    }

    static getTableName(): string {
        return _.snakeCase(this.name);
    }

    setColumn(abc: string): void {
        console.log('aabb');
        (this.constructor as typeof Entity).columns[abc] = 1;
        //this.columns[abc] = 1;
        console.log('aabb');
    }


}


export function Column(a: string ): Function {
    console.log(`aaaaaaaa: ${a}`);
    return function (object: Entity, propertyName: string) {
        console.log(`a:${a}`);
        console.log(`object:${util.inspect(object)}`);
        console.log(`propertyName:${propertyName}`);

        //console.log(object instanceof TestClass);
        object.setColumn(propertyName);
    }
}
