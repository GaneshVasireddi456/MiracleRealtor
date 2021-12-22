import Image from 'next/image'
import { Button } from 'primereact/button';
import React from 'react'
import { getAPI, baseURL } from '../utils/Api'
import { Properties } from "../components/Properties";
import Router from 'next/router';

const Banner = ({ address, purpose, des1, des2, data,purposeforQuery}) => {
  return (
    <>
      <div className="p-d-flex p-jc-center p-m-4" >
        <Image src={address} height={'300px'} width={'600px'} />
        <div className=" p-m-4" style={{ width: '250px' }}>
          <h1>{purpose}</h1>
          <h3>{des1}</h3>
          <p>{des2}</p>
          <Button label="Explore More" className="p-button-sm" icon="pi pi-building" onClick={()=>{Router.push(`/search?purpose=${purposeforQuery}`)}}/>
        </div>
      </div>  
      <Properties data={data}></Properties>
    </>
  )
}

export default function Home({ forRent, forSale }) {
  return (
    <div >
      <Banner address='/../public/homeforRent.jpg'
        purpose='Rent a Home'
        purposeforQuery='for-rent'
        des1="Rental homes for everyone"
        des2="Explore Apratments, Villas,Homes and more "
        data={forRent}></Banner>
      <Banner address='/../public/homeforSale.jpg'
        purpose='Buy a Home'
        purposeforQuery='for-sale'
        des1="Find buy & Own your dream home"
        des2="Explore Apratments, Villas,Homes and more "
        data={forSale}></Banner>
    </div>
  )
}
export async function getStaticProps() {
  const forRent = await getAPI(`${baseURL}/properties/list?locationExternalIDs=5002,6020&purpose=for-rent`)
  const forSale = await getAPI(`${baseURL}/properties/list?locationExternalIDs=5002,6020&purpose=for-sale`)
  return {
    props: {
      forRent: forRent.hits,
      forSale: forSale.hits
    }
  }
}