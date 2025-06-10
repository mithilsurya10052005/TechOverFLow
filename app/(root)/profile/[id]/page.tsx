import React from 'react'

const page = async ({params}:{params:{id:string}}) => {
    const {id} =await params;
  return (
    
    <div>
        <h1>Profile</h1>
        <p>{id}</p>
    </div>
  )
}

export default page
