export class Todo {
    id:string
    title: string;
    description: string;
    dueDate: Date;
    createdDate: Date;
    modifiedDate: Date;
    isComplete: boolean;
    constructor(values: Object={}) {
        Object.assign(this, values)
    }
}
