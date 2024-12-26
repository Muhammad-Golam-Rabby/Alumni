"use server";

import { revalidatePath } from "next/cache";
import db from "../../config/db";

export async function getStudent(studentID: string) {
  try {
    const snapshot = await db.collection("students").doc(studentID).get();
    const userSnapshot = await db.collection("users").doc(studentID).get();
    const userData = userSnapshot.data();
    const studentData = snapshot.data();
    delete userData?.createdAt;
    delete userData?.updatedAt;
    delete studentData?.createdAt;
    delete studentData?.updatedAt;
    const student = {
      id: userSnapshot.id as string,
      ...userData,
      ...studentData,
    };

    return student;
  } catch (error) {
    console.error("Error fetching student:", error);
    return null;
  }
}

export async function getStudents() {
  try {
    // Fetch all students
    const snapshot = await db.collection("students").get();
    const students = snapshot.docs.map((doc) => {
      const data = doc.data();
      data.id = doc.id;
      data.createdAt = data?.createdAt?.toDate();
      data.updatedAt = data?.updatedAt?.toDate();
      return data;
    });

    // Fetch corresponding user data for each student
    const usersPromises = students.map(async (student: any) => {
      const userSnapshot = await db
        .collection("users")
        .doc(student.userID)
        .get();

      const user = userSnapshot.data();

      delete user?.createdAt;
      delete user?.updatedAt;

      return userSnapshot.exists ? { ...student, ...user } : { ...student };
    });

    // Wait for all user data to be fetched
    const studentsWithUserDetails = await Promise.all(usersPromises);

    return studentsWithUserDetails;
  } catch (error) {
    console.error("Error fetching students with user details:", error);
    return [];
  }
}

export async function createStudent(values: any) {
  console.log(values);

  try {
    await db.runTransaction(async (transaction) => {
      const userRef = db.collection("users");
      const studentRef = db.collection("students");

      // Check if a user with the same email already exists
      const userQuerySnapshot = await transaction.get(
        userRef.where("email", "==", values.email)
      );
      if (!userQuerySnapshot.empty) {
        throw new Error("Email already exists");
      }

      // Add new user
      const userDocRef = userRef.doc(); // Generate a new document reference
      transaction.set(userDocRef, {
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        password: values.password, // Consider encrypting passwords
        role: "student",
        address: values.address,
        image: values.image || "",
        gender: values.gender,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      // Add corresponding student record
      const studentDocRef = studentRef.doc(userDocRef.id); // Use user ID as the document ID
      transaction.set(studentDocRef, {
        userID: userDocRef.id,
        passingYear: values.passingYear,
        rollNo: values.rollNo,
        batch: values.batch,
        department: values.department,
        bloodGroup: values.bloodGroup,
        company: values.company,
        companyDesignation: values.companyDesignation,
        companyLocation: values.companyLocation,
        linkedInURL: values.linkedInURL,
        about: values.about,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });
    revalidatePath("/");
    return {
      success: true,
      msg: "Student created successfully",
    };
  } catch (error) {
    console.error("Error creating student:", error);
    return {
      success: false,
      msg: "Something went wrong",
    };
  }
}

export async function updateStudent(studentID: string, values: any) {
  try {
    await db
      .collection("users")
      .doc(studentID)
      .update({
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        password: values.password,
        role: "student",
        address: values.address,
        image: values.image || "",
        gender: values.gender,
        updatedAt: new Date(),
      });
    await db.collection("students").doc(studentID).update({
      passingYear: values.passingYear,
      rollNo: values.rollNo,
      batch: values.batch,
      department: values.department,
      bloodGroup: values.bloodGroup,
      company: values.company,
      companyDesignation: values.companyDesignation,
      companyLocation: values.companyLocation,
      linkedInURL: values.linkedInURL,
      about: values.about,
      updatedAt: new Date(),
    });
    revalidatePath("/");
    return {
      success: true,
      msg: "Student updated successfully",
    };
  } catch (error) {
    console.error("Error updating student:", error);
    return {
      success: false,
      msg: "Something went wrong",
    };
  }
}

export async function deleteStudent(studentID: string) {
  console.log(studentID);
  try {
    await db.collection("users").doc(studentID).delete();
    await db.collection("students").doc(studentID).delete();
    console.log(studentID);
    revalidatePath("/");
    return {
      success: true,
      msg: "Student deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting student:", error);
    return {
      success: false,
      msg: "Something went wrong",
    };
  }
}
