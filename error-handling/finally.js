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
    finally {
        console.log("kode ini akan selalu dijalankan entah error atau success");
    }
}
inpuName("anjing");