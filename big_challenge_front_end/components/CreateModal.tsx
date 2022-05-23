import {Modal, useModal, Button, Text} from "@nextui-org/react";
import {BindingsChangeTarget} from "@nextui-org/react/types/use-input/use-input";
import {Dispatch, SetStateAction} from "react";
import {Autocomplete, Chip, Divider, TextField} from "@mui/material";
import Link from "next/link";

type Bindings = {
    open: boolean
    onClose: () => void
}

type Visible = Dispatch<SetStateAction<boolean>>

type Props = {
    setVisible: Visible
    bindings: Bindings
}

const medicalAreas = ['General', 'Pediatrics', 'Traumatology', 'Plastic']
export const CreateModal = ({setVisible, bindings}: Props) => {


    return (
        <div>
            <Modal

                style={{
                    maxHeight: "700px",
                }}
                width="600px"
                aria-labelledby="Accept Patient"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={24}>
                        Create Submission
                    </Text>

                </Modal.Header>
                <Modal.Body>
                    <Divider><Chip label="Patient Information"/></Divider>
                    <div className=" flex space-x-3">
                        <div className="rounded-3xl p-4 bg-slate-200   text-center">
                            <Chip className="mb-3" label="General Information"/>
                            <p>Gender: Male</p>
                            <p>Age: 12</p>
                            <p>Height: 124</p>
                            <p>Weight: 43</p>
                            <p>Age: 12</p>
                        </div>
                        <div className="rounded-3xl p-4 bg-slate-200 w-full ">
                            <Chip className="mb-3" label="Previous Medical Conditions"/>
                            <p className="pl-1">Gender: Male</p>
                        </div>
                    </div>
                    <div className="rounded-3xl p-4 bg-slate-200 w-full flex">
                        <Chip className="mr-3" label="Allergies"/>
                        <p>Gender: Male</p>

                    </div>
                    <p className="mx-auto font-light text-sm">Is this information up to date? <Link href="/"><a
                        className="hover:text-blue-700">Update</a></Link></p>
                    <Divider><Chip label="Medical Area"/></Divider>
                    <div className="flex place-content-around">
                        <Autocomplete
                            className="bg-slate-200  border-0"
                            disablePortal
                            options={medicalAreas}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Select Area"/>}
                        />
                    </div>

                    <Divider><Chip label="Symptoms"/></Divider>
                    <div className="h-fit">
                        <textarea rows={7} className="h-full p-3 rounded-xl w-full bg-slate-200 "
                                  placeholder="Enter your symptoms"/>
                    </div>


                    <Divider className="mt-2"><Chip label="Observations"/></Divider>

                    <div className="h-fit">
                        <textarea rows={4} className="h-full p-3 rounded-xl w-full bg-slate-200 "
                                  placeholder="Enter any observations"/>
                    </div>

                </Modal.Body>
                <Modal.Footer className="flex justify-between">
                    <p className="text-xs">*By Accepting this you agree to <a>Terms and Conditions</a></p>
                    <div>
                        <button className="bg-red-500 mr-5 h-8 rounded-xl px-5 text-white"
                                onClick={() => setVisible(false)}>
                            Cancel
                        </button>
                        <button className="bg-blue-500 h-8 rounded-xl px-5 text-white"
                                onClick={() => setVisible(false)}>
                            Create
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}