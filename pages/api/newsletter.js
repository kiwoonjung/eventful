import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "invaild email address" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://eventful:IDpPHmouG1reyW52@circlemarket-server.lmw8s6t.mongodb.net/eventful?retryWrites=true&w=majority"
    );
    const db = client.db();

    await db.collection("newsletter").insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: "Sign Up!" });
  }
}

export default handler;
