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