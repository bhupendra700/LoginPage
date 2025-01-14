const logingreetBox = () => {
    document.querySelector(".login-greet-box").setAttribute("class", "login-greet-box hidegreet-box")
    document.querySelector(".signup-greet-box").setAttribute("class", "signup-greet-box")
    document.querySelector(".login-box").setAttribute("class", "login-box")
    document.querySelector(".signup-box").setAttribute("class", "signup-box hide-form")
    // 
    document.querySelector(".login-form").setAttribute("class", "login-form hover-chngbtn")
    document.querySelector(".signup-form").setAttribute("class", "signup-form")
}

const signupgreetBox = () => {
    document.querySelector(".login-greet-box").setAttribute("class", "login-greet-box ")
    document.querySelector(".signup-greet-box").setAttribute("class", "signup-greet-box hidegreet-box")
    document.querySelector(".login-box").setAttribute("class", "login-box hide-form")
    document.querySelector(".signup-box").setAttribute("class", "signup-box")
    // 
    document.querySelector(".login-form").setAttribute("class", "login-form")
    document.querySelector(".signup-form").setAttribute("class", "signup-form hover-chngbtn")
}


const loginform = () =>{
    document.querySelector(".login-form").setAttribute("class", "login-form hover-chngbtn")
    document.querySelector(".signup-form").setAttribute("class", "signup-form")
    document.querySelector(".login-box").setAttribute("class", "login-box")
    document.querySelector(".signup-box").setAttribute("class", "signup-box hide-form")
    // 
    document.querySelector(".login-greet-box").setAttribute("class", "login-greet-box hidegreet-box")
    document.querySelector(".signup-greet-box").setAttribute("class", "signup-greet-box")
}

const signupform = () =>{
    document.querySelector(".login-form").setAttribute("class", "login-form")
    document.querySelector(".signup-form").setAttribute("class", "signup-form hover-chngbtn")
    document.querySelector(".login-box").setAttribute("class", "login-box hide-form")
    document.querySelector(".signup-box").setAttribute("class", "signup-box")
    // 
    document.querySelector(".login-greet-box").setAttribute("class", "login-greet-box")
    document.querySelector(".signup-greet-box").setAttribute("class", "signup-greet-box hidegreet-box")
}

export {loginform , logingreetBox , signupform , signupgreetBox}
