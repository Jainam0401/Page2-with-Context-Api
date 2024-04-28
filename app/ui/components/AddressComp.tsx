import React, { useContext, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { FormContext } from '../../FormContext';
import { FormProvider } from '../../FormContext';
function AddressComp({ data, address, index }) {
  const { populateForm, formData, handleTrigger  } = useContext(FormContext);

  const handleClick = () => {
    console.log(`Clicked: ${JSON.stringify(data)}`);
    populateForm(data);
    console.log("LAST LOG"+JSON.stringify(formData));
    handleTrigger();
  };


  return (
   

    <div className='grid grid-cols-4 py-2 border-b-2 border-dotted'>
      <div className='col-span-3'>
        <span className='text-sm font-bold mr-2'>{data.fullName}</span>
        <span className='text-sm font-bold'>{data.city}</span>
        <p className='text-sm'>{address}</p>
      </div>
      <div className='col-span-1'>
        <button key={index} onClick={handleClick} className='flex items-center text-red-500 text-sm font-medium'>
          <IoIosAdd className='text-red-500' />
          <p className='text-sm'>Add</p>
        </button>
      </div>
    </div>
   
  );
}

export default AddressComp;