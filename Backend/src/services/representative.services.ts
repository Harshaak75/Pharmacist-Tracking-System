import { PrismaClient } from "@prisma/client";

const Client = new PrismaClient();

// logic to query the database for representative present or not

export const isRepresentaivePresent = async ({employeeid, password}: any)=>{
    if(!employeeid || !password){
        throw new Error("Employee id is required");
    }

    try {
        const get_representative_data = await Client.representative.findFirst({
            where: {
                employeeid: employeeid,
            },
            select:{
                password: true,
            },
        })

        return get_representative_data;
    } catch (error: any) {
        console.log("error retrieving employee data", error);
    }
}

interface ActivityType {
    representative_name: string;
    doctor_name: string;
    product_name: string;
    latitude: number,
    longitude: number,
    image_data?: Uint8Array | null; // Mark as optional
}

// logic to add activity to database from representative

export const createActivity = async ({representative_name, doctor_name,product_name, latitude, longitude, image_data}: ActivityType) =>{

    if(!representative_name || !doctor_name || !product_name || !latitude || !longitude){
        throw new Error("Invalid input");
    }

    try {
        const activityData = {
            representative_name,
            doctor_name,
            product_promoted: product_name,
            latitude,
            longitude,
            image_data: image_data || null,  // Handle optional image_data
        };

        const createactivity = await Client.activity.create({
            data: activityData
        })

        return createactivity;
    } catch (error: any) {
        console.log("error creating the activity", error);
    }
}

interface Complaint {
    name: string;
    email: string;
    subject: string;
    message: string;
  }


export const findId = async ({email}: any) =>{
    if(!email){
        throw new Error("Email is required");
    }

    const _id = await Client.representative.findUnique({where: {email: email}, select: {id: true}})

    return _id;
}




export const createComplaints = async ({name, email, subject, message}: Complaint) =>{
    if(!name ||!email ||!subject ||!message){
        throw new Error("Invalid input");
    }

    try {

        // console.log(name, email, subject, message)

        const _id = await Client.collection_of_models.findUnique({where: {email: email}, select: {id: true}})

        console.log(_id)

        if(!_id){
            throw new Error("No representative found with this email");
        }

        const representative_id = _id.id;

        console.log(representative_id)
        const complains = await Client.complains.create({
            data: {
                representative_name: name,
                email: email,
                subject: subject,
                message: message,
                representative_id: representative_id,
            }
        })

        return complains;
        
    } catch (error: any) {
        return error;
    }
    
}

export const listofComplains = async () =>{
    try {
        const listComplains = await Client.complains.findMany()

        return listComplains;
    } catch (error:any) {
        return error;
    }
}

interface Update {
    is_resolved : boolean,
    index: number
}

export const UpdateComplaint = async ({is_resolved, index}: Update) =>{
    try {
       const UpdatedComplaint = await Client.complains.update({
        where: {
            id: index,
        },
        data: {
            is_resolved: is_resolved,
        }
       }) 

       return UpdatedComplaint
    } catch (error: any) {
        return error
    }
}


