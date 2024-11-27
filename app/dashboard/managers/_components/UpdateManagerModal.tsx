"use client"
import {Modal, ModalContent, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { LuPen } from "react-icons/lu";

export default function UpdateManagerModal({children} : {children : React.ReactNode}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-rose-600 text-white font-bold">Actualizar <LuPen/></Button>
      <Modal className="bg-rose-500" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="w-full">
          {(onClose) => (
            <>
              <ModalBody>
                {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}