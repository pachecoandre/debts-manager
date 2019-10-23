import React from 'react'
import Modal from 'react-modal'

const EditModal = (props) => (
  <Modal
    isOpen={!!props.debtUnderEdition}
    onRequestClose={props.handleClearDebtUnderEdition}
    contentLabel="Editar produto"
    closeTimeoutMS={200}
  >
    <h3>Editar Produto</h3>
    <button onClick={props.handleClearDebtUnderEdition}>OK</button>
  </Modal>
)

export default EditModal