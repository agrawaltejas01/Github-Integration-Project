import ObjectID from  "bson-objectid" 

export class LabelSchema{
    id: number;
    node_id: string;
    url: string;
    name: string;
    color: string;
    default: string;
    description: string;
}

export class IssueSchema{
    number: number;
    state: string;
    title: string;
    label: LabelSchema[];
    body: string;
    user: string;
    creationDate: Date;
}