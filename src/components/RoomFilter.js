import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from './Title';

//get unique value
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter ({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        price,
        capacity,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    //get types, render option
    let types = getUnique(rooms, "type");
    types = ["all", ...types];
    types = types.map((type, index) => {
        return <option value={type} key={index} >{type}</option>
    });

    //get capacity
    let people = getUnique(rooms, "capacity");
    people = people.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms" /> 
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">Room type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                    {types}
                    </select>
                </div>
                {/* end select type */}
                {/*  capacity */}
                <div className="form-group">
                    <label htmlFor="capacity">Guest</label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                    {people}
                    </select>
                </div>
                {/* end capacity  */}
                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">Room Price: ${price}</label>
                    <input 
                        value={price}
                        id="price"
                        name="price"
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        className="form-control"
                        onChange={handleChange} />
                </div>
                {/* end room price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <input 
                        value={minSize}
                        id="size"
                        name="minSize"
                        type="number"
                        className="size-input"
                        onChange={handleChange} />
                    <input 
                        value={maxSize}
                        id="size"
                        name="maxSize"
                        type="number"
                        className="size-input"
                        onChange={handleChange} />
                </div>
                {/* end size  */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                            checked={breakfast}
                            id="breakfask"
                            name="breakfast"
                            type="checkbox"
                            onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            checked={pets}
                            id="breakfask"
                            name="pets"
                            type="checkbox"
                            onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end extras  */}
            </form>
        </section>
    )
} 