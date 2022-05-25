import {NextPage} from "next";
import {ChangeEvent, LegacyRef, Ref} from "react";

type InputProps = {
    placeholder?: string;
    type?:string;
    changeEvent?:Function
    value?:string
    error?:boolean
}

export const TextInput: NextPage<InputProps> = (props:InputProps) => {

    const handleChange = (event:ChangeEvent) => {
        if(props.changeEvent){
            props.changeEvent(event)
        }
    }

    let appliedClass = "border-2 mx-5 my-3 h-12 rounded-md p-3 w-10/12 hover:border-blue-400 hover:placeholder:text-blue-200 focus:border-blue-400 focus:placeholder:text-blue-200"
    if(props.error){
        appliedClass = "border-2 mx-5 my-3 h-12 rounded-md p-3 w-10/12 border-red-300 hover:border-red-500 hover:placeholder:text-red-200 focus:border-red-500 focus:placeholder:text-red-200"
    }

    return (
        <input value={props.value} onChange={(event)=>handleChange(event)} type={props.type} placeholder={props.placeholder}
               className={appliedClass}/>
    );
}