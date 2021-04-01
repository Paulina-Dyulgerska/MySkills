const stringLengthValidator = (string) => {
    console.log('Hi from validation service');
    if (string.length < 10) {
      return  'The length must be at least 10 symbols.';
    } 
    return '';
}

export default stringLengthValidator;