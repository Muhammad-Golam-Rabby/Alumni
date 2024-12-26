import { User } from "./UserInterfaces";

export interface Student extends User {
  id: string;
  userID: string;
  rollNo: string;
  passingYear: string;
  batch: string;
  department: string;
  bloodGroup: string;
  dateOfBirth: Date;
  gender: string;
  about: string;
  address: string;
  company: string;
  companyDesignation: string;
  companyLocation: string;
  linkedInURL: string;
  createdAt: Date;
  updatedAt: Date;
}
