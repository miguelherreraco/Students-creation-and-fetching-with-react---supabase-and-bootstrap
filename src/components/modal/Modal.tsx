import { Button, Modal, ModalBody } from "react-bootstrap";
import { ReactNode } from "react";

function ModalApp({children, show: modalShow, setShow: setModalShow}:{children: ReactNode, show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>>}){
    return (
        <>
            <Modal show = {modalShow}>
                <ModalBody>
                    {children}
                </ModalBody>
            <Button className="mx-3 my-3" variant="danger" onClick= {()=>setModalShow(false)}>Close</Button>
            </Modal>
        </>
    )

}

export default ModalApp;