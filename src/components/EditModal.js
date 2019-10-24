import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('root'));

const EditModal = (props) => (
  <Modal
    isOpen={!!props.debtUnderEdition}
    onRequestClose={props.handleClearDebtUnderEdition}
    contentLabel="Editar produto"
  >
    <h3>Editar Produto</h3>
    <form onSubmit={props.handleSaveChanges}>
      Cliente: <span> </span>
      { /* <Dropdown customers={props.customers} inputName="customerName" /> */ 
        props.debtUnderEdition ? props.debtUnderEdition.name : ""
      }
      <br />
      <input
        type="text"
        name='description'
        defaultValue={props.debtUnderEdition ? props.debtUnderEdition.description : ""}
      >
      </input>
      <br />
      <input
        type="number"
        name='value'
        step="any"
        defaultValue={props.debtUnderEdition ? props.debtUnderEdition.value : ""}
        required
      >
      </input>
      <button>OK</button>
    </form>
    <button onClick={props.handleClearDebtUnderEdition}>Cancelar</button>
  </Modal>
)

export default EditModal