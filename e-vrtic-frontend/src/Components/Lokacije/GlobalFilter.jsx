import React from 'react'

export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <div style={{position: 'relative' ,bottom: '390px', left: '240px', fontSize: '20px', color: 'black'}}>
        <strong>Pronađite željeni vrtić ili mesto:{' '}</strong>
        <input
            value={filter || ''}
            onChange={(e) => setFilter(e.target.value)}
        />
    </div>
  )
}
