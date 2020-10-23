module.exports = function check(str, bracketsConfig) {
    let i = 1;
    let k = 1;
    if(str.match(/\D/)){
        while(i===1){
            if(str.match(/\(\)/)){
             str=str.replace(/\(\)/g, '');
             console.log(str);
            } else if(str.match(/\[\]/)){
                str=str.replace(/\[\]/g, '');
               console.log(str);
            } else if(str.match(/\{\}/)){
                str=str.replace(/\{\}/g, '');
               console.log(str);
            } else if(str.match(/\|\|/)){
                str=str.replace(/\|\|/g, '');
               console.log(str);
            } else i++;
        }
        if (str.length===0){
            console.log(true)
            return true;
            
        } else {
            console.log(false)
            return false;
        }
    }else{ 
        while(k===1){
            if (str.match(/12/)){
                str=str.replace(/12/, '');
            } 
            else if( str.match(/34/)  ){
                str=str.replace(/34/, '');
            } 
            else if( str.match(/56/) ){
                str=str.replace(/56/, '');
               
            } 
            else if( str.match(/77/)){
                str=str.replace(/77/, '');
            } 
            else if( str.match(/88/)) {
                str=str.replace(/88/, '')
            } else k++;

            
        }  
        if (str.length===0){
            console.log(true)
            return true;
            
        } else {
            console.log(false)
            return false;
        }           
    }
    
}
