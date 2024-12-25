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
    date: string;
    product_name: string;
    latitude: number,
    longitude: number,
    binary_image_data: Buffer;
}

export const createActivity = async ({representative_name, doctor_name, date, product_name, latitude, longitude, binary_image_data}: ActivityType) =>{

    // console.log(representative_name,doctor_name, date, product_name)
    if(!representative_name || !doctor_name || !date || !product_name || !latitude || !longitude){
        throw new Error("Invalid input");
    }

    console.log(binary_image_data)
    

    try {
        const createActivity = await Client.activity.create({
            data: {
                representative_name: representative_name,
                doctor_name: doctor_name,
                date: new Date(date),
                product_promoted: product_name,
                latitude: latitude,
                longitude: longitude,
                image_data: binary_image_data,
            }
        })

        return createActivity;
    } catch (error: any) {
        console.log("error creating the activity", error);
    }
}