import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import {
  Client,
  PrivateKey,
  AccountCreateTransaction,
  AccountBalanceQuery,
  FileCreateTransaction,
  FileContentsQuery,
  Hbar,
} from "@hashgraph/sdk";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

import * as dotenv from "dotenv";
dotenv.config();

// Use lowdb as a 'chache' to reduce unnecessary calls to Hedera
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, "db.json");

// Configure lowdb
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

db.data ||= { users: [] };

const app = express();
app.use(express.json());

const myAccountId = process.env.MY_ACCOUNT_ID;
const myPrivateKey = process.env.MY_PRIVATE_KEY;

if (myAccountId == null || myPrivateKey == null) {
  throw new Error(
    "Environment variables myAccountId and myPrivateKey must be present"
  );
}

// Create our connection to the Hedera network
const client = Client.forTestnet();

client.setOperator(myAccountId, myPrivateKey);

// //Create new keys
// const newAccountPrivateKey = PrivateKey.generateED25519();
// const newAccountPublicKey = newAccountPrivateKey.publicKey;

// //Create a new account with 1,000 tinybar starting balance
// const newAccount = await new AccountCreateTransaction()
//   .setKey(newAccountPublicKey)
//   .setInitialBalance(Hbar.fromTinybars(1000))
//   .execute(client);

// // Get the new account ID
// const getReceipt = await newAccount.getReceipt(client);
// const newAccountId = getReceipt.accountId;

// console.log("The new account ID is: " + newAccountId);

// //Verify the account balance
// const accountBalance = await new AccountBalanceQuery()
//   .setAccountId(newAccountId)
//   .execute(client);

// console.log(
//   "The new account balance is: " +
//     accountBalance.hbars.toTinybars() +
//     " tinybar."
// );

// console.log("Worked!");

app.get("/user", async (req, res) => {
  // Check if user ID is provided
  const userId = req.body;
  if (!userId) {
    throw new Error("User ID not provided!");
  }

  // Retrieve saved data if the user exists in the database
  for (let user in db.data.users) {
    if (user.name === userId) {
      const query = new FileContentsQuery().setFileId(user.fileId);

      const contents = await query.execute(client);

      console.log(`User data with id ${user.fileId} fetched!`);
      console.log(contents);
      res.json(JSON.parse(contents));
      return;
    }
  }
  throw new Error("A record for the given User ID does not exist!");
});

app.post("/user/add", async (req, res) => {
  // Check if user ID is provided
  const userId = req.body.userId;
  if (!userId) {
    throw new Error("User ID not provided!");
  }

  // Check if user already exists
  if (db.data.users.some((user) => user.name === userId)) {
    throw new Error("A record for the given User ID already exists!");
  }

  // Check if user data is provided
  const contents = JSON.stringify(req.body.userData);
  if (!contents) {
    throw new Error("User data not provided!");
  }

  // Create a new file that will be used to sign the transaction
  const fileKey = PrivateKey.generateED25519();
  const filePubKey = fileKey.publicKey;

  console.log(`File length is ${contents.length}`);

  // Create a new file with the user data
  const transaction = new FileCreateTransaction()
    .setKeys([filePubKey])
    .setContents(contents)
    .setMaxTransactionFee(new Hbar(2))
    .freezeWith(client);

  // Sign and submit the transaction
  const signTx = await transaction.sign(fileKey);
  const submitTx = await signTx.execute(client);
  const receipt = await submitTx.getReceipt(client);

  const fileId = receipt.fileId;

  // Add the user to the database
  db.data.users.push({ name: userId, fileId: fileId.toString() });
  db.write();

  console.log(`New File created with ID: ${fileId}`);

  // Return the file ID
  res.send(fileId.toString());
});

app.listen(5000, console.log("Server started on port 5000"));
