import { InjectionToken } from "@angular/core";

/** 
 * injection token's job is to simply create a token used for the D.I. registry
 *  in order to find the instance of the service that we want
 * 
*/

// I.T.'s constructor takes in a type parameter, and that type is the type of the object that is given back for the service  
// Hence , when we use this token to look up the instance of our ToastrService this is the type that's given back .
export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr') // then the const takes in a a single parameter, as string which is the description 
//this is creating a token that I can then use to look up the toastr object inside of the D.I> registry .
//! event if im passing a string in the constructor the TOASTR_TOKEN is not as string its an actual JS object !
// ! object identity: two objects that look identical are not the same object 
// so the 'TOASTR_TOKEN' will be a unique string that can't be used by nobody else within their service and if someone accidentally did it will get a confluct ! 


export interface Toastr {
    success (msg:string ,title?:string) :void;
    info (msg:string ,title?:string) :void;
    warning (msg:string ,title?:string) :void;
    error (msg:string ,title?:string) :void;
}