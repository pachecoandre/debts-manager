import React from 'react'

const Table = (props) => (
  <div>
    <table className="center">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Descrição</th>
          <th>Valor</th>
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
              <td>
                <button onClick={(e) => {
                  props.handleDeleteDebt(item.id)
                }}
                >
                  remover
                </button>
                <button onClick={(e) => {
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