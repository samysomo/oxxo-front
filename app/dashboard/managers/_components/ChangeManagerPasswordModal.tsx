"use client"
import {Modal, ModalContent, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import { LuLock } from "react-icons/lu";

export default function ChangeManagerPasswordModal({children} : {children : React.ReactNode}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-rose-600 text-white font-bold">Cambiar <LuLock/></Button>
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