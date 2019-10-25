import React from 'react'
import Modal from 'react-modal'
import './EditModal.css'

Modal.setAppElement(document.getElementById('root'));

const EditModal = (props) => (
  <Modal
    className='modal'
    isOpen={!!props.debtUnderEdition}
    onRequestClose={props.handleClearDebtUnderEdition}
    contentLabel="Editar produto"
  >
    <h3>Editar Produto</h3>
    <form onSubmit={props.handleSaveChanges}>
      <input
        type="text"
        name='customerName'
        placeholder='Descrição'
        defaultValue={props.debtUnderEdition ? props.debtUnderEdition.name : ""}
        disabled
      >
      </input>
      { /* <Dropdown customers={props.customers} inputName="customerName" /> */}
      <input
        type="text"
        name='description'
        placeholder='Descrição'
        defaultValue={props.debtUnderEdition ? props.debtUnderEdition.description : ""}
      >
      </input>
      <br />
      <input
        type="number"
        name='value'
        placeholder='Valor'
        step="any"
        defaultValue={props.debtUnderEdition ? props.debtUnderEdition.value : ""}
        required
      >
      </input>
      <div className="modal-submit-buttons">
        <input className="save-changes-button" type="submit" value="OK"></input>
        <button className="cancel-changes-button" onClick={props.handleClearDebtUnderEdition}>Cancelar</button>
      </div>
    </form>
  </Modal>
)

export default EditModal