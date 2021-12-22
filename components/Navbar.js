import React from 'react'
import Router from 'next/router';
import { Card } from 'primereact/card';
import '../styles/Home.module.css'
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';



const Navbar = () => {

    let items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', command: () => { Router.push('/')}},
        {label: 'Search', icon: 'pi pi-fw pi-search',command: () => {Router.push('/Search?purpose=for-rent')}},
        {label: 'Rent Property', icon: 'pi pi-fw pi-credit-card',command: () => {Router.push('/Search?purpose=for-rent')}},
        {label: 'Buy Property', icon: 'pi pi-fw pi-building',command: () => {Router.push('/Search?purpose=for-sale')}}
    ];
    let menu=false;
    const header = <div className="p-d-flex p-jc-between p-ai-center">
                <div style={{fontSize:'35px',color:'#4F46E5'}}>Miracle Realtor</div>
                <div>
                <Menu model={items} popup ref={el => menu = el} id="popup_menu" />
                    <Button  icon="pi pi-bars" onClick={(event) => menu.toggle(event)} aria-controls="popup_menu" aria-haspopup />
                </div>
            </div>;
    return (
        <div style={{ width: '98%' }}>  
            <Card title={header} className='p-shadow-2'>
            </Card>
        </div>
    )
}
export default Navbar
