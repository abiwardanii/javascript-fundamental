const call = (callback) => {
    callback("abi", 23);
  };
  
  // Tambahkan sebuah function yang menerima dua argument didalam argument call
  call((name,age) => {
    console.log(`${name} berusia ${age} tahun.`);
  });
  