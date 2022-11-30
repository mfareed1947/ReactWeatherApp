import React, { useEffect, useState } from 'react'

const InfoData = () => {
    const [search, setSearch] = useState('Karachi')
    const [city, setCity] = useState(null)

    useEffect(() => {

        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c5889a14e58d0fb58dd1a049fdb8325c`
            const response = await fetch(url)
            const resJson = await response.json()
            // console.log(resJson.main)
            setCity(resJson.main)
        }

        fetchApi()
    }, [search])



    return (
        <div className='conatiner'>
            <input type="search" placeholder='Enter a City Name' onChange={(e) => { setSearch(e.target.value) }} />
            {!city ? (<p>Data not found </p>
            ) : (
                <div style={{ width: "500px", height: '400px', backgroundColor: 'lightblue' }}>
                    <h2>{search}</h2>
                    <h3>{city.temp}</h3>
                    <p>temp-max{city.temp_max}</p>
                    <p>tem-min{city.temp_min}</p>
                </div>
            )
            }
        </div>
    )
}

export default InfoData
