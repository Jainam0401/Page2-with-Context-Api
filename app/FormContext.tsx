// FormContext.js
"use client";
import React, { createContext, useState } from 'react';
import { boolean } from 'zod';

export const FormContext = createContext({
 formData: {},
 populateForm: (newData) => {},
 trigger:boolean,
 handleTrigger: ()=>{} // Corrected to be a no-op function
});

export const FormProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(false);

const handleTrigger = () => {
 setTrigger(!trigger);
};

 const [formData, setFormData] = useState({});

 const populateForm = (newData) => {
   setFormData(newData);
  };
  
 return (
    <FormContext.Provider value={{ populateForm, formData, handleTrigger, trigger }}>
      {children}
    </FormContext.Provider>
 );
};
