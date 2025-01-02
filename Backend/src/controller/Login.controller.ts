import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import { CreateAdminData, LoginDetails } from "../services/Login.services";
import { admin_secret_key } from "../config";

interface AdminData {
  role: string; // Add other properties as needed
  password: string; // Add other properties as needed
}

export const CheckLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  // Continue with login logic...

  const { employeeId, password } = req.body;

  //   const bycrypt_password = "0" // change this

  const admin_data = await LoginDetails({ employeeId });

  if (admin_data) {
    const admin = admin_data as AdminData; // Assert the type of admin_data

    const passwords = admin.password;
    console.log(admin)

    const bcrypt_password = bcrypt.compareSync(password, passwords);

    if (bcrypt_password) {
      console.log(admin.role, password); // Now TypeScript knows `role` exists
      res.status(200).json({ messge: "success" });
      return;
    } else {
      res.status(401).json({ message: "Incorrect Password" });
      return;
    }
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
    return;
  }
};

export const CreateAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  try {
    const { name, employeeId, email, password, key } = req.body;
    // check for key

    console.log("env", admin_secret_key, "key", key);

    if (key != admin_secret_key) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    console.log(employeeId, password, key);

    const bycrypt_password = bcrypt.hashSync(password, 3);

    const Representative_data = await CreateAdminData({
      name,
      employeeId,
      email,
      bycrypt_password,
    });

    console.log(Representative_data);

    res.status(200).json(Representative_data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while creating the Representative" });
  }
};
