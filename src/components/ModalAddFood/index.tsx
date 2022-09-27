import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import Input from '../Input';
import Modal from '../Modal';
import { Form } from './styles';

interface ModalAddFoodProps{
  formRef:React.RefObject<FormHandles>;
  isOpen:boolean;
  setIsOpen:()=>void;
}
function ModalAddFood({formRef, isOpen, setIsOpen}:ModalAddFoodProps){
  
  formRef = createRef();//TODO
  async function handleSubmit(data){
    const { setIsOpen, handleAddFood } = this.props;

    handleAddFood(data);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input 
            name="image" 
            placeholder="Cole o link aqui"
            icon={null}
            key={null}
          />

          <Input 
            name="name" 
            placeholder="Ex: Moda Italiana" 
            icon={null}
            key={null}
          />
          <Input 
            name="price" 
            placeholder="Ex: 19.90" 
            icon={null}
            key={null}
          />

          <Input 
            name="description" 
            placeholder="Descrição" 
            icon={null}
            key={null}
          />

          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

export default ModalAddFood;
