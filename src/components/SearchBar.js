import React from 'react'

const SearchBar = (props) => {

    const handleChange = (e) => {
        props.setCountry(e.target.value)
    }

    return (
        <form className="search-form">
            <select onChange={handleChange} value={props.country}>
                <option value="england">England</option>
                <option value="northern ireland">N. Ireland</option>
                <option value="scotland">Scotland</option>
                <option value="wales">Wales</option>
            </select>  
        </form>
    )
}

export default SearchBar