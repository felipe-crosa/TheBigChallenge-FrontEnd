import {NextPage} from "next";

type InputProps = {
    placeholder?: string;
    type?:string;
    value?: string;
    onChange?:Function
}

export const TextInput: NextPage<InputProps> = (props:InputProps) => {
    return (
        <input onChange={()=>props.onChange} value={props.value} type={props.type} placeholder={props.placeholder}
               className="border-2 mx-5 my-3 h-12 rounded-md p-3 w-10/12
                           hover:border-blue-400 hover:placeholder:text-blue-200
                           focus:border-blue-400 focus:placeholder:text-blue-200"/>
    );
}