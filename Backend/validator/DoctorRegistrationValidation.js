const { z } = require("zod");


const VerificationRegisterrationschemaDoctor = z.object({
    firstname: z.string({ required_error: "First name is required" }).trim().min(3, "Length of the name must be minimum of length 3").max(20, "The length of the name is can not be grater than 20"),
    middelname: z.string({ required_error: "Middle name is required" }).trim().min(3, "Length of the middle name must be mininmun of lenght 3").max(20, "The length of the name is can not be grater than 20"),
    lastname: z.string({ required_error: "Middle name is required" }).trim().min(3, "Length of the middle name must be mininmun of lenght 3").max(20, "The length of the name is can not be grater than 20"),
    registrationnumber: z.string({ required_error: "Registration number required" }).trim().min(3, " Length of the registration number must be minimum of length 3").max(5, "The length of the registration number is can not be grater than 5"),
    yearofregistration: z.string({ required_error: "Yearof Registration is required" }).min(4, "Length of the registration year must be minimum of length 4").max(4, "The length of the registration year is can not be grater than 4"),
    statemedicalcouncil: z.string({ required_error: "State medical council name is required" }).min(3, "Length of the state medical council name must be minimum of length 3").max(20, "The length of the medical council name year is can not be grater than 20"),
    addressofhospital: z.string({ required_error: "Address of hospital is required" }).trim().min(5, "Length of the address of hospital must be minimum of length 5").max(30, "The length of the address of hospital year is can not be grater than 30")
})