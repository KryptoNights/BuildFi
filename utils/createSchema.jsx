async function createSchemaAndReturnId(schemaDefinition) {
  try {
    // Create the schema on the blockchain
    const schema = await client.createSchema(schemaDefinition);

    return schema.id;
  } catch (error) {
    console.error("Error creating schema:", error);
    throw error;
  }
}

// How to call in frontend

// const schemaDefinition = {
//   name: "Example Schema",
//   data: [
//     { name: "contractDetails", type: "string" },
//     { name: "signer", type: "address" },
//   ],
// };

// createSchemaAndReturnId(schemaDefinition)
//   .then((schemaId) => console.log("Schema ID:", schemaId))
//   .catch((error) => console.error("Error creating schema:", error));
