import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <div style={{position: 'relative' , fontSize: '20px', color: 'black'}}>
        <strong>Pronađite željeni podatak o vrtiću:{' '}</strong>
        <input
            value={filter || ''}
            onChange={(e) => setFilter(e.target.value)}
        />
    </div>
  )
}
