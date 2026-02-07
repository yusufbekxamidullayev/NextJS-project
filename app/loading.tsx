import React from 'react'
import { ClipLoader } from 'react-spinners'

const loading = () => {
  return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-8">SHOP.CO</h1>
          <ClipLoader size={50} color="#000000" />
      </div>
  )
}

export default loading