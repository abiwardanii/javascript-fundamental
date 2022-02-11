const myfunc = () => {
    console.log("menjalankan function myfunc");
  };
  
  // Tambahkan parameter callback ke function call
const call = (callback) => {
    console.log("Memanggil function callback.");
    // Panggil callback function
    callback();
};
  
  // Teruskan printKen sebagai argument dan jalankan function call
call(myfunc);

// Deklarasikan function didalam argument dan teruskan
call(() => {
  console.log("menjalankan function myfunc");
});