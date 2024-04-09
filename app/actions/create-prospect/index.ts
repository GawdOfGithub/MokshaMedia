"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safeAction";
import { CreateProspects } from "./schema";
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {

  const { name,email,message } = data
  console.log(data);
  let prospect
  try{
    prospect = await db.prospects.create({
      data:{
        name,
        email,
        message
      }
    })
    revalidatePath("/")


  }
  catch(error)
  {
    console.log(error);
  }
  return {data:prospect}
}

export const createProspects = createSafeAction(CreateProspects, handler);







 