import { PrismaClient } from "@prisma/client";
// import { NextFunction, Request, Response } from "express";
// import { Int32 } from "mongoose";

const Client = new PrismaClient();

// interface admintype {
//   employeeId: string;
//   password: string;
//   role?: string;
// }

interface RepresentativeType {
  name: string;
  employeeid: string;
  email: string;
  bycrypt_password: string;
  phone_number?: string;
  role?: string;
}

interface doctorType {
  name: string;
  gender: string;
  // date_of_birth: string,
  qualification: string;
  year_of_expirened: number;
  // licence_number: string
  hospital_name: string;
  speciality: string;
  address: string;
  phone_number: string;
  email: string;
  password: string;
  role? : string;
}

// admin data validate

// export const LoginAdmin = async ({ employeeId, password }: admintype) => {
//   try {
//     if (!employeeId || !password) {
//       throw new Error("Invalid input");
//     }

//     const admin = await Client.collection_of_models.findFirst({
//       where: {
//         employeeid: employeeId,
//         password: password,
//       },
//     });

//     console.log(admin)

//     return admin;
//   } catch (error) {
//     return error;
//   }
// };

// Representative data validation and push to database

export const CreateRepresentative = async ({
  name,
  employeeid,
  email,
  bycrypt_password,
  role = "representative",
}: RepresentativeType) => {
  try {
    if (!name || !employeeid || !email || !bycrypt_password) {
      throw new Error("Invalid input");
    }

    console.log(
      "in creating data",
      name,
      employeeid,
      email,
      bycrypt_password,
    );

    const Representative = await Client.collection_of_models.create({
      data: {
        name: name,
        employeeid: employeeid,
        email: email,
        password: bycrypt_password,
        role: role,
      },
    });

    return Representative;
  } catch (error: any) {
    console.error("Error creating representative:", error.message || error);
    throw error; // Rethrow or handle appropriately
  }
};

// Doctor data validation and push to database

export const create_doctor = async (doctor_details: doctorType, role = "doctor") => {
  try {
    if (
      !doctor_details.name ||
      !doctor_details.gender ||
      !doctor_details.qualification ||
      !doctor_details.year_of_expirened ||
      !doctor_details.hospital_name ||
      !doctor_details.speciality ||
      !doctor_details.address ||
      !doctor_details.email ||
      !doctor_details.password
    ) {
      // throw new Error("Invalid input");
      return "invalid input"
    }
    const doctor = await Client.doctor.create({
        data:{
            name: doctor_details.name,
            email: doctor_details.email,
            password: doctor_details.password,
            phone_number: doctor_details.phone_number,
            speciality: doctor_details.speciality,
            year_of_expirened:Number(doctor_details.year_of_expirened),
            gender: doctor_details.gender,
            qualification: doctor_details.qualification,
            address: doctor_details.address,
            hospital_name: doctor_details.hospital_name,
            role: role,
        },
    });

    return doctor;
  } catch (error: any) {
    console.error("Error creating doctor account:", error.message || error);
    return { error: "Failed to create doctor account", details: error.message };
  }
};
