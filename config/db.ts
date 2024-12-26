import { apps } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "./firebaseServices.json";
if (!apps.length) {
  initializeApp({
    credential: cert(serviceAccount as any),
  });
}
const db = getFirestore();
export default db;
