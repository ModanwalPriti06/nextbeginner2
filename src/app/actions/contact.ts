'use server'
import { revalidatePath } from "next/cache";
import { deleteContact } from "../api/contact"

export const deleteContactAction = async ( prevState: any, formData: FormData)=> {
    const id = formData.get('id') as string

    if (!id || typeof id !== "string") {
    return { error: "Invalid contact id" };
  }
    try{
        await deleteContact(id);
        revalidatePath("/contact")
        return { success: true}
    }
    catch(err){
        console.error(err);
        return {error: 'Failed to delete path'}
    }
}