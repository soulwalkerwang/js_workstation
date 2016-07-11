var myobj = {
    str:"mstring",
    num:1,
    myarr:[30,{
        arrgo:"I am arr"
    }],
    obj:{
        innerobj:{
            test:25
        },
        innerstr:"myobjInnerstr"
    }
}

function clone(obj){
    var ret,k,b;
    if((b=(obj instanceof Array)) || obj instanceof Object){
        ret = b?[]:{};
        for(k in obj){
            if((obj[k] instanceof Array) || (obj[k] instanceof Object)){
                ret[k] = clone(obj[k]);
            }else {
                ret[k] = obj[k];
            }
        }
    }
    return ret;
}

var result = clone(myobj);
result.obj.innerstr = "objOutterstr";
