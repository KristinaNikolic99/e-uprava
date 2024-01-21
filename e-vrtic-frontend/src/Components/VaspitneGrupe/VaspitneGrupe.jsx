import React from 'react';
import podaci_vg from '../../data/VaspitneGrupe.json';
import { ColumnFilter } from '../Lokacije/ColumnFilter';
import { GlobalFilter } from '../Lokacije/GlobalFilter';
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy } from 'react-table';
import "./VaspitneGrupe.css"

export const VaspitneGrupe = () => {
    console.log(podaci_vg.VaspitneGrupe);
    const data = React.useMemo(() => podaci_vg.VaspitneGrupe, []);
    const columns = React.useMemo(() => [
        {
            Header: "Naziv Lokacije",
            accessor: "nazivLokacije",
            Filter: ColumnFilter,
        },
        {
            Header: "Vrsta Ustanove",
            accessor: "vrstaOsnivacaPoUstanovi",
            Filter: ColumnFilter,
        },
        {
            Header: "Starosna Struktura Grupe",
            accessor: "starosnaStrukturaGrupe",
            Filter: ColumnFilter,
        },
        
    ], []);


    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
        page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, state,
        setGlobalFilter, gotoPage, pageCount, setPageSize} = 
            useTable({columns, data, initialState: {pageIndex : 0}}, useFilters, useGlobalFilter, useSortBy, usePagination);
    
        const {globalFilter, pageIndex, pageSize} = state;

  return (
    <div className='main-vg'>
        <div className='container-vg'>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                           <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            ))}
                           </tr> 
                        )
                    })}
                </tbody>
            </table>
            <div className="pagination-vg">
            <p>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </p>
            <p style={{marginTop: '5px'}}>
                Go to page: {' '}
                <input type='number' defaultValue={pageIndex + 1}
                onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                }}
                style={{width: '50px',display: 'inline-block', height: '26px', fontSize: '20px'}}/>
            </p>
            <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className='show'>
                {
                    [100, 200, 500].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))
                }
            </select>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className='first'>
                {'<<'}
            </button>
            <button className="previous" onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button className="next" onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} className='last'>
                {'>>'}
            </button>
        </div>
        </div>
        
    </div>
  )
}
