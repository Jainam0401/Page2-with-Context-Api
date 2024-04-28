// import React from 'react'
"use client";
import axios from "axios";
// import React from "react";
import React, { useState, useEffect } from "react";
// import Formbar from "./Formbar";
import { Label, Textarea, Checkbox, Datepicker } from "flowbite-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formSchema } from "../../schemas/buyerDetails/index";

function BuyerAddress() {
  const [pincode, setPincode] = useState("");
  const [details, setDetails] = useState({
    district: "",
    deliveryStatus: "",
    country: "",
    state: "",
  });

  type FormData = z.infer<typeof formSchema>;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.postalpincode.in/pincode/${pincode}`
        );
        const pincodeDetails = response.data[0];
        setDetails({
          district: pincodeDetails.PostOffice[0].District,
          deliveryStatus: pincodeDetails.PostOffice[0].DeliveryStatus,
          country: pincodeDetails.PostOffice[0].Country,
          state: pincodeDetails.PostOffice[0].State,
        });
      } catch (error) {
        console.error("Error fetching pincode details:", error);
      }
    };

    if (pincode) {
      fetchDetails();
    }
  }, [pincode]);

  const onSubmit = async (data: FormData) => {
    console.log("Submitted data:", data);
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${data.pincode}`
      );
      // console.log(response.data[0].PostOffice[0].District)
      // console.log(response.data[0].PostOffice[0].DeliveryStatus)
      // console.log(response.data[0].PostOffice[0].Country)
      // console.log(response.data[0].PostOffice[0].State)
      const pincodeDetails = response.data[0];
      // setDistrict(pincodeDetails.PostOffice[0].District);
      // setDeliveryStatus(pincodeDetails.PostOffice[0].DeliveryStatus);
      // setCountry(pincodeDetails.PostOffice[0].Country);
      // setState(pincodeDetails.PostOffice[0].State);
    } catch {
      console.log("error");
    }

    // try {
    //   const response = await axios.post(
    //     `https://api.airtable.com/v0/{baseId}/{tableName}`,
    //     { fields: data },
    //     {
    //       headers: {
    //         Authorization: `Bearer {validAirtableApiKeyOrBearerToken}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   console.log("Data sent to Airtable:", response.data);
    //   alert("Data sent to Airtable successfully!");
    //   reset();
    // } catch (error) {
    //   console.error("Error sending data to Airtable:", error);
    //   alert("Error sending data to Airtable. Please try again.");
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {" "}
      <div className="border-2 py-2 border-black rounded-md px-4">
        {/* Buyer Details */}
        <div className="">
          <p className="py-2 font-bold text-gray-700">Buyer Details</p>
          <div className="grid grid-cols-1 py-2 gap-4 md:grid-cols-3">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Full Name
              </label>
              <input
                {...register("fullName", { required: true })}
                id="fullName"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Email (Optional)
              </label>
              <input
                {...register("email")}
                id="email"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={`email`}
              />
            </div>
            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobileNumber"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Mobile number
              </label>
              <input
                {...register("mobileNumber")}
                id="mobileNumber"
                type="number"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your mobile number"
              />
              {errors.mobileNumber && (
                <p className="text-red-500">{errors.mobileNumber.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Buyer Address Details */}
        {/* Add the rest of the form fields here, following the same pattern */}

        <p className="py-2 font-bold text-gray-700">Buyer Address Details</p>
        {/* below details div  */}
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
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your Pin Code"
              />
              {errors?.pincode && (
                <p className="text-red-500">{errors?.pincode?.message}</p>
              )}
            </div>
            <div className="w-full lg:w-1/2 md:w-full">
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                City Name
              </label>
              <input
                type="text"
                value={details.district}
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
                value={details.state}
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
                value={details.country}
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
            <div className=" lg:w-1/2 md:w-full">
              <Label htmlFor="address" value="Complete address" />
              <Textarea
                className="p-2"
                id="address"
                placeholder="Leave a comment..."
                {...register("address", { required: "Address is required" })}
                rows={4}
              />
              {errors.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>
            <div className="lg:w-1/2 md:w-full">
              <Label htmlFor="landmark" value="LandMark (optional)" />
              <Textarea
                className="p-2"
                id="landmark"
                placeholder="Enter the landmark..."
                {...register("landmark")}
                rows={4}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full lg:w-1/2 md:w-full">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Others
              </label>
              <input
                type="date"
                id="date"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=" date"
                {...register("date")}
              />
            </div>
            <div className="w-full lg:w-1/2 md:w-full">
              <label
                htmlFor="others"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Others
              </label>
              <input
                type="text"
                id="others"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=" Others"
                {...register("others")}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full lg:w-1/2 md:w-full">
              <label
                htmlFor="Buyer"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Buyer's Company name
              </label>
              <input
                type="text"
                id="companyName"
                {...register("companyName")}
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your Buyer"
              />
            </div>
            <div className="w-full lg:w-1/2 md:w-full">
              <label
                htmlFor="gstin"
                className="block mb-2 text-sm font-medium text-gray-500"
              >
                Buyer's GSTIN
              </label>
              <input
                type="text"
                id="gstin"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=" Buyer's GSTIN"
                {...register("gstin")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Form submission buttons */}
      <div className="flex ml-3 mt-2 items-center gap-2">
        <Checkbox id="shipping-address" />
        <Label htmlFor="shipping-address">Add different Shipping address</Label>
      </div>
      <div className="flex ml-3 mt-2 items-center gap-2">
        <Checkbox id="billing-address" />
        <Label htmlFor="billing-address">Add different Billing address</Label>
      </div>
      <div className="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 md:p-4">
        <button
          type="reset"
          className="w-[150px] border-[1px] border-red-400 py-2 text-red-400 md:ml-auto"
        >
          Reset Changes
        </button>
        <button type="submit" className="w-[150px] bg-red-400 py-2">
          Continue
        </button>
      </div>
    </form>
  );
}

export default BuyerAddress;
