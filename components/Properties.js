import React, { useState } from 'react'
import { Card } from 'primereact/card';
import Image from 'next/image'
import { useRouter } from 'next/router'

const Properties = ({ data }) => {
    const router = useRouter()
    const [dialog, setdialog] = useState(false)
    const [propertyData, setpropertyData] = useState()
    const showDialog = async (property) => {
        router.push(`/property/${property.externalID}`)
    }
    return (
        <div className="p-grid p-nogutter">
            {data.map((property) =>
                <div key={property.id} className="p-col-12 p-lg-4 p-md-6 p-sm-12 card " onClick={() => { showDialog(property) }}>
                    <Card subTitle={<div className="p-d-flex p-jc-between" >
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}><span>Price : </span><span style={{ fontWeight: 'bolder' }}>{property.price + " ₹"}</span></div>
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}><span>No of rooms : </span><span style={{ fontWeight: 'bolder' }}>{property.rooms}</span></div>
                    </div>}
                        footer={<div className="p-d-flex p-jc-between">
                            <div style={{ fontWeight: 'bold', color: '#4F46E5' }}>{property.agency.name}</div>
                            <div ><Image src={property.agency.logo.url} width={'70px'} height={'30px'} /></div>
                        </div>}
                        className="p-m-2" >
                        <Image src={property.coverPhoto.url} width={'500px'} height={'200px'} alt='Image' />
                    </Card>
                </div>)
            }
        </div>
    )
}
export default Properties
