"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safeAction";
import { CreateEditor } from "./schema";
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {

  const { name,email,additionalSkills,editingSoftware,experience,folioLink,number,bestworkLink} = data
  console.log(data);
  let editor
  try{
    editor = await db.editor.create({
      data:{
      name,
      email,
      additionalSkills,
      editingSoftware,
      experience,
      folioLink,
      number,
      bestworkLink,  
      }
    })
    revalidatePath("/")


  }
  catch(error)
  {
    console.log(error);
  }
  return {data:editor}
}

export const createEditor = createSafeAction(CreateEditor, handler);







 