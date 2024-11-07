import { createContext, useEffect, useState } from "react";
import Api from "../services/Api";
import { toast } from "react-toastify";
import { getLocalStorage, setLocalStorage } from "./utils";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = getLocalStorage();
        if (storedUser) {
            setUser(storedUser);
            console.log("Usuário logado", storedUser);
        }
    }, []);

    async function authenticate(email, password) {
        try {
            const response = await Api.post("/session", { email, password });

            // Verificar explicitamente o sucesso na resposta antes de prosseguir
            if (response.data.error || !response.data.token) {
                toast.error(response.data.message || "Credenciais inválidas");
                return;
            }

            const payload = {
                token: response.data.token,
                email: response.data.email,
            };

            setUser(payload);
            setLocalStorage(payload);
            toast.success("Login realizado com sucesso!");
            window.location.href = "/perfil";
        } catch (error) {
            console.error("Erro na autenticação:", error);
            toast.error("Erro ao fazer login. Tente novamente.");
        }
    }

    function logout() {
        setUser(null);
        setLocalStorage(null);
        toast.info("Logout realizado com sucesso!");
    }

    return (
        <AppContext.Provider value={{ user, authenticate, logout }}>
            {children}
        </AppContext.Provider>
    );
};
