import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'


export interface FormData {
    email: string
    password: string
}

export interface useAuthFormTypes {
    register: UseFormRegister<FormData>,
    handleSubmit: UseFormHandleSubmit<FormData, undefined>,
    formState: {
        errors: FieldErrors<FormData>;
        isValid: boolean;
    },
    submit: SubmitHandler<FormData>
    isLoading: boolean
    errorText: string
    urlRegistr: string
    urlForGot: string
    btnIsDisabled: boolean
}