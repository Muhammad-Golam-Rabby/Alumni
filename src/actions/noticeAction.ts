"use server";

import { revalidatePath } from "next/cache";
import db from "../../config/db";

export async function getNotice(noticeID: string) {
  try {
    const snapshot = await db.collection("notices").doc(noticeID).get();

    if (!snapshot.exists) {
      return null;
    }

    const data = snapshot.data();
    data.id = snapshot.id;
    data.createdAt = data?.createdAt.toDate();
    data.updatedAt = data?.updatedAt.toDate();
    return data;
  } catch (error) {
    console.error("Error fetching notice:", error);
    return null;
  }
}

export async function getNotices() {
  try {
    // Fetch all notices
    const snapshot = await db.collection("notices").get();
    const notices = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return notices;
  } catch (error) {
    console.error("Error fetching notices:", error);
    return [];
  }
}

export async function createNotice(values: any) {
  try {
    await db.collection("notices").add({
      title: values.title,
      description: values.description,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    revalidatePath("/");
    return { success: true, msg: "Notice created successfully" };
  } catch (error) {
    console.error("Error creating notice:", error);
    return { success: false, msg: "Something went wrong" };
  }
}

export async function updateNotice(noticeID: string, values: any) {
  try {
    await db.collection("notices").doc(noticeID).update({
      title: values.title,
      description: values.description,
      updatedAt: new Date(),
    });
    revalidatePath("/");
    return { success: true, msg: "Notice updated successfully" };
  } catch (error) {
    console.error("Error updating notice:", error);
    return { success: false, msg: "Something went wrong" };
  }
}

export async function deleteNotice(noticeID: string) {
  try {
    await db.collection("notices").doc(noticeID).delete();
    revalidatePath("/");
    return { success: true, msg: "Notice deleted successfully" };
  } catch (error) {
    console.error("Error deleting notice:", error);
    return { success: false, msg: "Something went wrong" };
  }
}
