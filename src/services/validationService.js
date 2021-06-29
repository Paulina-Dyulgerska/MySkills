const validationService = () => { };

console.log('Hi from validation service');

validationService.emailValidator = (inputString) => {
  const emailRegExPattern =
    new RegExp("^(?:[a-zA-Z0-9][a-zA-Z0-9_.-]*@[a-zA-Z0-9-_]{2,}\.[a-zA-Z0-9-_]{2,})?(?:\.[a-zA-Z0-9-_]{2,})*$");

  console.log(inputString + ' Hi from email validator');
  const hasMatch = emailRegExPattern.test(inputString);
  return hasMatch;
}

validationService.passwordValidator = (inputString) => {
  // password rules for production - upper case, lower case, symbol from those @#$%^&+!=
  // const passwordRegExPattern = new RegExp("^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+!=]).*$");
  const passwordRegExPattern = new RegExp("^[a-zA-Z0-9]{6,}$");
  console.log(inputString + ' Hi from password validator');

  const hasMatch = passwordRegExPattern.test(inputString);
  return hasMatch;
}

export default validationService;