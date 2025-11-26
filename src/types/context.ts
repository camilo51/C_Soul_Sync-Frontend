import { LoginUserType, RegisterUserType, UserType } from "./user";

export type AuthContextType = {
    user: UserType | null;
    register: ({name, email, password, confirmPassword}: RegisterUserType) => Promise<void>;
    login: ({email, password}: LoginUserType) => Promise<void>;
    logout: () => void;
}