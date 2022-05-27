document.getElementById("header").innerHTML=`
	<div class="gridheader">
		<img class="logo" src="./img/logo.png" alt="Enfys Color"> 
		<nav class="nav">
			<a href="./index.html">Inicio</a>
			<a href="./presentacion.html">¿Quienes somos?</a>
			<a href="./productos.html">Productos</a>
			<a href="./contacto.html">Contacto</a>
		</nav>
	</div>
`
document.getElementById("footer").innerHTML=`
	<div class="gridfooter">
		<nav class="footright">
			<h4>Conocenos</h4>
			<a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>	
			<a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
			<a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>
		</nav>
		<div class="footcenter">
			<h4>Atencion al cliente</h4>
			<p><i class="fa-solid fa-envelope"></i> enfyscolor@enfys.com</p>	
			<p><i class="fa-solid fa-phone"></i> 299 482125</p>
		</div>	
		<div class="footleft">
			<h4>Enfys Color</h4>
			<p>®2022 - Todos los derechos reservados</p>
		</div>
	</div>
`
function validateForm() {
  let nombre = document.getElementById("txtnombre").value;
  let apellido = document.getElementById("txtapellido").value;
  let email = document.getElementById("mail").value;
  let telefono = document.getElementById("telefono").value;
  let localidad = document.getElementById("localidad").value;
  let mensaje = document.getElementById("comentarios").value;
	
	// Verificar que no existan campos vacíos
  if (nombre === "") {
    alert("Ingresar Nombre");
    return false;
  };
  if (apellido === "") {
    alert("Ingresar Apellido");
    return false;
  };
  if (email === "") {
    alert("Ingresar E-Mail");
    return false;
  };
  if (telefono === "") {
    alert("Ingresar Telefono");
    return false;
  };
  if (localidad === "") {
    alert("Ingresar Localidad");
    return false;
  };
  if (mensaje === "") {
    alert("Escribi tu mensaje");
    return false;
  };
}
// productos
var cad=`
<div class="producflex">
`
	for (let i = 0; i < enfysw.length; i++) {
		cad+=
		`
		<div class="color">
			<img src="${enfysw[i].image}" alt="foto">
			<div><h4>${enfysw[i].name}</h4></div>
		</div>
		`
	}
cad+=`
</div>
`    
document.getElementById("fotosenfysw").innerHTML=cad

var cad=`
<div class="producflex">
`
	for (let i = 0; i < enfysc.length; i++) {
		cad+=
		`
		<div class="color">
			<img src="${enfysc[i].image}" alt="foto">
			<div><h4>${enfysc[i].name}</h4></div>
		</div>
		`
	}
cad+=`
</div>
`    
document.getElementById("fotosenfysc").innerHTML=cad

var cad=`
<div class="producflex">
`
	for (let i = 0; i < enfyss.length; i++) {
		cad+=
		`
		<div class="color">
			<img src="${enfyss[i].image}" alt="foto">
			<div><h4>${enfyss[i].name}</h4></div>
		</div>
		`
	}
cad+=`
</div>
`    
document.getElementById("fotosenfyss").innerHTML=cad