import { ApiResponser } from "@/helpers/ApiResponser";
import db from "../../../../../config/db";

export async function POST(request: Request) {
  const req = await request.json();
  const usersRef = db.collection("users");

  const emailQuerySnapshot = await usersRef
    .where("email", "==", req.email)
    .where("password", "==", req.password)
    .get();
  if (emailQuerySnapshot.empty) {
    return ApiResponser.error("invalid credentials");
  }
  let user: any;
  if (!emailQuerySnapshot.empty) {
    user = emailQuerySnapshot.docs[0].data();
    user.id = emailQuerySnapshot.docs[0].id;
  }
  delete user.password;
  console.log(user, "REQ");
  if (user) {
    return ApiResponser.success("Logged in successfully", user);
  } else {
    return ApiResponser.error("invalid credentials");
  }
}
