import React, { useEffect } from 'react'
import { useState } from 'react';
import { Card } from 'primereact/card';
import { useRouter } from 'next/router'
import { baseURL, getAPI } from '../utils/Api';
import  Properties  from '../components/Properties';
import { filterData} from '../utils/filterData';
import { Dropdown } from 'primereact/dropdown';
import { Paginator } from 'primereact/paginator';
 
const Search = ({ data }) => {
    const template2 = {
        layout: 'CurrentPageReport PrevPageLink NextPageLink',
        'CurrentPageReport': (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            )
        }
    };
    const [state, setstate] = useState(0)
    const [filter, setfilter] = useState(false)
    const router = useRouter()
    const { purpose } = router.query
    console.log(data);
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
   const  onBasicPageChange=(e)=>{
       console.log(e,allValues);
       setstate(eval(e.page*25))
       allValues['page'] = e.page;
    router.push({
        pathname: '/Search',
        query: allValues
      })
   }
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
            <Properties data={data.hits}></Properties>
                 <Paginator template={template2} first={state} rows={data.hits.length} totalRecords={data.nbHits} onPageChange={onBasicPageChange} className="p-jc-end p-my-3"></Paginator>
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
    const page=query.page||0;
    const data = await getAPI(`${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&page=${page}`)

    return {
        props: {
            data: data,
        }
    }
}
