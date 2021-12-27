import { Router, useRouter } from 'next/router'
import { Card } from 'primereact/card';
import React, { useState } from 'react'
import { baseURL, getAPI } from '../../utils/Api'
import { Paginator } from 'primereact/paginator';
import Image from 'next/image';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';



export const Property = ({ data }) => {
    const router = useRouter();
    const [contentFirst, setContentFirst] = useState(0);
    const onContentPageChange = (event) => {
        setContentFirst(event.first);
    }
    const backNavigation = () => { router.back() }
    console.log(data);
    return (
        <>
            <Card className='p-nogutter p-m-3 p-shadow-2 p-p-0'>
                <div className="p-d-flex p-jc-end p-mb-2">
                    <i className="pi pi-arrow-left" style={{ fontSize: '23px', fontWeight: 'bold', color: '#4F46E5', paddingRight: '7px', cursor: 'pointer' }} onClick={backNavigation}></i>
                </div>
                <div className="p-grid">
                    <div className='p-col-12 p-lg-6'>
                        <div className="image-gallery p-d-flex p-jc-center">
                            <div>
                                <Image
                                    src={data.photos[contentFirst].url}
                                    alt="Picture of the author"
                                    width={700}
                                    height={400}
                                />
                                <Paginator first={contentFirst} rows={1} totalRecords={data.photoCount} onPageChange={onContentPageChange}
                                    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"></Paginator>
                            </div>
                        </div>
                    </div>
                    <div className='p-col-12 p-lg-6'>
                        <div className="p-grid p-fluid">
                            <div className='p-col-12 p-lg-4 p-md-6'>
                                <p className='label'>No of rooms</p>
                                <InputText value={data.rooms} className='p-inputtext-sm' />
                                </div>
                                <div className='p-col-12 p-lg-4 p-md-6'> 
                                <p className='label'>No of baths</p>
                                <InputText value={data.baths} className='p-inputtext-sm' /></div>
                                <div className='p-col-12 p-lg-4 p-md-6'> 
                                <p className='label'>Area (sqft)</p>
                                <InputText value={Math.floor(data.area)} className='p-inputtext-sm' /></div>
                                <div className='p-col-12 p-lg-4 p-md-6'> 
                                <p className='label'>Contact name</p>
                                <InputText value={data.contactName} className='p-inputtext-sm' /></div>
                                <div className='p-col-12 p-lg-4 p-md-6'> 
                                <p className='label'>Mobile no</p>
                                <InputText value={data.phoneNumber.mobile} className='p-inputtext-sm' /></div>
                                <div className='p-col-12 p-lg-4 p-md-6'> 
                                <p className='label'>Whatsapp</p>
                                <InputText value={data.phoneNumber.whatsapp} className='p-inputtext-sm' /></div>
                                <div className='p-col-12 p-lg-4 p-md-6'> 
                                <p className='label'>Product</p>
                                <InputText value={data.product} className='p-inputtext-sm' /></div>
                                <div className='p-col-12 p-lg-4 p-md-6'> 
                                <p className='label'>Price ( ₹ )</p>
                                <InputText value={data.price} className='p-inputtext-sm' /></div>
                                <div className='p-col-12 p-lg-4 p-md-6'>
                                <p className='label'>Rent frequency</p>
                                <InputText value={data.rentFrequency} className='p-inputtext-sm' /></div>
                                <div className='p-col-12 p-lg-4 p-md-6'>
                                <p className='label'>Location</p>
                                <InputText value={`${data.geography.lat},${data.geography.lng}`} className='p-inputtext-sm' /></div>
                        </div>
                    </div>
                </div>
                <div className="p-grid p-fluid">
                    <h3>Description : </h3>
                    <InputTextarea autoResize cols={163} value={data.description}/>
                </div>
            </Card>
        </>
    )
}
export default Property
export async function getServerSideProps({ params }) {
    const data = await getAPI(`${baseURL}/properties/detail?externalID=${params.id}`)
    return {
        props: {
            data: data
        },
    }
}
