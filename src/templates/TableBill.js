import React from 'react';

export default function TableBill() {
    return (
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
								<tr>
									<td className="column1">Shawee</td>
									<td className="column2">20/02/2020</td>
									<td className="column3">R$20,00</td>
									<td className="column4">Pago</td>
									<td className="column6">Baixar PDF</td>
								</tr>
								<tr>
									<td className="column1">Shawee</td>
									<td className="column2">20/02/2020</td>
									<td className="column3">R$20,00</td>
									<td className="column4">Pago</td>
									<td className="column6">Baixar PDF</td>
								</tr>
                                <tr>
									<td className="column1">Shawee</td>
									<td className="column2">20/02/2020</td>
									<td className="column3">R$20,00</td>
									<td className="column4">Pago</td>
									<td className="column6">Baixar PDF</td>
								</tr>
                                
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
)}