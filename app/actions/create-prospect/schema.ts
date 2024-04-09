import { z } from "zod";
export const CreateProspects = z.object({
  name: z.string({
    required_error: "Enter a valid name",
    invalid_type_error: "Name is required",
  }).min(0, {
    message: "There must be a name."
  }),
  email: z.string({
    required_error: "Email must be valid",
    invalid_type_error: "Entet a valid email"
  }).min(0, {
    message: "There must be an email."
  }),
  message: z.string({
    required_error: "Enter a valid message",
    invalid_type_error: "Message is required",
  }).min(0, {
    message: "There must be a message."
  }),
 
});
