import React from 'react';
import Room from './Room';

const RoomList = ({rooms}) => {
    if(rooms.length === 0) {
        return (<div className="emty-search">
                <h3>Unfotunately no room mathched your search</h3>
            </div>)
    }
    console.log(rooms)
    return <section className="roomslist">
        <div className="roomslist-center">
            {rooms.map(item => {
                return <Room key={item.id} room={item} />
            })}
        </div>
    </section>
} 

export default RoomList;