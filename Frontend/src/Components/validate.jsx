import { FormErrorMessage } from "@chakra-ui/react"

export const validate = (values) => {
    const formErrors = {};
    if (values.firstName.length === 0) { 
        FormErrorMessage.firstName="first name is required"
    }
    if (values.lastName.length === 0) { 
        FormErrorMessage.lasttName="last name is required"
    }
    if (values.email.length === 0) { 
        FormErrorMessage.email="email is required"
    }
    if (values.password.length === 0) { 
        FormErrorMessage.email="password is required"
    }
}