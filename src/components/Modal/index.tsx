import React, { ReactNode } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactModal from 'react-modal';
// import { boolean } from 'yup';

interface ModalProps{
  isOpen:boolean;
  children:ReactNode;
  setIsOpen:()=>void;
}
function Modal({children, isOpen, setIsOpen}:ModalProps){
    const [modalStatus, setModalStatus] = useState(isOpen);
    const [prevIsOpen, setPrevIsOpen] = useState(false);

  // componentDidUpdate(prevProps) {
    
    useEffect(()=>{
      if (prevIsOpen !== isOpen) {
      
        setPrevIsOpen(isOpen);
      }
    },[isOpen, prevIsOpen]);
  // }

  useEffect(()=>{//TODO
    setModalStatus(isOpen);
  },[isOpen]);

    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );
};

export default Modal;
