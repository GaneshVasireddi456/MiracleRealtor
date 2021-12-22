import React, { useEffect } from 'react'
import { useState } from 'react';
import { Card } from 'primereact/card';
import { Router, useRouter } from 'next/router'
import { baseURL, getAPI } from '../utils/Api';
import  Properties  from '../components/Properties';
import { filterData, getFilterValues } from '../utils/filterData';
import { Dropdown } from 'primereact/dropdown';
 
const Search = ({ data }) => {
    const [filters] = useState(filterData);
    const [filter, setfilter] = useState(false)
    const router = useRouter()
    const { purpose } = router.query
    console.log(purpose);
    const [allValues, setAllValues] = useState({
        purpose:'',
        rentFrequency:'',
        categoryExternalID:'',
        minPrice:'',
        maxPrice:'',
        areaMax:'',
        roomsMin:'',
        bathsMin:'',
        sort:'',
        locationExternalIDs:'',
     });
     useEffect(() => {
        router.push({
            pathname: '/Search',
            query: allValues
          })
         console.log(allValues);
         
     }, [allValues])
    return (
        <>
            <div className="p-d-flex p-jc-center" >
                <Card className="p-mt-2" title={<div onClick={() => { setfilter(!filter); }} className="p-d-flex p-jc-center" style={{ fontSize: '18px', color: '#4F46E5', cursor: 'pointer' }}>Search Property by Filters &nbsp;<i className="pi pi-filter" style={{ fontSize: '20px' }}></i></div>} style={{ width: '98%' }}>
                    {filter && <div className="p-grid p-fluid">
                        {filterData.map((element) => {
                            return (<div key={element.querylabel} className="p-col-12 p-lg-2 p-md-4 p-sm-6">                           
                            <Dropdown  showClear='true' name={element.querylabel} value={allValues[element.querylabel]} options={element.items} className="p-dropdown-sm" placeholder={element.placeholder} onChange={(e)=>{setAllValues({...allValues, [e.target.name]: e.value});console.log(e);}}/>
                            </div>
                            
                            )
                        }
                        )}
                    </div>}
                </Card>
            </div>
            <div className="p-d-flex p-jc-center" >
                <h2>Properties {purpose}</h2>
            </div>
            <Properties data={data}></Properties>
        </>
    )
}
export default Search
export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
    const data = await getAPI(`${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`)

    return {
        props: {
            data: data.hits,
        }
    }
}
