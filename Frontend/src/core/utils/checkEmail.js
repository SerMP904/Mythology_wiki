export const validateEmail = (email) => {

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)){
        return true;
    } else return false;
}
