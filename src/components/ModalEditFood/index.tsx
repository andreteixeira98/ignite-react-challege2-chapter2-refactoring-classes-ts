import React, { createRef} from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { IFood } from '../Food';
import { FormHandles } from '@unform/core';

interface ModalEditFoodProps{
  isOpen:boolean;
  setIsOpen:()=>void;
  editingFood:IFood;
  handleUpdateFood:(food:IFood)=>void;
 
}
function ModalEditFood ({ editingFood, isOpen, setIsOpen, handleUpdateFood}:ModalEditFoodProps) {
  const formRef = createRef<FormHandles>();

  async function handleSubmit(data:IFood){
    handleUpdateFood(data);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input 
            name="image" 
            placeholder="Cole o link aqui" 
            icon={null}
          />

          <Input 
            name="name" 
            placeholder="Ex: Moda Italiana"
            icon={null}
          />
          <Input 
            name="price" 
            placeholder="Ex: 19.90" 
            icon={null}
          />

          <Input 
            name="description" 
            placeholder="Descrição" 
            icon={null}
          />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

export default ModalEditFood;
