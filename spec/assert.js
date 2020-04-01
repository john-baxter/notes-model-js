var assert = {
  isTrue: function(assertionToCheck, name){
    if (!assertionToCheck) {
      throw new Error(`%cAssertion failed ${name} is not truthy`)
    } else {
      console.log(`%c${name} passed!`, "color: green")
    }
  }
}