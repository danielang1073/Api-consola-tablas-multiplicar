const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  let salida = "";

  try {
    for (i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("🚀 ~ file: app.js:9 ~ salida:", salida.green);
    }

    fs.writeFile(`./salida/tabla-${base}.txt`, salida, (error) => {
      if (error) throw error; 
      return `tabla-${base}.txt creada`;
    });
  } catch (error) {
    console.log("🚀 ~ file: multiplicar.js:18 ~ crearArchivo ~ error:", error);
  }
};

module.exports = {
  crearArchivo,
};
