import React, { useState, useEffect } from 'react'
import './List.css'

import Api from '../services/api'

export default function List() {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        async function listBills() {
            const response = await Api.get("?sort=-createdAt");
            const data = await response.data;
    
            setBills(data)
        }
        listBills()
    }, [bills]);

      return(
        <div>
            <header className='page-header'>
                <h2>Boletos <small>Listagem</small></h2>
            </header>
            
            <div className="limiter">
                <div className="container-table100">
                    <div className="wrap-table100">
                        <div className="table100">
                            <table>
                                <thead>
                                    <tr className="table100-head">
                                        <th className="column1">Fornecedor</th>
                                        <th className="column2">Vencimento</th>
                                        <th className="column3">Valor</th>
                                        <th className="column4">Status</th>
                                        <th className="column6">Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {bills.map(bill => (
                                    <tr key={bill._id}>
                                        <td className="column1">{bill.provider_name}</td>
                                        <td className="column2">{bill.expiration_date}</td>
                                        <td className="column3">R${bill.amount}</td>
                                        <td className="column4">Pago</td>
                                        <td className="column6"><a href={`https://megahack2020.herokuapp.com/api/download/${bill._id}`} target="_blank" rel="noopener noreferrer" >Baixar PDF</a></td>
                                    </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

function dataForm(){
    var data = new Date(),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        ano  = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}