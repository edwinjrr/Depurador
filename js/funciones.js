// Dar error cuando se usan letras e iniciar las funciones al presionar un botón.

// Parámetros del REA

var mayorDeudor = 25000000;
var estadosCpaInterno = 5000000;
var estadosCpaIndependiente = 10000000;
var estadosDgii = 10000000;
var estadosAuditados = 25000000;

// Es el cliente mayor o menor deudor? 
// Parámetros: montoSolicitado, montoAutorizado y competenciaAutorizado.

function tamanoDeudor() {
	var montoSolicitadoMask = document.getElementById("montoSol").value;
    var montoAutorizadoMask = document.getElementById("montoAut").value;
    var competenciaAutorizadoMask = document.getElementById("competenciaAut").value;

	var montoSolicitado = montoSolicitadoMask.replace(/\D/g,'');
    var montoAutorizado = montoAutorizadoMask.replace(/\D/g,'');
    var competenciaAutorizado = competenciaAutorizadoMask.replace(/\D/g,'');

    var resultado = (montoSolicitado * 1) + (montoAutorizado * 1) + (competenciaAutorizado * 1);
	if (document.getElementById("montoSol").value === "") {
		return [document.getElementById("alertaComite").textContent = "Debe insertar monto solicitado!",
				document.getElementById("alertaComite").style.display = "block"];
	}
	else {
	    if (resultado >= mayorDeudor) {
	        return [document.getElementById("deudor").textContent = "Mayor deudor",
	        		document.getElementById("deudor").style.display = "inline-block",
	        		document.getElementById("alertaComite").style.display = "none"];
	    }
	    else {
	        return [document.getElementById("deudor").textContent = "Menor deudor",
	        		document.getElementById("deudor").style.display = "inline-block",
	        		document.getElementById("alertaComite").style.display = "none"];
	    }
    }
};

// Requerimientos para los estados financieros (Habilita checkboxes)
// Parámetros: montoSolicitado y montoAutorizado. 

function checkboxEstadosFinancieros() {
	var montoSolicitadoMask = document.getElementById("montoSol").value;
    var montoAutorizadoMask = document.getElementById("montoAut").value;
    var competenciaAutorizadoMask = document.getElementById("competenciaAut").value;

	var montoSolicitado = montoSolicitadoMask.replace(/\D/g,'');
    var montoAutorizado = montoAutorizadoMask.replace(/\D/g,'');
    var competenciaAutorizado = competenciaAutorizadoMask.replace(/\D/g,'');

	var resultado = (montoSolicitado * 1) + (montoAutorizado * 1);
	var tamanoDeudor = (montoSolicitado * 1) + (montoAutorizado * 1) + (competenciaAutorizado * 1);
	if (tamanoDeudor >= estadosAuditados) {
		return [document.getElementById("efCB4").disabled = false,
				document.getElementById("efCB5").disabled = false,
				document.getElementById("efCB3").disabled = true,
				document.getElementById("efCB2").disabled = true,
				document.getElementById("efCB1").disabled = true];
	}
	else if (resultado >= estadosCpaIndependiente) {
		return [document.getElementById("efCB4").disabled = true,
				document.getElementById("efCB5").disabled = true,
				document.getElementById("efCB3").disabled = false,
				document.getElementById("efCB2").disabled = true,
				document.getElementById("efCB1").disabled = true];
	}
	else if (resultado >= estadosCpaInterno) {
		return [document.getElementById("efCB4").disabled = true,
				document.getElementById("efCB5").disabled = true,
				document.getElementById("efCB3").disabled = true,
				document.getElementById("efCB2").disabled = false,
				document.getElementById("efCB1").disabled = true];
	}
	else {
		return [document.getElementById("efCB4").disabled = true,
				document.getElementById("efCB5").disabled = true,
				document.getElementById("efCB3").disabled = true,
				document.getElementById("efCB2").disabled = true,
				document.getElementById("efCB1").disabled = false];
	}
};

// Requiere suministrar declaración de impuestos sobre la renta? (Habilita checkboxes)
// Parámetros: montoSolicitado y montoAutorizado.

function checkboxdeclaracionImpuestos() {
	var montoSolicitadoMask = document.getElementById("montoSol").value;
    var montoAutorizadoMask = document.getElementById("montoAut").value;
    var competenciaAutorizadoMask = document.getElementById("competenciaAut").value;

	var montoSolicitado = montoSolicitadoMask.replace(/\D/g,'');
    var montoAutorizado = montoAutorizadoMask.replace(/\D/g,'');
    var competenciaAutorizado = competenciaAutorizadoMask.replace(/\D/g,'');

	var resultado = (montoSolicitado * 1) + (montoAutorizado * 1) + (competenciaAutorizado * 1);
	if (resultado >= estadosDgii) {
		return document.getElementById("efCB6").disabled = false;
	}
	else {
		return document.getElementById("efCB6").disabled = true;
	}
};

// Comité de decisión
// Parámetros: montoSolicitado, montoAdeudado y relacionadosAdeudado.

var personales = {
	gerenteOficina : 1000000,
	gerenteRegional : 2000000,
	directorRegional : 5000000,
	directorAdjunto : 10000000,
	directorGeneral : 15000000,
	subadministrador : 30000000,
	admGeneral : 35000000,
	comiteSuperior : 100000000
};

var empresariales = {
	gerenteArea : 2000000,
	director : 10000000,
	directorGeneral : 20000000,
	subadministrador : 30000000,
	admGeneral : 35000000,
	comiteSuperior : 100000000
};

var corporativos = {
	gerenteArea : 3000000,
	director : 10000000,
	directorAdjunto : 15000000,
	directorGeneral : 20000000,
	subadministrador : 30000000,
	admGeneral : 35000000,
	comiteSuperior : 100000000
};

var institucionales = {
	gerenteArea : 3000000,
	director : 10000000,
	directorGeneral : 25000000,
	subadministrador : 30000000,
	admGeneral : 35000000,
	comiteSuperior : 100000000
};

//Organo de decisión según el area de negocios.

function comiteDecision() {
	var dropdown = document.getElementById("dropdownArea");
	var opcion = dropdown.options[dropdown.selectedIndex].value;    

	var montoSolicitadoMask = document.getElementById("montoSol").value;
    var montoAdeudadoMask = document.getElementById("montoAdeu").value;
    var relacionadosAdeudadoMask = document.getElementById("relacionadosAdeu").value;

	var montoSolicitado = montoSolicitadoMask.replace(/\D/g,'');
    var montoAdeudado = montoAdeudadoMask.replace(/\D/g,'');
    var relacionadosAdeudado = relacionadosAdeudadoMask.replace(/\D/g,'');

	var resultado = (montoSolicitado * 1) + (montoAdeudado * 1) + (relacionadosAdeudado * 1);

	document.getElementById("comite").style.display = "inline-block"

	if (document.getElementById("condicion2").checked || document.getElementById("condicion3").checked || document.getElementById("condicion4").checked) {
		return document.getElementById("comite").textContent = "Consejo de Directores";
	}
	else if (document.getElementById("condicion1").checked) {
		if (resultado <= personales.admGeneral) {
			return document.getElementById("comite").textContent = "Comité Superior";
		}
		else {
			return document.getElementById("comite").textContent = "Consejo de Directores";
		}		
	}
	else {
		if(opcion === "personal") {
			if (resultado <= personales.gerenteOficina) {
				return document.getElementById("comite").textContent = "Límite del Gerente de Oficina";
			}
			else if (resultado <= personales.gerenteRegional) {
				return document.getElementById("comite").textContent = "Límite del Gerente Regional";
			}
			else if (resultado <= personales.directorRegional) {
				return document.getElementById("comite").textContent = "Límite del Director Regional";
			}
			else if (resultado <= personales.directorAdjunto) {
				return document.getElementById("comite").textContent = "Límite del Director Adjunto";
			}
			else if (resultado <= personales.directorGeneral) {
				return document.getElementById("comite").textContent = "Límite del Director General";
			}
			else if (resultado <= personales.subadministrador) {
				return document.getElementById("comite").textContent = "Límite del Subadministrador";
			}
			else if (resultado <= personales.admGeneral) {
				return document.getElementById("comite").textContent = "Límite del Administrador General";
			}
			else if (resultado <= personales.comiteSuperior) {
				return document.getElementById("comite").textContent = "Comité Superior";
			}
			else {
				return document.getElementById("comite").textContent = "Consejo de Directores";
			}
		}
		else if(opcion === "empresarial") {
			if (resultado <= empresariales.gerenteArea) {
				return document.getElementById("comite").textContent = "Límite del Gerente de Área";
			}
			else if (resultado <= empresariales.director) {
				return document.getElementById("comite").textContent = "Límite del Director";
			}			
			else if (resultado <= empresariales.directorGeneral) {
				return document.getElementById("comite").textContent = "Límite del Director General";
			}
			else if (resultado <= empresariales.subadministrador) {
				return document.getElementById("comite").textContent = "Límite del Subadministrador";
			}
			else if (resultado <= empresariales.admGeneral) {
				return document.getElementById("comite").textContent = "Límite del Administrador General";
			}
			else if (resultado <= empresariales.comiteSuperior) {
				return document.getElementById("comite").textContent = "Comité Superior";
			}
			else {
				return document.getElementById("comite").textContent = "Consejo de Directores";
			}
		}
		else if(opcion === "corporativa") {
			if (resultado <= corporativos.gerenteArea) {
				return document.getElementById("comite").textContent = "Límite del Gerente de Área";
			}
			else if (resultado <= corporativos.director) {
				return document.getElementById("comite").textContent = "Límite del Director";
			}
			else if (resultado <= corporativos.directorAdjunto) {
				return document.getElementById("comite").textContent = "Límite del Director Adjunto";
			}			
			else if (resultado <= corporativos.directorGeneral) {
				return document.getElementById("comite").textContent = "Límite del Director General";
			}
			else if (resultado <= corporativos.subadministrador) {
				return document.getElementById("comite").textContent = "Límite del Subadministrador";
			}
			else if (resultado <= corporativos.admGeneral) {
				return document.getElementById("comite").textContent = "Límite del Administrador General";
			}
			else if (resultado <= corporativos.comiteSuperior) {
				return document.getElementById("comite").textContent = "Comité Superior";
			}
			else {
				return document.getElementById("comite").textContent = "Consejo de Directores";
			}
		}
		else {
			if (resultado <= institucionales.gerenteArea) {
				return document.getElementById("comite").textContent = "Límite del Gerente de Área";
			}
			else if (resultado <= institucionales.director) {
				return document.getElementById("comite").textContent = "Límite del Director";
			}
			else if (resultado <= institucionales.directorGeneral) {
				return document.getElementById("comite").textContent = "Límite del Director General";
			}
			else if (resultado <= institucionales.subadministrador) {
				return document.getElementById("comite").textContent = "Límite del Subadministrador";
			}
			else if (resultado <= institucionales.admGeneral) {
				return document.getElementById("comite").textContent = "Límite del Administrador General";
			}
			else if (resultado <= institucionales.comiteSuperior) {
				return document.getElementById("comite").textContent = "Comité Superior";
			}
			else {
				return document.getElementById("comite").textContent = "Consejo de Directores";
			}		
		}
	}
};

function comiteDoble() {
	var comite = comiteDecision();
	return [document.getElementById("comite").textContent = comite,
			document.getElementById("resultadoComite").textContent = comite,
			document.getElementById("resultadoComite").style.display = "block"];
};

//Habilitar checkboxes

function habilitarCheckbox(checkboxId) {
	var newID = checkboxId.substring(0, checkboxId.length - 1);
	if (document.getElementById(newID).disabled === true) {
		return document.getElementById(newID).disabled = false;
	}
	else {
		return document.getElementById(newID).disabled = true;
	}
};

function habilitarCheckbox2(iD1, iD2) {
	if (document.getElementById(iD1).disabled === true) {
		return [document.getElementById(iD1).disabled = false,
				document.getElementById(iD2).disabled = false];
	}
	else {
		return [document.getElementById(iD1).disabled = true,
				document.getElementById(iD2).disabled = true];
	}
};

function habilitarCheckbox4(iD1, iD2, iD3, iD4) {
	if (document.getElementById(iD1).disabled === true) {
		return [document.getElementById(iD1).disabled = false,
				document.getElementById(iD2).disabled = false,
				document.getElementById(iD3).disabled = false,
				document.getElementById(iD4).disabled = false];
	}
	else {
		return [document.getElementById(iD1).disabled = true,
				document.getElementById(iD2).disabled = true,
				document.getElementById(iD3).disabled = true,
				document.getElementById(iD4).disabled = true];
	}
};

//Nombre e identificación del cliente al header.

function insertarEnHeader(inputId, headerId) {
	return [document.getElementById(headerId).textContent = document.getElementById(inputId).value,
			document.getElementById(headerId).style.display = "inline-block"];
};

//Aparece el contenido luego de presionar el botón iniciar

function aparecerContenido() {
	var dropdownCliente = document.getElementById("dropdownCliente");
	var cliente = dropdownCliente.options[dropdownCliente.selectedIndex].text;
	var dropdownArea = document.getElementById("dropdownArea");
	var area = dropdownArea.options[dropdownArea.selectedIndex].text;
	return [document.getElementById("dropdownInicio").style.display = "none",
			document.getElementById("desaparecer").style.display = "block", 
			document.getElementById("tipoCliente").textContent = cliente,
			document.getElementById("areaNegocios").textContent = "Negocios " + area,
			document.getElementById("tipoCliente").style.display = "inline-block",
			document.getElementById("areaNegocios").style.display = "inline-block"];
};

//Modifica el placeholder de la identificación según el tipo de cliente

function cambioPlaceholder() {
	//var dropdown = document.getElementById("dropdownCliente");
	//var opcion = dropdown.options[dropdown.selectedIndex].value;
	var opcion = document.getElementById("dropdownCliente").value;
	if(opcion === "fisica") {
		return [document.getElementById("nombreCliente").placeholder = "Nombre según padrón",
				document.getElementById("idCliente").placeholder = "Cédula"];
	}
	else {
		return [document.getElementById("nombreCliente").placeholder = "Nombre según registro mercantil",
				document.getElementById("idCliente").placeholder = "RNC"];
	}
	
};

//Desaparece el tab de la documentación legal si el cliente es persona física

function esconderLegal() {
	var opcion = document.getElementById("dropdownCliente").value;
	if(opcion === "fisica") {
		return [document.getElementById("tabLegal").style.display = "none",
				document.getElementById("nextGarantia").style.display = "none"];
	}
};

//Reiniciar aplicación, alertando primero lo que se hará.

function reiniciarApp() {
    if (confirm("¿Desea reiniciar la aplicación?") === true) {
        location.reload();
    } else {
        none;
    }
};

//Sin garantía

function sinGarantia() {
	return [document.getElementById("sinGarantia").style.display = "block",
			document.getElementById("elementosGarantias1").style.display = "none",
			document.getElementById("elementosGarantias2").style.display = "none",
			document.getElementById("elementosGarantias3").style.display = "none",
			document.getElementById("divNumeroGarantias").style.display = "none"]
};

//Una sola garantía

function unaGarantia() {
	return [document.getElementById("sinGarantia").style.display = "none",
			document.getElementById("elementosGarantias1").style.display = "block",
			document.getElementById("elementosGarantias2").style.display = "none",
			document.getElementById("elementosGarantias3").style.display = "none",
			document.getElementById("divNumeroGarantias").style.display = "none"]
};

//Múltiple garantías

function multiplesGarantias() {
	return [document.getElementById("numeroGarantias").value = "vacio",
			document.getElementById("sinGarantia").style.display = "none",
			document.getElementById("elementosGarantias1").style.display = "none",
			document.getElementById("divNumeroGarantias").style.display = "block"]
};

//Según el tipo de garantía el checklist que aprecerá

function tipoGarantia(dropdownId, hipotecariaId, prendariaId, solidariaId) {
	var opcion = document.getElementById(dropdownId).value;
	if(opcion === "hipotecaria") {
		return [document.getElementById(hipotecariaId).style.display = "block",
				document.getElementById(prendariaId).style.display = "none",
				document.getElementById(solidariaId).style.display = "none"];		
	}
	else if(opcion === "prendaria") {
		return [document.getElementById(hipotecariaId).style.display = "none",
				document.getElementById(prendariaId).style.display = "block",
				document.getElementById(solidariaId).style.display = "none"];		
	}
	else if(opcion === "solidaria") {
		return [document.getElementById(hipotecariaId).style.display = "none",
				document.getElementById(prendariaId).style.display = "none",
				document.getElementById(solidariaId).style.display = "block"];		
	}
	else {
		return [document.getElementById(hipotecariaId).style.display = "none",
				document.getElementById(prendariaId).style.display = "none",
				document.getElementById(solidariaId).style.display = "none"];
	}		
};

//Según el número de garantías, la cantidad de checklists que aparecerán

function cantidadGarantias() {
	var opcion = document.getElementById("numeroGarantias").value;
	if(opcion === "2") {
		return [document.getElementById("elementosGarantias1").style.display = "block",
				document.getElementById("elementosGarantias2").style.display = "block",
				document.getElementById("elementosGarantias3").style.display = "none",
				document.getElementById("elementosGarantias4").style.display = "none",
				document.getElementById("elementosGarantias5").style.display = "none",
				document.getElementById("elementosGarantias6").style.display = "none"];
	}
	else if(opcion === "3") {
		return [document.getElementById("elementosGarantias1").style.display = "block",
				document.getElementById("elementosGarantias2").style.display = "block",
				document.getElementById("elementosGarantias3").style.display = "block",
				document.getElementById("elementosGarantias4").style.display = "none",
				document.getElementById("elementosGarantias5").style.display = "none",
				document.getElementById("elementosGarantias6").style.display = "none"];
	}
	else if(opcion === "4") {
		return [document.getElementById("elementosGarantias1").style.display = "block",
				document.getElementById("elementosGarantias2").style.display = "block",
				document.getElementById("elementosGarantias3").style.display = "block",
				document.getElementById("elementosGarantias4").style.display = "block",
				document.getElementById("elementosGarantias5").style.display = "none",
				document.getElementById("elementosGarantias6").style.display = "none"];
	}
	else if(opcion === "5") {
		return [document.getElementById("elementosGarantias1").style.display = "block",
				document.getElementById("elementosGarantias2").style.display = "block",
				document.getElementById("elementosGarantias3").style.display = "block",
				document.getElementById("elementosGarantias4").style.display = "block",
				document.getElementById("elementosGarantias5").style.display = "block",
				document.getElementById("elementosGarantias6").style.display = "none"];
	}
	else if(opcion === "6") {
		return [document.getElementById("elementosGarantias1").style.display = "block",
				document.getElementById("elementosGarantias2").style.display = "block",
				document.getElementById("elementosGarantias3").style.display = "block",
				document.getElementById("elementosGarantias4").style.display = "block",
				document.getElementById("elementosGarantias5").style.display = "block",
				document.getElementById("elementosGarantias6").style.display = "block"];
	}			
	else {
		return [document.getElementById("elementosGarantias1").style.display = "none",
				document.getElementById("elementosGarantias2").style.display = "none",
				document.getElementById("elementosGarantias3").style.display = "none",
				document.getElementById("elementosGarantias4").style.display = "none",
				document.getElementById("elementosGarantias5").style.display = "none",
				document.getElementById("elementosGarantias6").style.display = "none"];
	}	
}

//Resultados del reporte

var suPre = {
		"spCB1": "No se suministraron dos copias originales del SU-PRE.",
		"spCB2": "En el SU-PRE, el nombre del cliente no aparece igual que en el padrón o registro mercantil.",
		"spCB3": "En el SU-PRE, la fecha de revisión no está correcta.",
		"spCB4": "No se suministró la autorización de la tasa especial.",
		"spCB5": "En el SU-PRE, los ingresos del último semestre no son coherentes con los estados financieros.",
		"spCB6": "En el SU-PRE, no fueron incluidos el Consejo de gerencia y los principales funcionarios.",
		"spCB7": "El plazo solicitado no esta acorde con el propósito.",
		"spCB8": "La modificación solicitada no ha sido expresada.",
		"spCB9": "El motivo del cambio de garantía no ha sido expresado.",
		"spCB10": "La recomendación no fue completada correctamente.",
		"spCB11": "No se especificó para que actividad se utilizará el financiamiento.",
		"spCB12": "No se detallaron los montos adeudados a saldar con la solicitud.",
		"spCB13": "No se mencionaron los acreedores de las deudas a saldar.",
		"spCB14": "No se suministró cotización, presupuesto, tasación y/o acto de venta del bien a adquirir.",
		"spCB15": "No se suministró la tasación del inmueble.",
		"spCB16": "No se suministró el acto de venta.",
		"spCB17": "No se suministró la documentación legal de la empresa vendedora del inmueble.",
		"spCB18": "No se suministró el informe de revisión por parte de la Gerencia de Valuaciones.",
		"spCB19": "Los destinos expuestos no totalizan el monto solicitado.",
		"spCB20": "No se mencionaron los negocios colaterales que posee con el Banco.",
		"spCB21": "No se mencionó el porcentaje de participación de sus pólizas con la aseguradora del grupo.",
		"spCB22": "No se presentaron los motivos del aumento o disminución de los ingresos.",
		"spCB23": "No se verificó si posee cartas de cartas de crédito, avales o contingencias.",
		"spCB24": "No se mencionó la situación del sector donde se desenvuelve el cliente.",
		"spCB25": "No se suministró el buró de crédito.",
		"spCB26": "No se suministró la central de riesgos.",
		"spCB27": "No se indicó a que grupo de riesgos pertenece.",
		"spCB28": "Sus relacionados no están indicados en el SU-PRE.",
		"spCB29": "No se suministraron los buró de crédito de los relacionados que poseen financiamientos en el Banco."
		};

var garantia = {
		"gCB1": "La tasación no está vigente.",
		"gCB2": "El tasador no fue autorizado por el Banco.",
		"gCB3": "Los cálculos realizados por el tasador no están correctos.",
		"gCB4": "No se suministró el certificado de título del propietario.",
		"gCB5": "No se recomendó en el Su-pre el desembolso con excepción.",
		"gCB6": "No se menciona con qué compañía y por qué monto está asegurada.",
		"gCB7": "No se suministraron la documentación o detalles referentes a la garantía prendaria.",
		"gCB8": "No se menciona quién es el garante, qué relación tiene con el solicitante o a qué se dedica.",
		"gCB9": "No se suministraron los estados financieros del garante."
		};

var estadosFinancieros = {
		"efCB1": "No se suministraron estados financieros firmados por el cliente.",
		"efCB2": "No se suministraron estados financieros preparados por un Contador Público Autorizado.",
		"efCB3": "No se suministraron estados financieros preparados por un Contador Público Autorizado independiente.",
		"efCB4": "No se suministraron estados financieros auditados preparados por una firma de auditoría independiente.",
		"efCB5": "Los estados financieros auditados no están sellados por la firma de auditores o no contienen el dictamen de la misma.",
		"efCB6": "No se suministró declaración de impuestos sobre la renta.",
		"efCB7": "La fecha de cierre no concuerda con la indicada en la documentación legal.",
		"efCB8": "No se suministró corte provisional a fecha reciente.",
		"efCB9": "No se suministraron estados gerenciales.",
		"efCB10": "Las deudas reportadas en el buró de crédito no concuerda con las presentadas en los estados financieros.",
		"efCB11": "El capital social presentado en los estados financieros no corresponde al reportado en el registro mercantil.",
		"efCB12": "Los estados financieros suministrados presentan discrepancias en las utilidades acumuladas.",
		"efCB13": "Los estados financieros presentaron variaciones significativas de las cuales no se expresaron los motivos."
		};

var documentacionLegal = {
		"dlCB1": "No se suministró registro mercantil.",
		"dlCB2": "No se suministró nómina de socios o accionistas reciente.",
		"dlCB3": "No se suministró acta de asamblea que nombre o ratifique la gerencia actual.",
		"dlCB4": "No se suministró acta de asamblea a través de la cual se autorice la solicitud del financiamiento.",
		"dlCB5": "No se suministró los estatutos sociales.",
		"dlCB6": "No se suministró documentación legal que soporte aumentos de capital, venta de acciones, cambio de fecha de cierre o cambio de nombre comercial."
		};

function reporteSupre() {
	var reporte = [];
	for (var i=1; i<30; i++){
		if(document.getElementById("spCB" + i).checked === false && document.getElementById("spCB" + i).disabled === false){
			reporte.push(suPre["spCB" + i]);
			};
		};
	return reporte;
	};

function reporteGarantia() {
	var reporte = [];
	var opcion = document.getElementById("dropdownGarantia1").value;
	if(opcion === "hipotecaria") {
		for (var i=1; i<7; i++){
			if(document.getElementById("gCB" + i).checked === false && document.getElementById("gCB" + i).disabled === false){
				reporte.push(garantia["gCB" + i]);
				};
			};
		return reporte;	
		}
	else if(opcion === "prendaria") {
		if(document.getElementById("gCB7").checked === false){
			reporte.push(garantia["gCB7"]);
			};
		return reporte;	
		}
	else if(opcion === "solidaria") {
		for (var i=8; i<10; i++){
			if(document.getElementById("gCB" + i).checked === false){
				reporte.push(garantia["gCB" + i]);
				};
			};
		return reporte;
		}
	else {
		return "[No se eligió el tipo de garantía]";
	}
}

function reporteGarantiaSolidaria() {
	var reporte = [];
	for (var i=8; i<10; i++){
		if(document.getElementById("gCB" + i).checked === false){
			reporte.push(garantia["gCB" + i]);
			};
		};
	return reporte;
	};	

function reporteGarantiaPrendaria() {
	var reporte = [];
	if(document.getElementById("gCB7").checked === false){
		reporte.push(garantia["gCB7"]);
		};
	return reporte;
	};

function reporteGarantiaHipotecaria() {
	var reporte = [];
	for (var i=1; i<7; i++){
		if(document.getElementById("gCB" + i).checked === false && document.getElementById("gCB" + i).disabled === false){
			reporte.push(garantia["gCB" + i]);
			};
		};
	return reporte;
	};	

function reporteEstados() {
	var reporte = [];
	for (var i=1; i<14; i++){
		if(document.getElementById("efCB" + i).checked === false && document.getElementById("efCB" + i).disabled === false){
			reporte.push(estadosFinancieros["efCB" + i]);
		};
	};
	return reporte;
	};

function reporteLegal() {
	var reporte = [];
	for (var i=1; i<7; i++){
		if(document.getElementById("dlCB" + i).checked === false && document.getElementById("dlCB" + i).disabled === false){
			reporte.push(documentacionLegal["dlCB" + i]);
		};
	};
	return reporte;
	};

//Generador de reporte en PDF

function generarReporte() {
	var nombreCliente = document.getElementById("nombreCliente").value;
	var opcion = document.getElementById("dropdownCliente").value;

	var suPre = reporteSupre();
	var garantia = reporteGarantia();
	var estados = reporteEstados();
	var legal = reporteLegal();

	if(opcion === "fisica") {
		var resultado = suPre.concat(garantia, estados);
	}
	else{
		var resultado = suPre.concat(garantia, estados, legal);
	}

	var doc = new jsPDF('l','mm','a4')
	doc.setLineWidth(70);
	doc.setFontSize(22);
	doc.text(15, 20, 'Depurador [Beta]');
	doc.setFontSize(16);
	doc.text(15, 30, "Caso: " + nombreCliente);
	doc.setFontSize(13);
	doc.text(15, 40, 'Reporte de depuración:');
	doc.text(15, 50, resultado);
	
	// Save the PDF
	doc.save('Depurador.pdf');
}

