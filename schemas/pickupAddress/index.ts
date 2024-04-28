import { z } from "zod";

export const PickupAddressSchema = z.object({
 pickupFullName: z.string().nonempty({ message: "Full Name is required" }),
 pickupMobileNumber: z.string().nonempty({ message: "Mobile number is required" }),
 pickupPincode: z.string().nonempty({ message: "Pincode is required" }).regex(/^\d+$/, { message: "Pincode should only contain digits" }),
 pickupCity: z.string().nonempty({ message: "City Name is required" }),
 pickupState: z.string().nonempty({ message: "State is required" }),
 pickupCountry: z.string().nonempty({ message: "Country is required" }),
 pickupAddress: z.string().nonempty({ message: "Address is required" }),
});

type PickupAddressSchemaType = z.infer<typeof PickupAddressSchema>;
