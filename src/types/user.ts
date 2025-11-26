export type UserType = {
    id: string;
    name: string;
    email: string;
    verified: boolean;
    token: string;
    createdAt: string;
    updatedAt: string;
} 

export type LoginUserType = Pick<UserType, "email"> & {
    password: string;
};

export type RegisterUserFormType = Pick<UserType, "name" | "email"> & {
    lastname: string;
    password: string;
    confirmPassword: string;
}

export type RegisterUserType = Pick<UserType, "name" | "email"> & {
    password: string;
    confirmPassword: string;
}