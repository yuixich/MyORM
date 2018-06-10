import * as _ from 'lodash';

export abstract class Entity {

    tableName() {
        return _.snakeCase(this.constructor.name);
    }

}
