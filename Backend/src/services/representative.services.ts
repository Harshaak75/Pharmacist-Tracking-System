import { PrismaClient } from "@prisma/client";

const Client = new PrismaClient();

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




