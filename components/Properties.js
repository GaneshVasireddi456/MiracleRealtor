import React from 'react'
import { Card } from 'primereact/card';
import Image from 'next/image'
import '../styles/Home.module.css'
import { Dialog } from 'primereact/dialog';
import { useState } from 'react/cjs/react.development';


export const Properties = ({ data }) => {
    const [dialog, setdialog] = useState(false)
    const [propertyData, setpropertyData] = useState()
    const showDialog = async(property) => {
        setdialog('true')
       await setpropertyData(property)
       console.log(property);
    }
    return (
        <div className="p-grid p-nogutter">
            {data.map((property) =>
                <div key={property.id} className="p-col-12 p-lg-4 p-md-6 p-sm-12 card" onClick={() => { showDialog(property) }}>
                    <Card  subTitle={<div className="p-d-flex p-jc-between" >
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}><span>Price : </span><span style={{ fontWeight: 'bolder' }}>{property.price + " ₹"}</span></div>
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}><span>No of rooms : </span><span style={{ fontWeight: 'bolder' }}>{property.rooms}</span></div>
                    </div>}
                        footer={<div className="p-d-flex p-jc-between">
                            <div style={{ fontWeight: 'bold', color: '#4F46E5' }}>{property.agency.name}</div>
                            <div ><Image src={property.agency.logo.url} width={'70px'} height={'30px'} /></div>
                        </div>}
                        className="p-m-2" >
                        <Image src={property.coverPhoto.url} width={'500px'} height={'200px'} />
                    </Card>
                </div>)
            }
           {dialog&& <Dialog modal='false' visible={dialog} onHide={() => setdialog(!dialog)} style={{ width: '60vw' }}  >
                <div className="p-d-flex p-jc-center ">
                    <div >
                    <Image src={propertyData.coverPhoto.url?propertyData.coverPhoto.url:''} width={'500px'} height={'300px'} />
                    </div>
                    <div className="p-grid p-pt-2 p-pl-4">
                       <p>
                           <span style={{fontWeight:'bolder'}}>Area :</span>&nbsp;{Math.trunc(propertyData.area)}&nbsp;<span >sqft,</span>&nbsp;
                            <span style={{fontWeight:'bolder'}}>Rooms :</span>&nbsp;{Math.trunc(propertyData.rooms)},&nbsp;
                            <span style={{fontWeight:'bolder'}}>Baths :</span>&nbsp;{propertyData.baths},&nbsp;
                            <span style={{fontWeight:'bolder'}}>Price :</span>&nbsp;{propertyData.price}&nbsp;₹,&nbsp;
                            <span style={{fontWeight:'bolder'}}>Rent frequency :</span>&nbsp;{propertyData.rentFrequency},&nbsp;
                            <span style={{fontWeight:'bolder'}}>Agency name :</span>&nbsp;{propertyData.agency.name},&nbsp;
                            <span style={{fontWeight:'bolder'}}>Contact name :</span>&nbsp;{propertyData.contactName},&nbsp;
                            <span style={{fontWeight:'bolder'}}>Mobile No :</span>&nbsp;{propertyData.phoneNumber.mobile},&nbsp;
                            {/* <span style={{fontWeight:'bolder'}}>Location :</span>&nbsp;[{propertyData._geoloc.lat},{propertyData._geoloc.lng}],&nbsp; */}
                            </p>
                    </div>
                    </div>


            </Dialog>}
        </div>
    )
}
