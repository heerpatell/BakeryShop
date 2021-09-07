import React from 'react'
import {GoSearch} from 'react-icons/go'
import {BiMap} from 'react-icons/bi'
import './search.css'

var searchBaker = {
    background:"#FDD2BF",
    width:"23rem",
    height:"3.5rem",
    borderTopRightRadius:"6px",
    borderBottomRightRadius:"6px",
    border:"none",
    paddingLeft:"1rem",
    borderLeft:"3px solid #012443",
    color:"#B61919",
}
var searchPlace={
    background:"#FDD2BF",
    paddingLeft:"0.5rem",
    color:"#B61919",
    border:"none",
    width:"9rem",
    height:"3.5rem",
}
var searchIcon={
    background:"#FDD2BF",
    height:"3.5rem",
    width:"50px",
    borderRadius:"6px",
    paddingLeft:"0.8rem",
    paddingTop:"0.8rem",
    color:"#012443"
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
    paddingLeft:"5px",
    height:"3.5rem",
    background:"#FDD2BF",
    color:"#012443"
}

function Search() {
    return (
    <>
    <div style={homeSearch}>
        <label style={searchIcon}><GoSearch size={25}/></label>
        <BiMap size={40} style={placeStyle}/><input type="text" placeholder="Search for place" style={searchPlace}></input>
        <input type="text" placeholder="Search for bakery item or bakers" style={searchBaker}></input>
    </div>
    </>
    )
}

export default Search
