const validationService = () => { };

validationService.stringIsNullOrEmpty = (inputString) => {
  if (!inputString) {
    console.log(inputString);
    return false;
  }
  return true;
}

validationService.emailValidator = (inputString) => {
  const emailRegExPattern =
    new RegExp('^(?:[a-zA-Z0-9][a-zA-Z0-9_.-]+@(?:[a-zA-Z0-9-_]{2,}[.][a-zA-Z0-9-_]{2,}))(?:.[a-zA-Z0-9-_]{2,})?$', 'gm');
  const hasMatch = emailRegExPattern.test(inputString);
  return hasMatch;
}

validationService.passwordValidator = (inputString) => {
  // password rules for production - upper case, lower case, symbol from those @#$%^&+!=
  // const passwordRegExPattern = new RegExp("^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+!=]).*$");
  const passwordRegExPattern = new RegExp('^[a-zA-Z0-9]{6,}$');
  const hasMatch = passwordRegExPattern.test(inputString);
  return hasMatch;
}

validationService.passwordComparer = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return false;
  }
  return password === confirmPassword;
}

validationService.nameValidatior = (inputString) => {
  const nameRegExPattern = new RegExp('^[a-zA-Z0-9-_ ]{3,}$');
  const hasMatch = nameRegExPattern.test(inputString);
  return hasMatch;
}

validationService.subjectValidator = (inputString) => {
  const subjectRegExPattern = new RegExp('^[a-zA-Z0-9 .!?-_:*()]{5,}$');
  const hasMatch = subjectRegExPattern.test(inputString);
  return hasMatch;
}

validationService.messageValidator = (inputString) => {
  const subjectRegExPattern = new RegExp('^[a-zA-Z0-9. !?-_:*()\\n]{15,}$');
  const hasMatch = subjectRegExPattern.test(inputString);
  return hasMatch;
}

validationService.phoneValidator = (inputString) => {
  return true;
}

validationService.validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export default validationService;