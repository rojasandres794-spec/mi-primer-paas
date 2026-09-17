const express = require('express ');
const app = express ();
const port = process.env.PORT || 3000;
app.get('/', (req , res) => {
res.send(`
<!DOCTYPE html >
<html >
<head >
<title >Mi Primer PaaS </title >
<style >
body { font -family: Arial , sans -serif; text -align:
center; margin -top: 50px; background -color: #f0f8ff
; }
h1 { color: #0056 b3; }
.contenedor { background: white; padding: 30px; border
-radius: 10px; display: inline -block; box -shadow: 0
px 4px 15px rgba (0,0,0,0.1); }
</style >
</head >
<body >
<div class =" contenedor">
<h1 >!Hola Nube! Este es mi primer PaaS </h1 >
<p>Si ves esto , tu despliegue en <strong >Render </
strong > fue un exito rotundo.</p>
<p>! Felicidades futuro experto en Cloud Computing !</p>
</div >
</body >
</html >
`);
});
app.listen(port , () => {
console.log(`Servidor iniciado y escuchando ...`);
});
