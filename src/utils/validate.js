const checkValidData=(email,password,userName)=>{
    const isEmailValid= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password);

    if(userName.current){
        const isUserNameValid=/^[a-zA-Z]+ [a-zA-Z]+$/.test(userName.current.value);
        if(!isUserNameValid) return "Name is not Valid"
    }

    if(!isEmailValid) return "Email is not valid";

    if(!isPasswordValid) return "Password is not valid";

    return null;

}

export default checkValidData;