//Varibales
let x = 25
let y = 25
// Objetos 
let nave;
let disparos = [] 

function setup() {
	createCanvas(windowWidth, windowHeight);
	nave = new navePiloto(50,50);
	disparos.push(new dispara());
}

function draw() {

	//Objetos
	nave.construyeNave();
	nave.controles();
	if(keyIsDown('32')){
		for(let i=0;i<disparos.length;i++){
			disparos[i].construyeDisparo();
			disparos[i].mueveDisparo();
		}
	}


	
  //Juego de dos cuadros que disparen y que junten puntos. 
  //Diagonales
  

}


//Clase Nave 
class navePiloto{
	constructor(){
		this.x = x;
		this.y = y;
		this.largo = 50;
		this.ancho = 50;
	}

	construyeNave(){
		clear()
		fill('red')
		rect(this.x,this.y,this.largo,this.ancho)
	}

	controles(){
			if(keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)){
				this.x--
				this.y--
			}
			else if(keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)){
				this.x++ 
				this.y++
			}
			else if(keyIsDown(DOWN_ARROW) && keyIsDown(LEFT_ARROW)){
				this.y++
				this.x--
			}
			else if(keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)){
				this.y--
				this.x++
			}
			//Rectos
			else if(keyIsDown(UP_ARROW)){
				this.y--
			}
			else if(keyIsDown(DOWN_ARROW)){
				this.y++
			}
			else if(keyIsDown(RIGHT_ARROW)){
				this.x++
			}
			else if(keyIsDown(LEFT_ARROW)){
				this.x--
			}
	}
}

class dispara{
	constructor(){
		this.x = x,
		this.y = y,
		this.diametro = random(10,30);
	}
	mueveDisparo(){
		this.x++;
	}
	construyeDisparo(){
		ellipse(this.x,this.y,this.diametro,this.diametro);
	}
}