import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import {MdContentCopy, MdOutlineFoodBank, MdOutlinePriceChange, MdOutlineDescription} from 'react-icons/md';

import { FormHandles } from '@unform/core';
import Input from '../Input';
import Modal from '../Modal';
import { Form } from './styles';
import { IFood } from '../Food';

interface ModalAddFoodProps{

  isOpen:boolean;
  setIsOpen:()=>void;
  handleAddFood:(food:IFood)=>void;
}
function ModalAddFood({isOpen, setIsOpen, handleAddFood}:ModalAddFoodProps){
  
  const formRef = createRef<FormHandles>();//TODO
  async function handleSubmit(data:IFood){
    handleAddFood(data);
    setIsOpen();
  };

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Novo Prato</h1>
          <Input 
            name="image" 
            placeholder="Cole aqui o link da imagem"
            icon={MdContentCopy}
            key={1}
          />

          <Input 
            name="name" 
            placeholder="Ex: Moda Italiana" 
            icon={MdOutlineFoodBank}
            key={2}
          />
          <Input 
            name="price" 
            placeholder="Ex: 19.90" 
            icon={MdOutlinePriceChange}
            key={3}
          />

          <Input 
            name="description" 
            placeholder="Descrição" 
            icon={MdOutlineDescription}
            key={4}
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
