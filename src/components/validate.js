export function validate(values) {
  let error = {}

  if (!values.signupemail.trim()) {
    error.signupemail = "email is required"
  }

  if (!values.signuppassword.trim()) {
    error.signuppassword = "password is required"
  }else if(values.signuppassword.length < 6){
    error.signuppassword="atleast 6 character"
  }

  if (!values.signupconfirmpassword.trim()) {
    error.signupconfirmpassword = "confirmation is required"
  }else if(values.signuppassword !== values.signupconfirmpassword){
    error.signupconfirmpassword="password didn't match"
  }

  if(!values.signinemail.trim()){
    error.signinemail="email is required"
  }
  if(!values.signinpassword.trim()){
    error.signinpassword="password is required"
  }

  return error
}