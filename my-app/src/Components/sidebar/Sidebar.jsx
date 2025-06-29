import React, { useState } from 'react';
import { TesselLogo, Switcher, SideButton, DownArrow } from '../LogoHandler';
import Services, { People } from './Services';
import { Book, Plus } from '../Icons';

export default function Sidebar() {
    const [visible, setVisible] = useState(true);

    return (

        <div className="sidebar">
            <div>
                <div className="aa">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <TesselLogo />
                        <span className="ab">Tessell</span>
                    </div>
                    <div className="ac">
                        <SideButton className='sm' />
                    </div>
                </div>


                <div className='ad' style={{ marginTop: "11px", marginBottom: "8px" }}>
                    <Switcher />
                    <span className='ae'>Apps</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div className='af' style={{ width: "187px" }} onClick={() => { setVisible(!visible) }}>
                        <span className='ag'>DB Services</span>
                        <DownArrow />
                    </div>
                    {visible ? <Services /> : <></>}
                </div>
            </div>
            <div className='aj'>

                <People Comp={Plus} mess={'Invite people'} />


                <People Comp={Plus} mess={'Invite people'} />


                <People Comp={Book} mess={'Help & Support'} />

            </div>

        </div>


    );
}