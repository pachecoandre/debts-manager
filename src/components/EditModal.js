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
    <form>
      <Dropdown customers={props.customers} inputName="customerName" />
    </form>
    <button onClick={props.handleClearDebtUnderEdition}>OK</button>
  </Modal>
)

export default EditModal