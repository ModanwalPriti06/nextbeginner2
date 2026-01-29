'use client'
import React, { useActionState } from "react"
import { ContactType } from "../_types/contact";
import { FiTrash2 } from "react-icons/fi";


type DeleteButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>;
    contact?: ContactType,
}
const DeleteButton = ({ action, contact }: DeleteButtonProps) => {
    const [state, formAction] = useActionState(action, null)
    
    console.log('contact-------', contact)
    return (
        <form action={formAction} method="post">
            <input type="hidden" name="id" value={contact?.id}/>
            <button
                type='submit'
                className="flex item-center text-red-600 gap-2 px-3 py-1 border rounded-md hover:border-red-400 hover:bg-red-100"
                onClick={(e)=> {
                    if(!confirm('Are you sure you want to delete this contact ?')){
                        e.preventDefault();
                    }
                }
                }   
                >
                <FiTrash2 className="text-red-500" /> Delete
            </button>
        </form>
    );
};

export default DeleteButton;
