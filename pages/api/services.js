import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  if (req.method === "POST") {
    const { file, title, desc } = req.body;
    // Attaching to a channel

    await db.collection("services").insertOne({
      file,
      title,
      desc,
    });

    res.status(200).json({ status: "OK" });
  } else if (req.method === "GET") {
    const user = await db.collection("services").find().toArray();

    res.status(200).json({ status: 200, service: user });
  } else if (req.method === "PUT") {
    const { _id, file, title, desc } = req.body;

    await db.collection("services").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          file,
          title,
          desc,
        },
      }
    );

    res.status(200).json({status: 200})
  }
};

export default handler;
