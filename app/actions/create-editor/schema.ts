import { z } from "zod";
export const CreateEditor = z.object({
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
  number: z.string({
    required_error: "Enter a valid message",
    invalid_type_error: "Message is required",
  }).min(0, {
    message: "There must be a message."
  }),
  folioLink: z.string({
    required_error: "Please enter your portfolio link",
    invalid_type_error: "Something went wrong",
  }).min(0, {
    message: "Enter a 10 digits number."
  }),
  experience: z.string({
    required_error: "Enter how many years of experience do you have",
    invalid_type_error: "Something went wrong",
  }).min(0, {
    message: "Enter valid experience."
  }),
 editingSoftware: z.string({
    required_error: "Please select editing software of your choice",
    invalid_type_error: "Something went wrong",
  }).min(0, {
    message: "Chose an editing software."
  }),
  additionalSkills: z.string({
    required_error: "Enter additional skills that you possess",
    invalid_type_error: "Something went wrong",
  }).min(0, {
    message: "Enter the skills that you possess."
  }),
  bestworkLink: z.string({
    required_error: "Enter the link of your best work",
    invalid_type_error: "Something went wrong",
  }).min(0, {
    message: "Enter the link of your best work."
  }),
 
});
