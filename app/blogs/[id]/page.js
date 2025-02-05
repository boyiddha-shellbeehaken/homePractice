"use client"

import React from 'react'

const page = ({params}) => {
    const { id } = React.use(params)
  return (
    <div>
      <h2>blog details id is:{id} </h2>
    </div>
  )
}

export default page
