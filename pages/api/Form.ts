import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === 'POST'){
        try {
            // console.log(req.body);
            const { fullname, email, phoneNumber, pincode, city, state, country, completeAddress, landmark, dateOfShipment, others, buyersCompanyName, buyersGSTIN} = req.body;
            // res.send(req.body);
            // return
            const airtableApiKey = process.env.AIRTABLE_API_KEY;
            const airtableBaseId = process.env.AIRTABLE_BASE_ID;
            const airtableTableId = process.env.AIRTABLE_TABLE_ID;
            const url = `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableId}`;

            const config = {
                headers: {
                    Authorization: `Bearer ${airtableApiKey}`,
                    'Content-Type': 'application/json',
                },
            };

            const dataFields = {
                fields: {
                    'Full Name': fullname,
                    'Email': email,
                    'Phone Number': phoneNumber,
                    'Pincode': pincode,
                    'City': city,
                    'State': state,
                    'Country': country,
                    'Complete Address': completeAddress,
                    'Landmark': landmark,
                    'Date of Shipment': dateOfShipment,
                    'Others': others,
                    'Buyers Company Name': buyersCompanyName,
                    'Buyers GSTIN': buyersGSTIN
                }
            };

            await axios.post(url, dataFields, config);

            res.status(200).json({ success: true });

        } catch (error) {
            console.error('Error submitting form: ', error);
            res.status(500).json({ error: 'An error occured' });
        }
    }
    else{
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    if (req.method === 'GET'){
        res.send('Hello');
    }
}