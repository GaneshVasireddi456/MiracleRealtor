import  Properties  from "../components/Properties";
import Router from 'next/router';
import Image from 'next/image'
import { Button } from 'primereact/button';
const Banner = ({ address, purpose, des1, des2, data,purposeforQuery}) => {
    return (
      <>
        <div className="p-d-flex p-jc-center p-m-4" >
          <Image src={address} height={'300px'} width={'600px'} />
          <div className=" p-m-4" style={{ width: '250px' }}>
            <h1>{purpose}</h1>
            <h3>{des1}</h3>
            <p>{des2}</p>
          </div>
        </div>  
        <Properties data={data.hits}></Properties>
        <div className="p-d-flex p-jc-end p-pr-5 p-pt-0" >
        <Button label={`Explore More for ${purpose}`} className="p-button-sm" icon="pi pi-building" onClick={()=>{Router.push(`/Search?purpose=${purposeforQuery}`)}}/>
        </div>
      </>
    )
  }
  export default Banner