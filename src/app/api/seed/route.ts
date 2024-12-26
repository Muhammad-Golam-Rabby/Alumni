import db from "../../../../config/db";

const deleteCollection = async (
  db: FirebaseFirestore.Firestore,
  collectionPath: string
) => {
  const collectionRef = db.collection(collectionPath);
  const querySnapshot = await collectionRef.get();

  querySnapshot.forEach((doc) => {
    doc.ref.delete();
  });
};

export async function GET() {
  const users = [
    {
      fullName: "JhonS Doe",
      email: "student@email.com",
      phone: "+8801556325517",
      password: "12345678",
      role: "student",
      address: "5831 bridleway circle",
      image: "",
      createdAt: new Date("2026-06-10T19:00:00Z"),
      updatedAt: new Date("2026-06-10T19:00:00Z"),
    },
    {
      fullName: "JhonA Doe",
      email: "admin@email.com",
      phone: "+8801556325517",
      password: "12345678",
      role: "admin",
      address: "5831 bridleway circle",
      image: "",
      createdAt: new Date("2026-06-10T19:00:00Z"),
      updatedAt: new Date("2026-06-10T19:00:00Z"),
    },
  ];

  await deleteCollection(db, "users");
  await db.collection("users").doc("Kb2nqZHLDFsPOTnt8J1y").set(users[0]);
  await db.collection("users").doc("BFQx7GhG4dLbqLHX74qg").set(users[1]);
  users.slice(2).forEach(async (user) => {
    await db.collection("users").doc().set(user);
  });

  return new Response(
    JSON.stringify({
      success: true,
      msg: "msg",
      result: "result",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
