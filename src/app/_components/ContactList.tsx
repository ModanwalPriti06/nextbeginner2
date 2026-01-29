
import React from "react"
import { ContactType } from "../_types/contact";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import DeleteButton from "./DeleteButton";
import { deleteContactAction } from "../actions/contact";

const ContactList = ({contacts}: {contacts: ContactType [] }) => {
  return (
   <div className="space-y-4 ">
    {contacts.map((data) =>(
            <div key={data.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-lg font-semibold">{data.name}</h2>
                        <p>{data.email}</p>
                    </div>
                    <div className="flex self-center items-center gap-3">
                        <Link href={`/contact/edit/${data.id}`} className="flex item-center text-blue-600 gap-2 px-3 py-1 border rounded-md hover:border-blue-400 hover:bg-blue-100">
                             <FiEdit className="text-blue-600"/> 
                             Edit
                        </Link>
                        <DeleteButton action={deleteContactAction} contact={data}/>
                    </div>
                </div>
            </div>
        )
    )}
    </div>
  );
};

export default ContactList;
