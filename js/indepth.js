var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;

function countMaxValue(array_elements) {

	var maxValue = 0;
	var maxNum = -1;

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                
                if(cnt > maxValue ){
                	maxValue = cnt;
                	maxNum = current;
                }
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        if(cnt > maxValue ){
           maxNum = current;
        }
    }

    return maxNum;

}

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "Frase que recuerdas cuando repruebas una materia",
				      "respuestas": [
				        {
				          "respuesta": "A) !¿De qué te vas a distrazar?",
				          "tipo": "Martinoli"
				        },
				        {
				          "respuesta": "B) Quiso hacerla de sexto año y la terminó de Kindergarden",
				          "tipo": "Bermudez"
				        },
				        {
				          "respuesta": "C) Hay que ganar para poder ser campeón",
				          "tipo": "Orvananos"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué color prefieres?",
				      "respuestas": [
				        {
				          "respuesta": "A) Verde",
				          "tipo": "Pollo"
				        },
				        {
				          "respuesta": "B) Amarillo",
				          "tipo": "Pollo"
				        },
				        {
				          "respuesta": "C) Azul",
				          "tipo": "Fernandez"
				        },
				        {
				          "respuesta": "D) Negro y blanco",
				          "tipo": "Tapia"
				        }
				      ]
				    },
				    {
				      "pregunta": "Frase que usarías antes de jugar FIFA",
				      "respuestas": [
				        {
				          "respuesta": "A) Aficionados que viven la intensidad del futbol",
				          "tipo": "Bermudez"
				        },
				        {
				          "respuesta": "B) Se abre el telón y comienza la función",
				          "tipo": "Pollo"
				        },
				        {
				          "respuesta": "C) Comienzan 90’ del deporte más hermoso del mundo",
				          "tipo": "Tapia"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuándo naciste?",
				      "respuestas": [
				        {
				          "respuesta": "A) En los 80",
				          "tipo": "Fernandez"
				        },
				        {
				          "respuesta": "B) En los 90",
				          "tipo": "Bermudez"
				        },
				        {
				          "respuesta": "C) En los 2000",
				          "tipo": "Martinoli"
				        },
				        {
				          "respuesta": "D) En los 2010",
				          "tipo": "Pollo"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cómo vives un partido?",
				      "respuestas": [
				        {
				          "respuesta": "A) Solo y tranquilo",
				          "tipo": "Fernandez"
				        },
				        {
				          "respuesta": "B) Solo pero me emociono mucho",
				          "tipo": "Bermudez"
				        },
				        {
				          "respuesta": "C) Me divierto con mis amigos",
				          "tipo": "Martinoli"
				        },
				        {
				          "respuesta": "D) Con amigos pero tranquilos",
				          "tipo": "Pollo"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué animal te gusta más?",
				      "respuestas": [
				        {
				          "respuesta": "A) Águila",
				          "tipo": "Pollo"
				        },
				        {
				          "respuesta": "B) Tigre",
				          "tipo": "Pollo"
				        },
				        {
				          "respuesta": "C) Oso",
				          "tipo": "Tapia"
				        },
				        {
				          "respuesta": "D) Lobo",
				          "tipo": "Fernandez"
				        }
				      ]
				    },
				    {
				      "pregunta": "Frase que usarías para una discusión que estás perdiendo",
				      "respuestas": [
				        {
				          "respuesta": "A) ¡Cállate, Warrior, cállate, maldita sea!",
				          "tipo": "Martinoli"
				        },
				        {
				          "respuesta": "B) Bye, vete a enfriar",
				          "tipo": "Bermudez"
				        },
				        {
				          "respuesta": "C) Uy, te dejo porque esa es de peligro",
				          "tipo": "Orvananos"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cómo te gusta peinarte?",
				      "respuestas": [
				        {
				          "respuesta": "A) Cabello largo",
				          "tipo": "Pollo"
				        },
				        {
				          "respuesta": "B) De a Peña Nieto",
				          "tipo": "Pollo"
				        }
				        ,
				        {
				          "respuesta": "C) Ya me estoy quedando calvo",
				          "tipo": "Orvananos"
				        }
				        ,
				        {
				          "respuesta": "D) Mediano pero pinado",
				          "tipo": "Tapia"
				        }
				      ]
				    },
				    {
				      "pregunta": "Cuando te sacan del salón por platicar mucho dices...",
				      "respuestas": [
				        {
				          "respuesta": "A) Se armó el Traca Traca",
				          "tipo": "Bermudez"
				        },
				        {
				          "respuesta": "B) Esto no se acaba hasta que se acaba",
				          "tipo": "Orvananos"
				        },
				        {
				          "respuesta": "C) Su lechita y a dormir",
				          "tipo": "Martinoli"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Dónde te gustaría viajar?",
				      "respuestas": [
				        {
				          "respuesta": "A) A Estados Unidos",
				          "tipo": "Pollo"
				        },
				        {
				          "respuesta": "B) A Sudamérica",
				          "tipo": "Tapia"
				        },
				        {
				          "respuesta": "C) Francia",
				          "tipo": "Martinoli"
				        },
				        {
				          "respuesta": "D) Prefiero recorrer México",
				          "tipo": "Fernandez"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué posición juegas?",
				      "respuestas": [
				        {
				          "respuesta": "A) Portero",
				          "tipo": "Orvananos"
				        },
				        {
				          "respuesta": "B) Defensa",
				          "tipo": "Pollo"
				        },
				        {
				          "respuesta": "C) Medio",
				          "tipo": "Bermudez"
				        },
				        {
				          "respuesta": "D) Delantero",
				          "tipo": "Fernandez"
				        }
				      ]
				    },
				    {
				      "pregunta": "Cuando tu crush por fin te habla le dices...",
				      "respuestas": [
				        {
				          "respuesta": "A) Tantas veces te pedí una desgraciado",
				          "tipo": "Martinoli"
				        },
				        {
				          "respuesta": "B) ¡Me pongo de pie!",
				          "tipo": "Fernandez"
				        },
				        {
				          "respuesta": "C) Qué bonito es lo bonito",
				          "tipo": "Bermudez"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál de estas piensas mientras te preparan tus taquitos?",
				      "respuestas": [
				        {
				          "respuesta": "A) Uffff, ufffff y re-contra ufff",
				          "tipo": "Bermudez"
				        },
				        {
				          "respuesta": "B) ¡Magnifique!",
				          "tipo": "Martinoli"
				        },
				        {
				          "respuesta": "C) ¡Y ahí van los grandotes",
				          "tipo": "Orvananos"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cómo eras/eres en la escuela?",
				      "respuestas": [
				        {
				          "respuesta": "A) Muy aplicado",
				          "tipo": "Fernandez"
				        },
				        {
				          "respuesta": "B) Nunca pones atención",
				          "tipo": "Orvananos"
				        },
				        {
				          "respuesta": "C) Te la pasas contando chistes malos",
				          "tipo": "Pollo"
				        },
				        {
				          "respuesta": "D) Eres el foráneo",
				          "tipo": "Tapia"
				        }
				      ]
				    },
				    {
				      "pregunta": "Cuando exentas una materia, gritas...",
				      "respuestas": [
				        {
				          "respuesta": "A) Éste es, el cuatro veces heroico capitán mexicano",
				          "tipo": "Martinoli"
				        },
				        {
				          "respuesta": "B) ¡Zambombazo!",
				          "tipo": "Bermudez"
				        },
				        {
				          "respuesta": "C) ¡La Fieeeeeeeraaaaaaa!",
				          "tipo": "Orvananos"
				        }
				      ]
				    },
				    {
				      "pregunta": "Tu mamá lanza un chanclazo y no le atina ¿Qué frase usas?",
				      "respuestas": [
				        {
				          "respuesta": "A) La tenía, era suya y la dejó ir",
				          "tipo": "Bermudez"
				        },
				        {
				          "respuesta": "B) Sálvese quien pueda… Niños y mujeres primero",
				          "tipo": "Pollo"
				        },
				        {
				          "respuesta": "C) ¡Toma chango tu banana!",
				          "tipo": "Martinoli"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_cont_pregunta"><div class="indepth_pregunta_img">'+(i+1)+'</div><div class="indepth_pregunta">'+item.pregunta+'</div></div><div class="indepth_pregunta_main"><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000); 
		var respuesta = new Array();
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			var tipo = respuesta_obj.tipo;
			
			$(this).addClass("select");
			respuesta.push(tipo);
			console.log(respuesta);
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
				
				if(respuesta.length == preguntas.length){
					var total = countMaxValue(respuesta);
					console.log(total);
					window.setTimeout(function(){
						console.log(total);
						finish_test(total);
					});
				}
			return respuesta;
		});
		
		
		
});

var totalfb = "";
function finish_test(total){

	console.log("time2");
	console.log(total);
	
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	var img = total;
	console.log(total);

	if (img == "Martinoli") {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/0.png'>");
		totalfb = "Martinoli"
	} else if (img == "Bermudez") {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/1.png'>");
		totalfb = "Bermudez";
	} else if (img == "Orvananos") {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/2.png'>");
		totalfb = "Orvananos";
	} else if (img == "Tapia") {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/3.png'>");
		totalfb = "Tapia";
	} else if (img == "Fernandez") {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/4.png'>");
		totalfb = "Fernandez";
	} else if (img == "Pollo") {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='"+urlIndepth+"images/respuestas/5.png'>");
		totalfb = "Pollo";
	}

	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$("#indepth_twittear").click(function(){
  		var text = "";
		if (total == 0) {
			text = encodeURIComponent("¡Eres un D10S como Messi!?m="+totalfb);
		} else if (total == 1) {
			text = encodeURIComponent("¡Siuuuuu! ¡Eres como 'El Comandante'!?m="+totalfb);
		}
		
		var url = encodeURIComponent("http://juanfutbol.com/indepth/messi-o-cr7-la-verdad");
		window.open("https://twitter.com/share?text="+text+"&hashtags=JFQuizz&url="+url,"","width=500, height=300");
	});

	$("#indepth_facebook").click(function(){
		var url = encodeURIComponent("http://juanfutbol.com/indepth/messi-o-cr7-la-verdad?m="+totalfb);
		window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");
	});

	$("#indepth_whatsapp").click(function(){
		var text = "";
		if (total == 0) {
			text = encodeURIComponent("¡Soy un D10S como Messi! ¿Y tú?");
		} else if (total == 1) {
			text = encodeURIComponent("¡Siuuuuu! Soy como 'El Comandante'! ¿Y tú?");
		}

		var url = encodeURIComponent("http://juanfutbol.com/indepth/messi-o-cr7-la-verdad?m="+totalfb);
		window.open("https://wa.me/?text="+url+" "+text);
	});
}

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	/*$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});*/
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    /*$("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});*/
});


