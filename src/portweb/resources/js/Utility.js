import {SexSelectList,ResidenceSelectList} from "./components/SelectBox"

export const undefinedCheck = (data) =>{
    if( typeof data === 'undefined'){
        return false
    }else{
        return true
    }
}

export const numBoolConvert = (data) =>{
    if( data === 1){
        return true
    }else if (data === 0){
        return false
    }else if (data === true){
        return true
    }else if (data === false){
        return false
    }else{
        return false
    }
}


export const GenderCodeDisp = (data) => {
    var resultValue
    SexSelectList.forEach((list) => {
        if(data ==  list.value){
            resultValue = list.disp
        }
    })
    return resultValue
}

export const ResidenceCodeDisp = (data) => {
    var resultValue
    ResidenceSelectList.forEach((list) => {
        if(data ==  list.value){
            resultValue = list.disp
        }
    })
    return resultValue
}