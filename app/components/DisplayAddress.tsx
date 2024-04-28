"use client";
import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import AddressComp from './AddressComp';
import axios from "axios";

function DisplayAddress() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.airtable.com/v0/appdNFLZAYfxzxosx/nothing",
          {
            headers: {
              Authorization: `Bearer patQntGqjDkxdlulD.0c16c807127b5e1704b17a071c92722777d78b085f7068f1e2121e65ce7b7347`,
              "Content-Type": "application/json",
            },
          }
        );  
        console.log(response.data.records); // Log the fullName of the second record
        setData(response.data.records);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from Airtable:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='p-4 max-h-screen overflow-y-auto'>
      <div className='relative'>
        <CiSearch className='absolute text-xl top-[3px] left-[5px]' />
        <input
          className='pl-8 p-[2px] md:max-w-[200px] rounded-md text-sm border-2 border-slate-300'
          type='text'
          placeholder='Search Address'
        />
      </div>
      {data.map((item, index) => (
        <AddressComp
          key={index}
          fullName={item.fields.fullName || ''}
          address={item.fields.address || ""}
        />
      ))}
    </div>
  );
}

export default DisplayAddress;