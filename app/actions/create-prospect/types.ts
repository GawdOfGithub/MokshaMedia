import { z } from "zod";
import { Prospects } from "@prisma/client";

import { ActionState } from "@/lib/create-safeAction";

import { CreateProspects } from "./schema";

export type InputType = z.infer<typeof CreateProspects>;
export type ReturnType = ActionState<InputType, Prospects>;
