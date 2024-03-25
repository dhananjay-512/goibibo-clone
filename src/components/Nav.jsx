import React from 'react'
import NavItem from './NavItem'
import Flight from '../assests/Flight'
import Train from '../assests/Train'
import Hotel from '../assests/Hotel'


function Nav() {
    return (
        <nav style={{
            display: 'flex',
            gap: "1%",
        }}>
            <div style={{
                display: "flex",
                padding: "1%"
            }}>
                <h1 style={{
                    color: "red",
                }}>go</h1><h1 style={{
                    color: "Blue",
                }}>ibibo</h1></div>


            <div style={{
                display: 'flex',
                gap: "1%",
                justifyContent: 'end',
                width: "100%",
                color: "#FF7B54",
                fontSize: "1.5em",
                font: "bold",
            }} >
                <NavItem name={"Flights"} icon={<Flight />} />
                <NavItem name={"Train"} icon={<Train />} />
                <NavItem name={"Hotels"} icon={<Hotel />} />
                <NavItem name={"Cab"} />
                <NavItem name={"Bus"} />

            </div>
        </nav>
    )
}

export default Nav
