"use client"
import { useForm } from "react-hook-form";
import { FormContext } from '../FormContext';
import { zodResolver } from "@hookform/resolvers/zod";
import { PickupAddressSchema } from "../../schemas/PickupAddress/index";
import React,{useState, useEffect, useContext } from "react";
interface FormValues {
  fullName: string;
  mobileNumber?: number;
  pincode: number;
  cityName: string;
  state: string;
  country: string;
  address: string;
}
export default function addressForm({ isaddressCompleted, setIsaddressCompleted }) {
  const { formData,trigger } = useContext(FormContext);
 
  const {
     register,
     handleSubmit,
     setValue, // Access setValue from useForm
     formState: { errors },
  } = useForm({
     resolver: zodResolver(PickupAddressSchema),
  });
 const handleClick = () =>{
  console.log("hii ftrom button");
  
 }
  useEffect(() => {
    console.log("hii n page before "+JSON.stringify(formData))
    // Assuming formData is the object you've shown
    // Populate form fields with formData
    Object.keys(formData).forEach((key) => {
      console.log("inner");
      
      setValue(key, formData[key]);
    });
 }, [formData, setValue,trigger,handleClick]); // Ensure setValue is in the dependency array
 console.log("in page after"+JSON.stringify(formData))

 const onSubmit = (data:any) => {

  setIsaddressCompleted(!isaddressCompleted);
    // Handle form submission
 };
 
 return (
  <>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className="border-2 py-2 border-black rounded-md px-4">
 {/* Pickup Details */}
 <div className="">
    <p className="py-2 font-bold text-gray-700">Pickup Details</p>
    <div className="grid grid-cols-1 py-2 gap-4 md:grid-cols-3">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-500">Full Name</label>
        <input
          {...register("fullName", { required: true })}
          id="fullName"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your full name"
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
      </div>
      {/* Mobile Number */}
      <div>
        <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-500">Mobile number</label>
        <input
          {...register("mobileNumber")}
          id="mobileNumber"
          type="number"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your mobile number"
        />
        {errors.mobileNumber && <p className="text-red-500">{errors.mobileNumber.message}</p>}
      </div>
    </div>
 </div>

 {/* Pickup Address Details */}
 <p className="py-2 font-bold text-gray-700">Pickup Address Details</p>
 <div>
    <div className="flex flex-col md:flex-row w-full gap-4">
      <div className="w-full lg:w-1/2 md:w-full">
        <label
          htmlFor="pincode"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          Pin Code
        </label>
        <input
          type="number"
          id="pincode"
          {...register("pincode", {
            required: "Pincode is required",
            pattern: {
              value: /^\d+$/,
              message: "Pincode should only contain digits",
            },
          })}
          name="pincode"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your Pin Code"
        />
        {errors?.pincode && (
          <p className="text-red-500">{errors?.pincode?.message}</p>
        )}
      </div>
      <div className="w-full lg:w-1/2 md:w-full">
        <label
          htmlFor="cityName"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          City Name
        </label>
        <input
          type="text"
          id="cityName"
          {...register("cityName")}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your City Name"
        />
        {errors.cityName && (
          <p className="text-red-500">{errors.cityName.message}</p>
        )}
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full lg:w-1/2 md:w-full">
        <label
          htmlFor="state"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          State
        </label>
        <input
          type="text"
          id="state"
          {...register("state", { required: "State is required" })}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your State"
        />
        {errors.state && (
          <p className="text-red-500">{errors.state.message}</p>
        )}
      </div>
      <div className="w-full lg:w-1/2 md:w-full">
        <label
          htmlFor="country"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          Country
        </label>
        <input
          type="text"
          id="country"
          {...register("country", { required: "Country is required" })}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your Country"
        />
        {errors.country && (
          <p className="text-red-500">{errors.country.message}</p>
        )}
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full lg:w-1/2 md:w-full">
        <label
          htmlFor="address"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          Complete address
        </label>
        <textarea
          id="address"
          placeholder="Enter your complete address..."
          {...register("address", { required: "Address is required" })}
          rows={4}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
      </div>
    </div>
    <div className="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 md:p-4">
          <button type="reset"  className="w-[150px] border-[1px] border-red-400 py-2 text-red-400 md:ml-auto">Reset Changes</button>
          <button type="submit" onClick={handleClick} className="w-[150px] bg-red-400 py-2">Continue</button>
        </div>

 </div>
</div>

    </form>
  </>
 );
}
