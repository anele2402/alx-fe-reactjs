import React from "react";
const labelStyle = {
    color: "white",
    fontSize:'18px',
    marginRight:'11px'
}
const inputStyle = {
    border: '2px',
    borderRadius:'5px',
    padding: "6px",
    backgroundColor: '#8f0872ff',
    color: 'black'
}
function Search (){

    return (
        <form>
            <label style={labelStyle}>UserName</label>
            <input style={inputStyle} type="text" id="username"></input>
        </form>

    );
}

export default Search ;