"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FormProvider } from '../../FormContext';
import Formbar from "./Formbar";
import PickupAddressForm from "@/app/CreateOrders/pickupAddress";
import BuyerAddress from "@/app/CreateOrders/BuyerAddress";

const Form = () => {
 const [pincode, setPincode] = useState("");
 const [details, setDetails] = useState({
    district: "",
    deliveryStatus: "",
    country: "",
    state: "",
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

 const [currentSection, setCurrentSection] = useState("pickup");
 const [isPickupAddressCompleted, setIsPickupAddressCompleted] = useState(false);

 return (
    <div>
      <div className="bg-white p-2 rounded-lg">
          <Formbar setCurrentSection={setCurrentSection} />
          {currentSection === "pickup" && (
            <div>
             
              <PickupAddressForm
                isPickupAddressCompleted={isPickupAddressCompleted}
                setIsPickupAddressCompleted={setIsPickupAddressCompleted}
              />
      
            </div>
          )}
          {currentSection === "buyer" && isPickupAddressCompleted && (
            <BuyerAddress />
          )}
      </div>
    </div>
 );
};

export default Form;
