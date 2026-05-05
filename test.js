const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/api/products",
  method: "GET",
};

const req = http.request(options, (res) => {
  if (res.statusCode === 403 || res.statusCode === 401) {
    console.log("Test OK (La API protegio correctamente)");
    process.exit(0);
  } else {
    console.error("Test fallo");
    process.exit(1);
  }
});

req.on("error", () => {
  console.error("Error en la conexion");
  process.exit(1);
});

req.end();
