import React from 'react'
import moment from 'moment'
import './Table.css'

const Table = (props) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Data</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          props.debts.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.value}</td>
              <td>{moment().format('DD/MM/YYYY')}</td>
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