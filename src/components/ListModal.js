import React from 'react'
import Modal from 'react-modal'
import './Modal.css'
import './Table.css'

Modal.setAppElement(document.getElementById('root'));

const ListModal = (props) => {

   const filterDebts = (debts) => {
      return props.debts.filter((item) => item.name === props.listingSomeonesDebts)
   }

   return (
      <Modal
         className='modal'
         isOpen={!!props.listingSomeonesDebts}
         onRequestClose={props.handleClearListingSomeonesDebts}
         contentLabel="Dívidas do Cliente"
      >
         <h3>Dívidas de {props.listingSomeonesDebts}</h3>
         <table className="modal-table" align="center">
            <thead>
               <tr>
                  <th>Dívida</th>
                  <th>Valor</th>
               </tr>
            </thead>
            <tbody>
               {
                  filterDebts().map((element, index) => (
                     <tr key={index}>
                        <td>{element.description}</td>
                        <td>{element.value}</td>
                     </tr>
                  ))
               }
            </tbody>
         </table>
         <br />
         <button className="save-changes-button" onClick={props.handleClearListingSomeonesDebts}>Ok</button>
      </Modal>
   )
}

export default ListModal