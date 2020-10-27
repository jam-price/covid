import React from 'react'

const SearchBar = (props) => {

    const handleCountryChange = (e) => {
        props.setCountry(e.target.value)
    }

    const handleAreaTypeChange = (e) => {
        props.setAreaType(e.target.value)
    }

    const handleRegionChange = (e) => {
        props.setRegion(e.target.value)
    }

    const handleLocalAreaChange = (e) => {
        props.setLocalArea(e.target.value)
    }

    const handleLocalAreaChangeKey = (e) => {
        if(e.charCode = 13){
            console.log(e.charCode)
        }   
    }

    let secondForm;
        if(props.areaType === 'nation') {
            secondForm = (
            <form >
                <select onChange={handleCountryChange} value={props.country}>
                    <option value="england">England</option>
                    <option value="northern ireland">N. Ireland</option>
                    <option value="scotland">Scotland</option>
                    <option value="wales">Wales</option>
                </select>  
            </form> 
            )
    } else if(props.areaType === 'region') {
     secondForm = (
        <form >
            <select onChange={handleRegionChange} value={props.region}>
                <option value="london">London</option>
                <option value="north east">North East</option>
                <option value="north west">North West</option>
                <option value="south east">South East</option>
                <option value="south west">South West</option>
                <option value="east of england">East of England</option>
                <option value="east midlands">East Midlands</option>
                <option value="west midlands">West Midlands</option>
                <option value="yorkshire and humber">Yorkshire and Humber</option>
            </select>  
        </form>
        )
    } else {
        secondForm = (
            <input type="text" onChange={handleLocalAreaChange} onKeyPress={handleLocalAreaChangeKey} value={props.localArea}/>
        )
    }

    return (
        <div className="search-form">
            <form>
                <select onChange={handleAreaTypeChange} value={props.areaType}>
                    <option value="nation">Country</option>
                    <option value="region">Region</option>
                    <option value="ltla">Local Area</option>
                </select>
            </form>
            {secondForm}
        </div>
        
    )
}

export default SearchBar