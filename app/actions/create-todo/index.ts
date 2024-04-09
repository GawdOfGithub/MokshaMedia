"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safeAction";

import { CreateTodo } from "./schema";
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {

  const { title } = data
  let todo 
  try{
    todo = await db.todo.create({
      data:{
        title
      }
    })
    revalidatePath("/")


  }
  catch(error)
  {
    console.log(error);
  }
  return {data:todo}
}

export const createTodo = createSafeAction(CreateTodo, handler);







 