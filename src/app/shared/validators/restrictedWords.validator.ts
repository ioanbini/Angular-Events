import { AbstractControl } from "@angular/forms"
  /**Prevents certain words from being used in a field */
  /*Validator is basically just a function that returns null if the control is valid or an error object if the control is invalid */

  export function restrictedWords(words: string[]) {
    /** The restrictedWords function is a function that returns an arrow function wicth returns a js object which has a property of type string and a value of type any and in our case string or null as any!
     in our case the restrictedWords functions returns our validator*/
    return (control: AbstractControl): { [key: string]: any } => {
      /* if there are no words passed in will return null and the control will be vaild  */
      if (!words)
        return null as any
      /**then we will find any restricted words that exists in our control's value */
      /** here we will iterrate through all the elements of the words array and we will look if we found the restricted words and will return them otherwise will return null */
      /** then we will filter the words that are null and we will return the words that are not null or undefined */
      /** map: (looping over all the keywords)and checking the control's value to see if it includes that word and then returning that word or null if it is not found  */
      /** filter : then we  will filter those nulls  */

      let invalidWords = words
        .map(word => control.value.includes(word) ? word : null )
        .filter(word => word != null)

      /** at this point invalidWords contains any invalid words that were found inside the controls value and we will check this in line below
       * and if there are invalid words we will return that error object and we will put all of the restricted words in it and will be seperated with comma
       * otherwise we will return null
      */
      return invalidWords && invalidWords.length > 0
        ? { 'restrictedWords': invalidWords.join(',') }
        : null as any



    }
  }
