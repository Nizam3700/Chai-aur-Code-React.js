import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Nizam3700')
        .then(response => response.json())
        .then(data => {
            console.log(Date);
            setdata(data);
        })
    }, [])
  return (
    <div className=' bg-slate-700 text-center 
    text-3xl rounded-xl p-5'>Github Follwers : {data.followers} 
    <img className=' rounded-full' src={data.avatar_url} alt="Git_picture" width={300} />
    </div>
  )
}

export default Github