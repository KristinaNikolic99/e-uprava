import React, { useMemo } from 'react';
import './Lokacije.css';
import podaci from '../../data/Predskolsko_obrazovanje.json';
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy } from 'react-table';
import { ColumnFilter } from './ColumnFilter';
import { GlobalFilter } from './GlobalFilter';

export const Lokacije = () => {

    //console.log(podaci.PodaciLokacije);
    const data = React.useMemo(() => podaci.PodaciLokacije, []);
    const columns = React.useMemo(() => [
        {
            Header: "Naziv Ustanove",
            accessor: "nazivUstanove",
            Filter: ColumnFilter,
        },
        {
            Header: "Naziv Objekta",
            accessor: "nazivObjekta",
            Filter: ColumnFilter,
        },
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
            Header: "Mesto",
            accessor: "mesto",
            Filter: ColumnFilter,
        },
        {
            Header: "Okrug",
            accessor: "okrug",
            Filter: ColumnFilter,
        },
        {
            Header: "Opština",
            accessor: "opstina",
            Filter: ColumnFilter,
        },
        {
            Header: "Ulica",
            accessor: "ulica",
            Filter: ColumnFilter,
        },
        {
            Header: "Broj Soba",
            accessor: "brojSobaZaDecu",
            Filter: ColumnFilter,
        },
        {
            Header: "Broj Kuhinja",
            accessor: "brojKuhinja",
            Filter: ColumnFilter,
        },
    ], []);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
    page, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, state,
    setGlobalFilter, gotoPage, pageCount, setPageSize} = 
        useTable({columns, data, initialState: {pageIndex : 0}}, useFilters, useGlobalFilter, useSortBy, usePagination);

    const {globalFilter, pageIndex, pageSize} = state;
    
  return (
    <div className='main'>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <div className='container-lokacije'>
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
        </div>
        <div className="pagination">
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
                    [10, 25, 50].map(pageSize => (
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
  )
}
