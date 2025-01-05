import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { create_doctor, CreateRepresentative} from "../services/admin.services";
import bcrypt from "bcrypt";

// admin login logic

// export const loginAdmin = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<any> => {
//   const error = validationResult(req);

//   if (!error.isEmpty()) {
//     return res.status(400).json({ errors: error.array() });
//   }

//   // Continue with login logic...

//   const { employeeId, password } = req.body;

//   const admin_data = await LoginAdmin({ employeeId, password });

//   console.log(admin_data)

//   res.json(admin_data);
// };

// Representative create account logic

export const Create_Representative_Account = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  try {
    const { name, employeeid, email, password} = req.body;
    console.log(name, employeeid, email, password);

    const bycrypt_password = bcrypt.hashSync(password, 3);

    const Representative_data = await CreateRepresentative({
      name,
      employeeid,
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

// Doctor create account logic

export const create_doctor_account = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    try {

        const doctor_details = req.body;

        const passowrd = doctor_details.password;

        const bcryptPassword = bcrypt.hashSync(passowrd, 3);

        const doctor_data = await create_doctor({...doctor_details, password: bcryptPassword});

        res.status(200).json(doctor_data)
        
    } catch (error: any) {
        res.status(500).json({ errors: error})
    }
};
