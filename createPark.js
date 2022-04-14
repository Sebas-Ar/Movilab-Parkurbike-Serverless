import * as uuid from "uuid";
import AWS from "aws-sdk";

/* AWS.config.update({ region: "us-east-1" }) */

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event, context) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const data = JSON.parse(event.body);

  const { name, location, contact, type, totalRacks, freeRacks, typeRack, photo, score, price, offer, services } = data;

  const params = {
    TableName: process.env.tablePark,
    Item: {
      // The attributes of the item to be created
      biciparqueaderoId: uuid.v1(), // The id of the author
      empresaBiciparqueaderoId: uuid.v1(), // A unique uuid
      name,
      location,
      contact,
      type,
      totalRacks,
      freeRacks,
      typeRack,
      photo,
      score,
      price,
      offer,
      services,
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