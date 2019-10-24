import React from 'react'
import Modal from 'react-modal'
import Dropdown from '../components/Dropdown'

Modal.setAppElement(document.getElementById('root'));

const EditModal = (props) => (
  <Modal
    isOpen={!!props.debtUnderEdition}
    onRequestClose={props.handleClearDebtUnderEdition}
    contentLabel="Editar produto"
  >
    <h3>Editar Produto</h3>
    <form onSubmit={props.handleSaveChanges}>
      <Dropdown customers={props.customers} inputName="customerName" />
      <input type="text" name='description' placeholder="Descrição"></input>
      <br />
      <input type="number" name='value' placeholder="Valor" step="any" required></input>
      <button>OK</button>
    </form>
    <button onClick={props.handleClearDebtUnderEdition}>Cancelar</button>
  </Modal>
)

export default EditModal