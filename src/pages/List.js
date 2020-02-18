import React from 'react';
import TableBill from '../templates/TableBill'
import './List.css'


export default function List() {
    return (
        <div>
            <header className='page-header'>
                <h2>Boletos <small>Listagem</small></h2>
            </header>
            <TableBill></TableBill>
        </div>
    )
}