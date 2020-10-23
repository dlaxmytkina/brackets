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
            if (str.match(/1/) && str.match(/2/)){
                str=str.replace(/1/, '');
                str=str.replace(/2/, '');
            } 
            else if( str.match(/3/) && str.match(/4/) ){
                str=str.replace(/3/, '');
                str=str.replace(/4/, '');
            } 
            else if( str.match(/5/) && str.match(/6/) ){
                str=str.replace(/5/, '');
                str=str.replace(/6/, '');
            } 
            else if( str.match(/7{2}/)){
                str=str.replace(/7{2}/, '');
            } 
            else if( str.match(/8{2}/)) {
                str=str.replace(/8{2}/, '')
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
