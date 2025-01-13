import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { createActivity, createComplaints, findId, isRepresentaivePresent, listofComplains, UpdateComplaint } from "../services/representative.services";
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

export const Create_Complains = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }

  try {
    const {name, email, subject, message} = req.body; 

    // console.log(name, email, subject, message)

    const complaints = await createComplaints({name, email, subject, message});

    res.status(200).json(complaints);

  } catch (error: any) {
    res.status(401).json(error.message)
  }
}

export const get_complains = async (req: Request, res: Response, next: NextFunction): Promise<any> =>{
  try {
    const listComplains = await listofComplains();

    res.status(200).json(listComplains);
  } catch (error:any) {
    res.status(401).json(error.message)
  }
}

export const update_complaint = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {

    const {is_resolved, index} = req.body;
    const Updated_complaints = await UpdateComplaint({is_resolved, index});
    res.status(200).json(Updated_complaints);
  } catch (error: any) {
    res.status(401).json(error.message)
  }
}