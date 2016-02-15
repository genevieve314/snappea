const isValid = {
  isAlpha(input){
    if(/[^a-zA-Z\s]/.test(input)) {
       return false;
    }

    return true;
  },

  isNumeric(input){
    if(/[^0-9]/.test(input)) {
       return false;
    }

    return true;
  },

  isAlphaNumeric(input){
    if( /[^a-zA-Z0-9\s]/.test(input)) {
       return false;
    }

    return true;
  },

  isEmail(input){
    if(/\S+@\S+\.\S+/.test(input)){
      return true;
    }

    return false;
  },

  isPhone(input){
    let phone = input.replace("[^0-9]", "");
    if(phone.toString().length === 10){
      return true;
    }
    return false;
  },

  isInRange(input){
    if(typeof input !== 'number'){
      return false;
    }

    if(!isNumeric(input)){
      return false;
    }

    if(input < 0 || input >= 1440){
      return false;
    }

    return true;
  }
}

export default isValid;
