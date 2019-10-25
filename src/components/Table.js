import React from 'react'
import moment from 'moment'
import './Table.css'

const Table = (props) => (
  <div className="debts-table">
    <table align="center">
      <thead>
        <tr>
          <th>Cliente</th>
          <th className="desc-column">Descrição</th>
          <th className="num-column">Valor</th>
          <th className="data-column">Data</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          props.debts.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td className="desc-column">{item.description}</td>
              <td className="num-column">{item.value}</td>
              <td className="data-column">{moment().format('DD/MM/YYYY')}</td>
              <td>
                <button className='remove-button' onClick={(e) => {
                  props.handleDeleteDebt(item.id)
                }}
                >
                  remover
                  </button>
                <button className='edit-button' onClick={(e) => {
                  props.handleEditDebt(item)
                }}
                >
                  editar
                  </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

export default Table