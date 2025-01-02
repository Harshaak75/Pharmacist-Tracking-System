import { PrismaClient } from "@prisma/client";

const Client = new PrismaClient();

interface admintype {
  employeeId: string;
  bycrypt_password?: string;
  role?: string;
  name?: string;
  email?: string;
}

export const LoginDetails = async ({
  employeeId
}: admintype) => {
  try {
    if (!employeeId) {
      throw new Error("Invalid input");
    }

    const admin = await Client.collection_of_models.findFirst({
      where: {
        employeeid: employeeId,
      },
    });

    // console.log(admin);

    return admin;
  } catch (error) {
    return error;
  }
};

export const CreateAdminData = async ({
  name,
  employeeId,
  email,
  bycrypt_password,
}: admintype) => {
  try {
    if (!employeeId || !bycrypt_password) {
      throw new Error("Invalid input");
    }

    console.log(name, employeeId, email, bycrypt_password)

    const admin = await Client.collection_of_models.create({
      data: {
        name: name,
        employeeid: employeeId,
        email: email || "",
        password: bycrypt_password,
        role: "admin",
      },
    });

    // console.log(admin);

    return admin;
  } catch (error) {
    return error;
  }
};
