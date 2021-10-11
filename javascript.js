function formValidation(){
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 

if(userid_valid(uid,5,12)){
    if(passid_validation(passid,7,12)){
        if(allLetter(uname)){
            if(alphanumeric(uadd)){ 
                if(countryselect(ucountry)){
                    if(allnumeric(uzip)){
                        if(ValidateEmail(uemail)){
                            if(validsex(umsex,ufsex)){
                            }
                        } 
                    }
                } 
            }
        }
    }
}
return false;
} 
function userid_valid(uid,min,max){
    var uidLength = uid.value.length;
    if (uidLength == 0 || uidLength >= min || uidLength < max){
    alert("User ID should be filled with length "+min+" to "+max);
    return false;
    }
    return true;
}
