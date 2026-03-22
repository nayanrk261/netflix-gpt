export const CheckValidation = (email, password, name) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password not valid";

    if (name !== null) {
        const isNameValid = /^[A-Za-z]{2,}(?: [A-Za-z]{2,})*$/.test(name);
        if (!isNameValid) return "Name is not valid";
    }

    return null;
}