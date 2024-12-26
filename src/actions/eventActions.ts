"use server";

import { revalidatePath } from "next/cache";
import db from "../../config/db";

export async function getEvents() {
  try {
    // Fetch all events
    const snapshot = await db.collection("events").get();
    const events = snapshot.docs.map((doc) => {
      const data = doc.data();
      data.startDate = data.startDate.toDate();
      return {
        id: doc.id,
        ...data,
      };
    });

    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export async function getEvent(eventID: string) {
  try {
    const snapshot = await db.collection("events").doc(eventID).get();

    if (!snapshot.exists) {
      return null;
    }

    const data: any = snapshot.data();
    data.id = snapshot.id;
    data.startDate = data?.startDate.toDate();
    data.endDate = data?.endDate.toDate();
    data.createdAt = data?.createdAt?.toDate();
    data.updatedAt = data?.updatedAt?.toDate();
    return data;
  } catch (error) {
    console.error("Error fetching event:", error);
    return null;
  }
}

export async function createEvent(values: any) {
  try {
    await db.collection("events").add(values);
    revalidatePath("/");
    return { success: true, msg: "Event created successfully" };
  } catch (error) {
    console.error("Error creating event:", error);
    return { success: false, msg: "Something went wrong" };
  }
}

export async function updateEvent(eventID: string, values: any) {
  try {
    await db.collection("events").doc(eventID).update({
      title: values.title,
      description: values.description,
      location: values.location,
      startDate: values.startDate,
      startTime: values.startTime,
      endDate: values.endDate,
      endTime: values.endTime,
      updatedAt: new Date(),
    });
    revalidatePath("/");
    return { success: true, msg: "Event updated successfully" };
  } catch (error) {
    console.error("Error updating event:", error);
    return { success: false, msg: "Something went wrong" };
  }
}

export async function deleteEvent(eventID: string) {
  try {
    await db.collection("events").doc(eventID).delete();
    revalidatePath("/");
    return { success: true, msg: "Event deleted successfully" };
  } catch (error) {
    console.error("Error deleting event:", error);
    return { success: false, msg: "Something went wrong" };
  }
}
