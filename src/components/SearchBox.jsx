import React from 'react'

const SearchBox = ({label,placeholder,value,handleSearch}) => {

  return (
    <div className='flex items-center gap-3 pl-4 flex-1'>
        <label className='text-lg font-semibold text-[#b7791f]'>
            {label}
        </label>
        <input type="text" 
        className='px-4 py-2 text-base border rounded-md transition border-[#b7791f] focus:ring focus:ring-dark focus:outline-none text-gray-800'
        placeholder={placeholder}
        value={value}
        onChange={(event) => handleSearch(event.target.value)}
        />
    </div>
  )
}

export default SearchBox