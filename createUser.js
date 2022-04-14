import * as uuid from "uuid";
import AWS from "aws-sdk";

/* AWS.config.update({ region: "us-east-1" }) */

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event, context) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const data = JSON.parse(event.body);

  const {userId, name, email, phone, password, gender, institution} = data;

  const params = {
    TableName: process.env.tableName,
    Item: {
      // The attributes of the item to be created
      userId, // The id of the author
      bikeId: uuid.v1(), // A unique uuid
      name,
      email,
      phone,
      password,
      gender,
      birthday: Date.now(),
      institution,
      createdAt: Date.now(), // Current Unix timestamp
    },
  };

  try {
    await dynamoDb.put(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
}