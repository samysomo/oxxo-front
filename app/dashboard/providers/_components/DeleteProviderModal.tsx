"use client"
import {Modal, ModalContent, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { LuTrash2 } from "react-icons/lu";

export default function DeleteProviderModal({children} : {children : React.ReactNode}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-rose-700 text-white font-bold">Eliminar <LuTrash2/></Button>
      <Modal className="bg-rose-500" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="w-full">
          {(onClose) => (
            <>
              <ModalBody>
                {children}
                <Button onPress={onClose}>Cancelar</Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}