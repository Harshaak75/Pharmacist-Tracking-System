import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { createActivity, isRepresentaivePresent } from "../services/representative.services";
import bcrypt from "bcrypt"


// logic to validate login credentials of representaive

export const loginRepresentateive = async (req: Request, res: Response, next: NextFunction): Promise<any> =>{
    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()});
    }

    try {
      const {employeeid,password} = req.body;
      
      const respresntativeLogin = await isRepresentaivePresent({employeeid,password});

      const employee_password = respresntativeLogin?.password;

      if(!respresntativeLogin){
        return res.status(400).send("Provide proper employee id")
      }

      const isPasswordValid = await bcrypt.compare(password, employee_password || "");
      
      if(!isPasswordValid){
        // throw new Error('Invalid credentials');
        return res.status(400).send("invalid credentials")
      }

      return res.status(200).send("success")
    } catch (error: any) {
        return res.json(error)
    }
}

// logic to submit daily activity of representative

export const SubmitDailyActivity = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  try {
    const {representative_name, doctor_name,product_name, latitude,longitude, image} = req.body;

    // console.log(image_data)

    const base64Image = image.split(";base64,").pop();

    const image_d = Buffer.from(base64Image, "base64");

    const image_data = new Uint8Array(image_d)

    const Activity = await createActivity({representative_name, doctor_name,product_name, latitude,longitude, image_data});

    res.status(200).json(Activity);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}