import {DynamoDBClient} from "@aws-sdk/client-dynamodb";
import snowflake from 'snowflake-sdk';

export class TestClass {
    private readonly client: DynamoDBClient;

    constructor() {
        this.client = new DynamoDBClient({});
    }
}