import { Modal, useModal, Button, Text } from "@nextui-org/react";
import {BindingsChangeTarget} from "@nextui-org/react/types/use-input/use-input";
import {Dispatch, SetStateAction} from "react";
import {Chip, Divider} from "@mui/material";
type Bindings= {
    open: boolean
    onClose: ()=>void
}

type Visible =  Dispatch<SetStateAction<boolean>>

type Props = {
    setVisible : Visible
    bindings: Bindings

}
export const AssignModal= ({setVisible, bindings}:Props)=> {


    return (
        <div>
            <Modal

                style={{
                    maxHeight: "600px",
                }}
                width="600px"
                aria-labelledby="Accept Patient"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={24}>
                        Do you want to accept this submission?
                    </Text>

                </Modal.Header>
                <Modal.Body>
                    <Divider><Chip label="Patient Information"/></Divider>
                    <div className="flex place-content-around">
                        <p>Gender: Male</p>
                        <p>Age: 12</p>
                    </div>

                    <Divider><Chip label="Symptoms"/></Divider>

                    <Text id="modal-description">
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    </Text>

                    <Divider className="mt-10"><Chip label="Observations"/></Divider>

                    <Text id="modal-description">
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        amet fermentum. Cras justo odio, dapibus ac facilisis in,
                    </Text>

                </Modal.Body>
                <Modal.Footer className="flex justify-between">
                    <p className="text-xs">*By Accepting this you agree to <a>Terms and Conditions</a> </p>
                    <div><button className="bg-red-500 mr-5 h-8 rounded-xl px-5 text-white" onClick={() => setVisible(false)}>
                        Cancel
                    </button>
                    <button className="bg-blue-500 h-8 rounded-xl px-5 text-white" onClick={() => setVisible(false)}>
                        Accept
                    </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}