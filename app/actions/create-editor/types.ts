import { z } from "zod";
import { Editor } from "@prisma/client";

import { ActionState } from "@/lib/create-safeAction";

import { CreateEditor } from "./schema";

export type InputType = z.infer<typeof CreateEditor>;
export type ReturnType = ActionState<InputType, Editor>;
