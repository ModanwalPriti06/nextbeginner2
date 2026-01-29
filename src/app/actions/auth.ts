'use server';

import { redirect } from "next/navigation";
import axios from "axios";
import { UserType } from "../_types/user";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
    try {
        const email = formData.get("email");
        const password = formData.get("password");

        const response = await axios.get(
            `${API_URL}/users`,
            {
                params: { email, password }
            }
        );

        const user: UserType | undefined = response.data?.[0];

        if (!user) {
            throw new Error("Invalid credentials");
        }

        // TODO: set cookie / session here
        await setSession({ name: user.name, email: user.email, id: user.id });

    } catch (err) {
        console.error("Login error:", err);
        throw err; // 🔥 don't hide the real error
    }
    redirect("/contact");
};

export const logoutAction = async () => {
    await deleteSession()
    redirect("/login");
};
