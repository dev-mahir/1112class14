

/**
 * Send data to ls
 * @param {*} key 
 * @param {*} value 
 * @returns 
 */
function sendData(key,value){
    let pro_arr = JSON.stringify(value);
    return localStorage.setItem(key, pro_arr);
}


/**
 * Get products from ls
 * @returns 
 */
function getData(){
    let get_products = localStorage.getItem('product');
    return JSON.parse(get_products);
}






/**
 * Send data to ls
 * @param {*} key 
 * @param {*} value 
 * @returns 
 */
 function sendData(key,value){
    let devs_arr = JSON.stringify(value);
    return localStorage.setItem(key,devs_arr);
}


/**
 * Get data 
 * @param {*} key 
 * @returns 
 */
function dataGet(key){
    let data = localStorage.getItem(key);
    if (data){
        return JSON.parse(data) 
    }else{
        return false
    }
}