import React from 'react';
import RoomList from './RoomList';
import RoomFilter from './RoomFilter';
import {withRoomConsumer} from '../context';
import Loading from '../components/Loading';

function RoomContainer({context}) {
    const { loading, sortedRooms, rooms } = context;
    if(loading) {
        return <Loading /> 
    }
    return (  
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)

// import React from 'react';
// import RoomList from './RoomList';
// import RoomFilter from './RoomFilter';
// import {RoomConsumer} from '../context';
// import Loading from '../components/Loading';

// export default function RoomContainer() {
//     return (
//     <RoomConsumer>
//         {value => {
//             const { loading, sortedRooms, rooms } = value;
//             console.log(value)
//             if(loading) {
//                 return <Loading /> 
//             }
//             return (
//                 <div>
//                     <RoomFilter rooms={rooms} />
//                     <RoomList rooms={sortedRooms} />
//                 </div>
//             )
//         }}
//     </RoomConsumer>
//     )
// }