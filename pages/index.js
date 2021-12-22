
import React from 'react'
import Banner from '../components/Banner'
import { getAPI, baseURL } from '../utils/Api'

export default function Home({ forRent, forSale }) {
  return (
    <div >
      <Banner address='/../public/homeforRent.jpg'
        purpose='Rent a Home'
        purposeforQuery='for-rent'
        des1="Rental homes for everyone"
        des2="Explore Apratments, Villas,Homes and more "
        data={forRent}></Banner>
      {/* <Banner address='/../public/homeforSale.jpg'
        purpose='Buy a Home'
        purposeforQuery='for-sale'
        des1="Find buy & Own your dream home"
        des2="Explore Apratments, Villas,Homes and more "
        data={forSale}></Banner> */}
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