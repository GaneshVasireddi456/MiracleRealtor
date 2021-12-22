import React from 'react'
import { Card } from 'primereact/card';
import Image from 'next/image'
import '../styles/Home.module.css'
import { Dialog } from 'primereact/dialog';
import { useState } from 'react/cjs/react.development';


 const Properties = ({ data }) => {
     const [dialog, setdialog] = useState(false)
    const [propertyData, setpropertyData] = useState()
    const showDialog = async(property) => {
        setdialog('true')
       await setpropertyData(property)
       console.log(property);
    }
    return (
        <div className="p-grid p-nogutter">
           
        </div>
    )
}
export default Properties
