import { Directive } from "@angular/core";
import { FormGroup, Validator,NG_VALIDATORS } from "@angular/forms";

/*In order to use this directive - validator , we have to add this validator to angular's list of validators,
and that list exists here in Angular Forms as NG_VALIDATORS (this is an opaque token) that represents a list of every validator that Angular supports.

 */

/*Every component has its own dependencny Injector , hence w can register services with the D.I. on a given component and these services will be available to that 
conmponent and its children only (see: DI tree ) */
@Directive({
    selector:'[ValidateLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true}]
    /* multi : true  so the useExisting LocationValidatorDirective will be not ovveride all the other angular build-in validators and will be simply just added to the list 
    with the other validators instead */
})
export class LocationValidatorDirective implements Validator {
    //that method returns an object ,that can have keys which are strings and the value of each key could be anything
    validate(formGroup: FormGroup): {[key:string]:any}|null {
        let addressControl = formGroup.controls ['addresss']
        let cityControl = formGroup.controls['city']
        let countryControl = formGroup.controls['country'] 
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl']

        if((addressControl && addressControl.value 
            && cityControl && cityControl.value && 
            countryControl && countryControl.value)|| (onlineUrlControl && onlineUrlControl.value)) {

                return null ; //tells the validator system that the validation is passing so all good 

            } else {
                return {validateLocation:false}
            }
        
        
    }
    
}