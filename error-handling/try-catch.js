function inpuName(name){
    try {
        if(name != "kancil"){
            throw new Error("Harus Kancil");
        } else {
            console.log("Ini benar kancil");
        }
    } catch (error) {
        console.log(`terjadi error: ${error.message}`);
    }
}
inpuName("anjing");