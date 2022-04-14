
import AWS from "aws-sdk";

/* AWS.config.update({ region: "us-east-1" }) */

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function main(event, context) {
  /* const data = JSON.parse(event.body); */

  const params = {
    TableName: process.env.tableName,
    // 'Key' defines the partition key and sort key of the item to be updated
    Key: {
      userId: "1012459488", // The id of the author
      bikeID: "0b9478f0-2abc-11eb-a082-89f4182dfb57", // The id of the note from the path
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: "SET entradaCode = :entradaCode, salidaCode = :salidaCode",
    ExpressionAttributeValues: {
      ":entradaCode": 123456 || null,
      ":salidaCode": 654321 || null,
    },
    // 'ReturnValues' specifies if and how to return the item's attributes,
    // where ALL_NEW returns all attributes of the item after the update; you
    // can inspect 'result' below to see how it works with different settings
    ReturnValues: "ALL_NEW",
  };

  try {
    const data = await dynamoDb.update(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }


  return { status: true };
};