import React from 'react'
import {GoSearch} from 'react-icons/go'
import {BiMap} from 'react-icons/bi'
import './search.css'

var searchBaker = {
    width:"23rem",
    height:"3rem",
    borderTopRightRadius:"6px",
    borderBottomRightRadius:"6px",
    border:"none",
    borderLeft:"3px solid black"
}
var searchPlace={
    border:"none",
    width:"9rem",
    height:"3rem",
}
var searchIcon={
    background:"white",
    height:"3rem",
    width:"50px",
    borderRadius:"6px",
    paddingLeft:"0.8rem",
    paddingTop:"0.5rem"
} 
var homeSearch={
    display:"flex",
    justifyContent:"center",
    marginTop:"2rem"
}
var placeStyle={
    borderTopLeftRadius:"6px",
    borderBottomLeftRadius:"6px",
    marginLeft:"1rem",
    height:"3rem",
    background:"white"
}

function Search() {
    return (
    <>
    <div style={homeSearch}>
        <label style={searchIcon}><GoSearch size={22} color={"black"}/></label>
        <BiMap size={25} style={placeStyle}/><input type="text" placeholder="Search for place" style={searchPlace}></input>
        <input type="text" placeholder="Search for bakery item or bakers" style={searchBaker}></input>
    </div>
    </>
    )
}

export default Search
