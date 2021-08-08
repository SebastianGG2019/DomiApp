

	$(document).ready(function(){
	$('.filtrosNuevos .filtro-talla .opcoes li').each(function(){
		var textoA = $(this).find('a').text();
		$(this).find('a').html(reducirCaracteres(textoA, 9));
	});
});
function reducirCaracteres(textoA, numeroChar)
	{	
		var newText = "";

		if (textoA.length > numeroChar) {
			for (var i=0;i<= numeroChar - 3;i++) 
			{
				newText= newText + textoA.charAt(i);
			}

			newText = newText;

			return newText;
		}
		else{
			return textoA;
		}
	}

var misNecesidades = [
		$(".box-filtro.checkbox.filtro-talla a[title='S']"),
		$(".box-filtro.checkbox.filtro-talla a[title='M']"),
		$(".box-filtro.checkbox.filtro-talla a[title='L']"),
		$(".box-filtro.checkbox.filtro-talla a[title='XL']"),
		$(".box-filtro.checkbox.filtro-talla a[title='XS']"),
		$(".box-filtro.checkbox.filtro-talla a[title='XXL']"),
		$(".box-filtro.checkbox.filtro-talla a[title='U']"),
		$(".box-filtro.checkbox.filtro-talla a[title='L-XL']"),
		$(".box-filtro.checkbox.filtro-talla a[title='S-M']"),
	];
	var misNecesidadesIngles = [
		"S",
		"M",
		"L",
		"XL",
		"XS",
		"XXL",
		"U",
		"L-M",
		"S-M",
	];
function cambiarFiltrotallas( objeto1, objeto2) {
	for (var i = 0 ; i <= objeto1.length; i++) {
		objeto1[i].html(objeto2[i]);
	}
}
setTimeout(function(){ 
	for (var i = 0 ; i <= misNecesidades.length; i++) {
		misNecesidades[i].html(misNecesidadesIngles[i]);
	}
},3000);
$(document).ready(function(){
	var tituloCategory = $(".categoria .bread-crumb .last").text();
	$(".categoria h2.titulo-sessao").html(tituloCategory);
	$(".categoriaNew h2.titulo-sessao").html(tituloCategory);
	$(".categoria.busca h2.titulo-sessao").html("Resultado de busqueda");
});
window.addEventListener("hashchange",function(){
	$(".client-document.input.pull-left.text.required.mask label").eq(0).html("Número de cédula");	
});
$(document).ready(function(){
	var agregar = $(".filtrosNuevos #admake-advanced-filter.fixed");
	agregar.append("<div class='box-filtro checkbox nuevo'><div class='sub-titulo'><a href='/New'>LO NUEVO</a></div></div>");
	agregar.append("<div class='box-filtro checkbox Basicos'><div class='sub-titulo'><a href='/BASICOS'>Basicos</a></div></div>");
	agregar.append("<div class='box-filtro checkbox desc'><div class='sub-titulo'><a href='/Sale'>SALE</a></div></div>");
});

$( document ).ready(function() {
  var pathname = window.location.pathname; 
	if(pathname === "/nueva-coleccion"){
	$( ".search-single-navigator" ).each(function( index ) {
		var valor = $(this).find("a").attr("href");
		if (index == 0) {
			var urlAd = valor.replace(valor,"https://www.racketball.com.co/new/hombre");
			var valorfinal = urlAd;
		}else{
			var urlAd = valor.replace(valor,"https://www.racketball.com.co/new/mujer");
			var valorfinal = urlAd;
		}

		$(this).find("a").attr("href", valorfinal);
	});	
	}
});
$( document ).ready(function() {
  var agregar = $("li.filtro-ativo").hasClass("filtro-ativo");
  if (agregar == true) {
  	$(".Pbanner h1").css("display","none");
  	$(".vitrinaB").eq(1).css("display","none");
  	$(".vitrinaB.filtros").css("display","block");
  	$(".tituloEnFiltros").css("display","block")

  }
});
$( document ).ready(function() {
  var pathname = window.location.pathname;
  var agregar = $("#admake-advanced-filter");
  var pintar =`
	<div class='box-filtro checkbox genero'>
		<div class='sub-titulo'>
			<h3>Genero</h3>
			<div class='opcoes'>
				<ul>
					<li>
					<i class="fa fa-square-o"></i>
					<a href='https://www.racketball.com.co/new/hombre'>Hombre</a>
					</li>
					<li class='last'>
					<i class="fa fa-square-o"></i>
					<a href='https://www.racketball.com.co/new/mujer'>Mujer</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
   `; 
	if(pathname === "/nueva-coleccion"){
		$("div#admake-advanced-filter").prepend(pintar);
	}else if(pathname === "/sale/all"){
		$("div#admake-advanced-filter").prepend(pintar);
	}else if(pathname === "/sale/all"){
		$("div#admake-advanced-filter").prepend(pintar);
	}else if(pathname === "/mujer"){
		agregar.append("<div class='box-filtro checkbox nuevo'><div class='sub-titulo'><a href='/New/mujer'>LO NUEVO</a></div></div>");
	}else if(pathname === "/hombre"){
		agregar.append("<div class='box-filtro checkbox nuevo'><div class='sub-titulo'><a href='/New/hombre'>LO NUEVO</a></div></div>");
	}
});
$( document ).ready(function() {
  var pathname = window.location.pathname; 
	if(pathname === "/sale/all"){
	$( ".search-single-navigator" ).each(function( index ) {
		var valor = $(this).find("a").attr("href");
		if (index == 0) {
			var urlAd = valor.replace(valor,"https://www.racketball.com.co/sale/hombre");
			var valorfinal = urlAd;
		}else{
			var urlAd = valor.replace(valor,"https://www.racketball.com.co/sale/mujer");
			var valorfinal = urlAd;
		}

		$(this).find("a").attr("href", valorfinal);
	});	

	}
	if ($(".box-filtro.checkbox.filtro-categoria li").length == 1) {
		$(".box-filtro.checkbox.filtro-categoria").css("display","none");
	}
		$(".box-filtro.checkbox li.filtro-ativo").clone().appendTo($(".navigation-tabs"));
		$(".box-filtro.checkbox li.filtro-ativo").next().clone().appendTo($(".navigation-tabs"));
	$(".navigation-tabs").append("<div class='container' style='display:flex;'>"+filtro+"</div>");
});
var setime= setTimeout(function(){$('div#category-extra-filtro').append('<div class="Sfiltros"><h2>Mis Filtros</h2></div>'),700;});
var setime= setTimeout(function(){$( "div#admake-advanced-filter .filtro-ativo" ).parent().clone().appendTo( "div#category-extra-filtro .Sfiltros" ), 1000});

$( document ).ready(function() {
	$(".modal-header").append("<div><a href='https://www.lacopa.co/' class='close'>X</a></div>");
});	
$(document).ready(function(){
  $("a.pestana-vitrina1").click(function () {  
        $("a.pestana-vitrina1").css("background" , "#2a2a2a"); 
        $("a.pestana-vitrina1").css("color" , "white");
        $("a.pestana-vitrina2").css("background" , "white"); 
        $("a.pestana-vitrina2").css("color" , "black");
        $("a.pestana-vitrina3").css("background" , "white");
        $("a.pestana-vitrina3").css("color" , "black"); 
        $("a.pestana-vitrina4").css("background" , "white");
        $("a.pestana-vitrina4").css("color" , "black");
        $("a.pestana-vitrina5").css("background" , "white");
        $("a.pestana-vitrina5").css("color" , "black");
        $('.seccion-vitrina.dos').css("display" , "none");
        $('.seccion-vitrina.tres').css("display" , "none");
        $('.seccion-vitrina.cuatro').css("display" , "none");
        $('.seccion-vitrina.cinco').css("display" , "none");
        $('.seccion-vitrina.uno').css("display" , "block");
    });
  $("a.pestana-vitrina2").click(function () {  
        $("a.pestana-vitrina2").css("background" , "#2a2a2a"); 
        $("a.pestana-vitrina2").css("color" , "white");
        $("a.pestana-vitrina1").css("background" , "white");
        $("a.pestana-vitrina1").css("color" , "black");  
        $("a.pestana-vitrina3").css("background" , "white");
        $("a.pestana-vitrina3").css("color" , "black");
        $("a.pestana-vitrina4").css("background" , "white");
        $("a.pestana-vitrina4").css("color" , "black");
        $("a.pestana-vitrina5").css("background" , "white");  
        $("a.pestana-vitrina5").css("color" , "black");
        $('.seccion-vitrina.uno').css("display" , "none");
        $('.seccion-vitrina.tres').css("display" , "none");
        $('.seccion-vitrina.cuatro').css("display" , "none");
        $('.seccion-vitrina.cinco').css("display" , "none");
        $('.seccion-vitrina.dos').css("display" , "block");
    });
  $("a.pestana-vitrina3").click(function () {  
        $("a.pestana-vitrina3").css("background" , ""); 
        $("a.pestana-vitrina3").css("color" , "white");
        $("a.pestana-vitrina2").css("background" , "white");
        $("a.pestana-vitrina2").css("color" , "black");
        $("a.pestana-vitrina1").css("background" , "white");
        $("a.pestana-vitrina1").css("color" , "black");
        $("a.pestana-vitrina4").css("background" , "white");
        $("a.pestana-vitrina4").css("color" , "black");
        $("a.pestana-vitrina5").css("background" , "white"); 
        $("a.pestana-vitrina5").css("color" , "black");
        $('.seccion-vitrina.dos').css("display" , "none");
        $('.seccion-vitrina.uno').css("display" , "none");
        $('.seccion-vitrina.cuatro').css("display" , "none");
        $('.seccion-vitrina.cinco').css("display" , "none");
        $('.seccion-vitrina.tres').css("display" , "block");
    });
   $("a.pestana-vitrina4").click(function () {  
        $("a.pestana-vitrina3").css("background" , "white");
        $("a.pestana-vitrina3").css("color" , "black");
        $("a.pestana-vitrina2").css("background" , "white"); 
        $("a.pestana-vitrina2").css("color" , "black");
        $("a.pestana-vitrina1").css("background" , "white");
        $("a.pestana-vitrina1").css("color" , "black");
        $("a.pestana-vitrina4").css("background" , "#2a2a2a");
        $("a.pestana-vitrina4").css("color" , "white"); 
        $("a.pestana-vitrina5").css("background" , "white"); 
        $("a.pestana-vitrina5").css("color" , "black");
        $('.seccion-vitrina.dos').css("display" , "none");
        $('.seccion-vitrina.tres').css("display" , "none");
        $('.seccion-vitrina.uno').css("display" , "none");
        $('.seccion-vitrina.cinco').css("display" , "none");
        $('.seccion-vitrina.cuatro').css("display" , "block");
    });
    $("a.pestana-vitrina5").click(function () {  
        $("a.pestana-vitrina3").css("background" , "white");
        $("a.pestana-vitrina3").css("color" , "black");
        $("a.pestana-vitrina5").css("color" , "white"); 
        $("a.pestana-vitrina2").css("background" , "white"); 
        $("a.pestana-vitrina2").css("color" , "black");
        $("a.pestana-vitrina1").css("background" , "white");
        $("a.pestana-vitrina1").css("color" , "black");
        $("a.pestana-vitrina4").css("background" , "white");
        $("a.pestana-vitrina4").css("color" , "black");
        $("a.pestana-vitrina5").css("background" , "#2a2a2a"); 
        $('.seccion-vitrina.dos').css("display" , "none");
        $('.seccion-vitrina.tres').css("display" , "none");
        $('.seccion-vitrina.uno').css("display" , "none");
        $('.seccion-vitrina.cuatro').css("display" , "none");
        $('.seccion-vitrina.cinco').css("display" , "block");
    });
});
var pathname = window.location.pathname; 
var newString = pathname.charAt(1);
console.log(newString);
if (newString == "m") {
	var completaURL = "mujer";
}else{
	var completaURL = "hombre";
}
$("#content_header #logo #link_items .portal-totalizers-ref").click(function () {
	$("#link_items .pay .detail_pay").toggleClass("activo");
});



$("a#btn__filter").append("<div class='flechaAbajo'></div>");
$(".filters__content").append("<div class='flechaAbajo OrdenarPor'></div>");
$("h5.Especs").append("<span class='flechaAbajo'></span>");
$("h5.Especs").click(function () {
	$(this).find(".flechaAbajo").toggleClass("Arriba");
});
$("a#btn__filter").click(function () {
	$(this).find(".flechaAbajo").toggleClass("Arriba");
});
$("select#O").click(function () {
	$(".flechaAbajo.OrdenarPor").toggleClass("Arriba");
});
$(".search-multiple-navigator fieldset label").click(function () {
		var texto = $(this).text();
		var clase = $(this).attr("class");
		var agregar = `
			<label class='filtroSelec' class='${clase}'>${texto}</label>
		`;
		$("div#FiltrosSelecionados").append(agregar);	
});
setInterval(function(){
	var seen = {}; 
	$('label.filtroSelec').each(function() { 
		var txt = $(this).text(); 
		if (seen[txt]) $(this).remove(); 
		else seen[txt] = true;
	});
	$("div#FiltrosSelecionados label").each(function (index) {
		$("div#FiltrosSelecionados label").eq(index).click(function() {
			$("label.sr_selected").eq(index).click();
			$("div#FiltrosSelecionados label").eq(index).remove();
		});
	});
}, 500);
$("div#FiltrosSelecionados").append("<div class='BorrarFiltros'><a href='#'>Borrar Filtros</a></div>");

$(".BorrarFiltros").click(function () {
	$("label.sr_selected").click();
	$("div#FiltrosSelecionados label").remove();	
});
$('.search-multiple-navigator fieldset > h5').click(function(e){

	e.preventDefault()
    $(this).next().toggleClass('openFil')

});
$(".search-multiple-navigator fieldset label").click(function () {
	 $(this).parent().removeClass("openFil");
	 $(".h5.Especs.flechaAbajo").removeClass('Arriba');
});

$(".paisC").append("<div class='paises'><a>Pero</a><a>Pero</a><a>USA</a><a>Ecuador</a><a>Usa español</a></div>");

$(".paisC").click(function () {
	$(".paises").toggleClass('Activo');
});

var titulo = $("div#titlecategory").text().replace("%20", " ");;

console.log(titulo);

$("div#titlecategory").html(titulo);


$( document ).ready(function() {
  var pathname = window.location.pathname;
  var newString = pathname.charAt(1);
  var agregar = $("li.filtro-ativo").hasClass("filtro-ativo");
  if (agregar == true) {
  	$(".Pbanner h1").css("display","none");
  	$(".vitrinaB").eq(1).css("display","none");
  	$(".vitrinaB.filtros").css("display","block");
  	$(".tituloEnFiltros").css("display","block");
  }
});
	$( ".filters__content" ).each(function( index ) {
		$(this).find("select#O option").eq(7).html("Fecha de lanz...");
		$(this).find("select#O option").eq(8).html("mejor des...");
	 });
var texto $( "#content1, #content2, #content3" ).find('span').text();
$( "#content1, #content2, #content3" ).find('span').each(function( index ) {
	var texto = $( "#content1, #content2, #content3" ).find('span').eq(index).text();
	if (texto == " N/A ") {
		$( "#content1, #content2, #content3" ).find('span').eq(index).html(" ");
	}
});

setTimeout(function () {
  var newS = null != readCookie("gallPopup");
  console.log(newS);
  if (newS == true) {
    $(".form-birthday").css("display","none");
  }else{
    createCookie("gallPopup", "gall_pop");
  	$(".form-birthday").css("display","block");
  }
}, 1000);
$('.close-birthday-popup p').click(function(){
       $.cookie('gallPopup', 'gall_pop')
});

$(".close-birthday-popup p").on("click", function (e) {
        e.preventDefault();
        $(".form-birthday").fadeOut(1000);
        createCookie("gallPopup","code-20",);
    });
setTimeout(function () {
	    var newS = null != readCookie("gallPopup");
	    console.log(newS);
    if (newS == true) {
        $(".form-birthday").hide().fadeIn(1000);
    }else{
    	$(".form-birthday").hide();
    }
}, 1000);

$(".product-details .product-name .productName").text().indexOf(" -","0");
const array = $(".produto .product-details .product-name .productName").text().split(" - ");
$(".produto .product-details .product-name .productName").html(array[0]);

//filtro familia 
$(document).on('change', '.Familia', function(event) {
    setTimeout(function(){
    	let validacion = $(".Modelo option.active").length;
    	console.log(validacion);
    	if (validacion == 0) {
    		$(".Modelo option").addClass("active");
    	}
     }, 1000);
});


// =========== SCROLL A EVENTOS =========== //
$(window).scroll(function(){

	var barra=$(window).scrollTop();
	var posicion= barra* 0.1;

	$('#particles-js').css({
		'background-position' : '0 -'+ posicion +'px'
		});
	});
$(window).scroll(function(){
	$('#FidelidadButton').click(function(){

		if (window.location.pathname == "/") {
			$('html, body').animate({scrollTop: $("#Fidelidad").offset().top}, 3000);
			console.log('home');
		}else{
			url = "/#Fidelidad";
			$(location).attr('href',url);
		}

	});
});
if($(".produto").length > 0) {window.alert=function(){alert("Su producto fue agregado al carrito")};}
$("a.buy-in-page-button").click(function () {
	confirm("Su producto fue agregado al carrito")
});
setInterval(function(){
	if ($(".Modelo option.active").length == 0) {
		console.log($(".Modelo option.active").length);
			//agregar clase
		$(".Modelo option").each(function(index){
		 	$(this).addClass("active");
		});
	}
}, 500);


$(document).on('change', '.Familia', function(event) {
     var vehiculo = $(".vehiculo option:selected").text();
     var familia = $(".Familia option:selected").text();
  	//se limpia la seleccion
  	
     setTimeout(function(){
     	$(".Modelo option").removeClass("active");
     }, 500);
  	 
     var settings = {
       "async": true,
       "crossDomain": true,
       "url": "/api/catalog_system/pub/facets/search/Categorias/"+vehiculo+"/"+familia+"?map=c,specificationFilter_18,specificationFilter_19",
       "method": "GET",
       "headers": {
         "x-vtex-api-appkey": "vtexappkey-iasociadas-JTTJRO",
         "x-vtex-api-apptoken": "MXYXJAQFBZQDWRZTQJCOXICZZJLORIUTIBGUDKNRTUMNNYYISVYVZFTEUZXZOBNTEWUULEQGWKUDVOLBLDVWJYUDHBADMNDRGTIQDDXOERZOKQJFNWOLGRJFBRMKENUI",
         "content-type": "application/json",
         "cache-control": "no-cache",
         "postman-token": "72028821-2c14-b8cf-af7f-055d20bb4075"
       },
       "processData": false
       }
       $.ajax(settings).done(function (response) {
       var arregloE = response.SpecificationFilters.Modelo;
       $.each(arregloE, function( index, element ) {
         var nombre = element.Name;
         var link = element.Link.toString();
         $(".Modelo").append("<option class='"+nombre+"' value="+link+">"+nombre+"</option>")
       });
       });
  		//llamado a al JSON
      var settings2 = {
       "async": true,
       "crossDomain": true,
       "url": "/api/catalog_system/pub/facets/search/Categorias/"+vehiculo+"/"+familia+"?map=c,specificationFilter_18,specificationFilter_19",
       "method": "GET",
       "headers": {
         "x-vtex-api-appkey": "vtexappkey-iasociadas-JTTJRO",
         "x-vtex-api-apptoken": "MXYXJAQFBZQDWRZTQJCOXICZZJLORIUTIBGUDKNRTUMNNYYISVYVZFTEUZXZOBNTEWUULEQGWKUDVOLBLDVWJYUDHBADMNDRGTIQDDXOERZOKQJFNWOLGRJFBRMKENUI",
         "content-type": "application/json",
         "cache-control": "no-cache",
         "postman-token": "72028821-2c14-b8cf-af7f-055d20bb4075"
       },
       "processData": false
       }
      $.ajax(settings2).done(function (response) {
       var arreglo1 = response.SpecificationFilters["Familia + Modelo"];
       $.each(arreglo1, function( index, element ) {
         var nombreCompleto = element.Name;
         var nombreArray = nombreCompleto.split(" : ");
         var nombreFinal = nombreArray[0];
         var volverMinuscula = familia.toLowerCase(); 
		 var capitalizarNmbre = nombreFinal.toLowerCase();

         if (nombreFinal == familia || capitalizarNmbre == volverMinuscula) {
         	setTimeout(function(){
         		//agregar clase
	         	$(".Modelo option").each(function(index){
		         	if ($(this).text() == nombreArray[1]) {
		         		console.log(capitalizarNmbre, nombreFinal)
		         		$(this).addClass("active");
		         	}
		        });
	        }, 500);
         }
       });
       });
  		
});
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "/api/catalog_system/pub/facets/search/Categorias/?map=c",
  "method": "GET",
  "headers": {
    "x-vtex-api-appkey": "vtexappkey-iasociadas-JTTJRO",
    "x-vtex-api-apptoken": "MXYXJAQFBZQDWRZTQJCOXICZZJLORIUTIBGUDKNRTUMNNYYISVYVZFTEUZXZOBNTEWUULEQGWKUDVOLBLDVWJYUDHBADMNDRGTIQDDXOERZOKQJFNWOLGRJFBRMKENUI",
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "72028821-2c14-b8cf-af7f-055d20bb4075"
  },
  "processData": false
  }

  $.ajax(settings).done(function (response) {
  var arregloC = response.SpecificationFilters["Marca de Vehículo"];
  $.each(arregloC, function( index, element ) {
    var nombre = element.Name;
    var link = element.Link.toString();
    $(".vehiculo").append("<option class='"+nombre+"' value="+link+">"+nombre+"</option>")
  });
  
  });
setTimeout(function(){
   $('.buy-in-page-button').click(function() {
    	$('.group_0 input').each(function(index){
    		 $(this).attr('checked');
		});
      	if($('.group_0 input').attr('checked')){
        	$(".MensajeS").html('<p>Tu producto se agrego con éxito.</p>');
        	// Recargo la página
        	var settime= setTimeout(function(){parent.location.reload();},      1000);
    	}else{$(".MensajeS").html('<p>Selecciona una talla</p>');}
        
    });
}, 3000);
$( document ).ready(function() {
	$('.buy-in-page-button').click(function() {
      	if($('.group_0 input:checked').length > 0 && $('.group_1 input:checked').length > 0){
      		console.log("CLICKKKK")
        	$(".contenedorMax").css("display","block");

        	// Recargo la página
    	}else{$(".item-dimension-Talla").append('<p class="mensajeError">Selecciona la talla</p>'); }        
    });
    $(".contenedorMax .close").click(function () {
		$(".contenedorMax").css("display","none");
		setTimeout(function(){location.reload();}, 1000); s
	});
});
	if ($('.group_1').val() == undefined) {
		console.log("yolooooo")
	}


$('div#FidelidadButton').click(function(){
	$('html, body').animate({scrollTop: $("#Fidelidad").offset().top}, 1100);
			console.log('home');
});


var categoria = $("div[itemprop='brand'] meta[itemprop='name']").attr("content");
if (categoria == "Arnoia") {
	$("#image").append("<img class='imgArnoia' src='https://librerialerner.vteximg.com.br/arquivos/avion.png'/>");


	var d = new Date();

	var month = d.getMonth() +1;
	var day = d.getDate();
	var days2 = day + 33;

	var output = d.getFullYear() + '/' +
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day; 
	if (days2 >= 30) {
		var day3 =  days2 -30;
		var month2 = month + 1;
		var dayFinal = day3 - 13  ;
		console.log(day3)
		var output2 = d.getFullYear() + '/' +
	    (month2<10 ? '0' : '') + month2 + '/' +
	    (day3<10 ? '0' : '') + day3; 
	    console.log(output2);
	    $(".nombre").append("<div class='autorc' style='margin:10px; padding:5px; color:red; border:1px solid red;width:90%;'>Este libro será despachado desde nuestra bodega en Bogotá entre los días "+output+" y "+output2+".</div>");
	}else{
		var output2 = d.getFullYear() + '/' +
	    (month<10 ? '0' : '') + month + '/' +
	    (day2<10 ? '0' : '') + day2; 
	    console.log(output2);
	    $(".nombre").append("<div class='autorc' style='margin:10px;  padding:5px;color:red; border:1px solid red;width:90%;'>Este libro será despachado desde nuestra bodega en Bogotá entre los días "+output+" y "+output2+".</div>");
	}
	console.log(output)
}

$(".nombre").append("<div class='autorc'>Este libro será despachado desde nuestra bodega en Bogotá entre los días 2021/05/07 y 2021/06/06.</div>");

var familia = $(".Familia").length
var anio = $(".Modelo").length
var cilindraje = $(".Motor").length
var vehiculo = $(".vehiculo option:selected").text();

$(".botonF").click(function () {
	if (vehiculo == "Marca del Vehículo" || familia == 1 || anio == 1 || cilindraje == 1) {
		$(".contenedorMax").css("display","block");
	}
});



$(document).on('change', '.Modelo', function(event) {
     var vehiculo = $(".vehiculo option:selected").text();
     var familia = $(".Familia option:selected").text();
     var modelo = $(".Modelo option:selected").text();
     
     var settings = {
       "async": true,
       "crossDomain": true,
       "url": "/api/catalog_system/pub/facets/search/Categorias/"+vehiculo+"/"+familia+"/"+modelo+"?map=c,specificationFilter_18,specificationFilter_19,specificationFilter_20",
       "method": "GET",
       "headers": {
         "x-vtex-api-appkey": "vtexappkey-iasociadas-JTTJRO",
         "x-vtex-api-apptoken": "MXYXJAQFBZQDWRZTQJCOXICZZJLORIUTIBGUDKNRTUMNNYYISVYVZFTEUZXZOBNTEWUULEQGWKUDVOLBLDVWJYUDHBADMNDRGTIQDDXOERZOKQJFNWOLGRJFBRMKENUI",
         "content-type": "application/json",
         "cache-control": "no-cache",
         "postman-token": "72028821-2c14-b8cf-af7f-055d20bb4075"
       },
       "processData": false
       }
       $.ajax(settings2).done(function (response) {
       var arreglo1 = response.SpecificationFilters["Familia + Modelo + Cilindraje"];
	       $.each(arreglo1, function( index, element ) {
		         var nombreCompleto = element.Name;
		         console.log(nombreCompleto);
		         var nombreArray = nombreCompleto.split(" : ");
		         console.log(nombreArray);
		         var nombreFinal = nombreArray[0];
		         var modeloFiltro = nombreArray[1]
		         var volverMinuscula = familia.toLowerCase(); 
				 var capitalizarNmbre = nombreFinal.toLowerCase();

		         if ((nombreFinal == familia || capitalizarNmbre == volverMinuscula) && modelo == modeloFiltro) {
		         	setTimeout(function(){
		         		//agregar clase
			         	$(".Motor option").each(function(index){
				         	if ($(this).text() == nombreArray[2]) {
				         		console.log(capitalizarNmbre, nombreFinal)
				         		$(this).addClass("active");
				         	}
				        });
			        }, 500);
		         }else{
		           
		         }
	  		 });
       	 });

});
$(".product-field.product_field_37.product-field-type_1").each(function(index){
 	var codigoReferencia = $(".product-field.product_field_37.product-field-type_1 li").eq(index).text();
	$(this).empty();
	$(this).html(codigoReferencia)
});
$(".product-field.product_field_37.product-field-type_1").text(function(index, value) {
    return value.replace('Codigo referencia', '');
});
var codigoReferencia = $(".product-field.product_field_37.product-field-type_1 li").text();
console.log(codigoReferencia);
$(".product-field.product_field_37.product-field-type_1").html(codigoReferencia);


if ($(".Motor option").length == 1) {
	$.ajax(settings).done(function (response) {
       var arregloE = response.SpecificationFilters.Cilindraje;
       $.each(arregloE, function( index, element ) {
         var nombre = element.Name;
         var link = element.Link.toString();
         $(".Motor").append("<option class='"+nombre+"' value="+link+">"+nombre+"</option>")
       });
     });
}


	$('.box-item .add').click(function() {
		console.log("click");
        $(this).parent().parent().prev().css("display","block");
    });
    $(".botonesPopUpPro .close").click(function () {
		$(".contenedorVitrina").css("display","none");
        	// Recargo la página
		setTimeout(function(){location.reload();}, 1000); 
	});
$('.box-item .add').parent().parent().prev();



var categoria = $("title").text();
var categoriaFinal = categoria.replace(" ","."); 
var categoriaFinalFinal = categoriaFinal.replace(" ","."); 
var finalCategory = categoriaFinalFinal.replace(" | LibreriaLerner.com.co","").toUpperCase();
console.log(finalCategory)
$( document ).ready(function() {
	var category = location.pathname;
	var categoria = category.split("/");

	var categoriaFinal = categoria[1].replace("-","."); 
	var categoriaFinal1 = categoriaFinal.replace("-","."); 
	var categoriaFinal2 = categoriaFinal1.replace("-",".");
	var categoriaFinal3 = categoriaFinal2.replace("-","."); 
	var categoriaFinal4 = categoriaFinal3.replace("-",".").toUpperCase();
	console.log(categoriaFinal4)
	if (categoriaFinal4 == "VARIOS") {
		$(".Categorias-Destacadas").css("display","block");	
	}else{
		$(".Categorias-Destacadas."+categoriaFinal4+"").css("display","block");
	}
});







$( window ).on( 'hashchange', function(  ) {
    var porpUp= `
        <div class='contenedorMax'>
            <div class='contenedor porpUp'>
                <div class='close'>X</div>
                <h1>¡SORPRESA!</h1>
                <p>Tu compra es mayor a $60.000 pesos hemos agregado unas miniaturas a tu pedido</p>
            </div>
        </div>
    `;
    var hash = window.location.hash.substring(1);
    if (hash == "/payment" || hash =="/profile" || hash=="/email"){
        $(".contenedorMax").css("display","fixed")
        $(".container.container-main.container-order-form").append(porpUp);
        $(".close").click(function () {
            $(".contenedorMax").css("display","none");
        });
     }
} );
$(document).ready(function() {
var Desk = $('.productDescription').html();    
	 var limit = 650;
    var descrip = $('.Resena').text();
     console.log(descrip)
        var text = $('.Resena').text();
        text = text.substr(0,limit);
      	descrip2 = $('.Resena').html(text+'... ');
      	descripinit = descrip2.text();
	$('.boton-buy').prepend(' <i class="change">(Ver más)</i> <i class="changeM" style="display:none">(Ver menos)</i>');   
	$('.change').click(function(){ 
    $('.Resena').html(descrip);$(".changeM").css("display","block");$(".change").css("display","none")});
	$('.changeM').click(function(){ 
      $('.Resena').html(descripinit);$(".changeM").css("display","none");$(".change").css("display","block")});
});


 $( document ).ready(function() {
 	var tituloPagina = $('title').text();
 	var texto = `
 		<div class='texto'>

 		</div>
 	`;
 	if (tituloPagina == "Editorial Cataplum") {
 		$(".result").prepend("");
 	}
});
