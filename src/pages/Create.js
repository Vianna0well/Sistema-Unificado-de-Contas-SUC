import React, { useState } from 'react';
import './Create.css'
import Api from '../services/api'

export default function Create({ history }) {
    const [bills, setBills] = useState({
        amount: "",
        expiration_date: "",
        description: "",
        customer_person_name: "",
        provider_name: "",
        customer_zipcode: 0,
        customer_address: "",
        customer_city: "",
        customer_state: "",
        customer_neighborhood: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        Api.post('', bills)
          .then(function (response) {
              console.log(response)
          })
          .catch(function (error) {
              console.log(error)
          })
        history.push('/')
    }

    const handleChange = (event) => {
        setBills({...bills, [event.target.name]: event.target.value})
    }

    return (
        <div>
        <div className="wrapper wrapper--w980">
            <div>
                <header className='page-header'>
                    <h2>Boletos <small>Criação</small></h2>
                </header>
                
                <div className="card-body">
                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="name">Valor</div>
                            <div className="value">
                                <input className="input--style-6" type="number" name="amount" value={bills.amount} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="name">Data de vencimento</div>
                            <div className="value">
                                <input className="input--style-6" type="date" name="expiration_date" value={bills.expiration_date} onChange={handleChange}  />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="name">Descrição</div>
                            <div className="value">
                                <div className="input-group">
                                    <textarea className="textarea--style-6" name="description" value={bills.description} onChange={handleChange} ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="name">Recebedor</div>
                            <div className="value">
                                <input className="input--style-6" type="text" name="customer_person_name" value={bills.customer_person_name} onChange={handleChange}  />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="name">Fornecedor</div>
                            <div className="value">
                                <input className="input--style-6" type="text" name="provider_name" value={bills.provider_name} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="name">Endereço de cobrança</div>
                            <div className="value">
                                <input className="input--style-6" type="text" placeholder='Endereço' name="customer_address" value={bills.customer_address} onChange={handleChange} />
                                <input className="input--style-6" type="number" placeholder='CEP' name="customer_zipcode" value={bills.customer_zipcode} onChange={handleChange} />
                                <input className="input--style-6" type="text" placeholder='Estado' name="customer_state" value={bills.customer_state} onChange={handleChange} />
                                <input className="input--style-6" type="text" placeholder='Cidade' name="customer_city" value={bills.customer_city} onChange={handleChange} />
                                <input className="input--style-6" type="text" placeholder='Bairro' name="customer_neighborhood" value={bills.customer_neighborhood} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="card-Footer">
                            <button type="submit" className="btn btn-success">Gerar Boleto</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

