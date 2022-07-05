//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 165;
let diametro = 20;
let raio = diametro / 2 ;

//variaveis da velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = -5;

//variaveis da raquete
let xRaquete = 3;
let yRaquete = 170;
let larguraRaquete = 10;
let alturaRaquete = 75;

//variaveis da raquete inimiga
let xRaqueteInimiga = 585;
let yRaqueteInimiga = 170;
let velocidadeYInimigo;

let colisão = false;

//placar
let pontos = 0;
let pontosInimigos = 0;

//variaveis do som
let raquetada;
let ponto;
let trilha;

function preload () {
  trilhaSonora = loadSound ("trilhaSonora.mp3.wav");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3")
  
}

function setup() {
  createCanvas(600, 400);
  trilhaSonora.loop ();
}

function draw() {
  background(0,100,0);
  bolinha();
  movimento();
  colisao();
  raquete(xRaquete, yRaquete);
  movimentaRaquete();
  //colisaoRaquete();
  colisãoMinhaRaquete(xRaquete, yRaquete);
  raquete(xRaqueteInimiga, yRaqueteInimiga)
  movimentoRaqueteInimiga();
  colisãoMinhaRaquete(xRaqueteInimiga, yRaqueteInimiga)
  placares( 170, 40);
  marcacao();
  //movimentoInimigo();
  
}

function bolinha(){
  fill(255,140,0)
  stroke (255,140,0)
circle(xBolinha, yBolinha, diametro);
}

function movimento(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisao(){
  
  if (xBolinha + raio> width ||
   xBolinha - raio< 0){
  velocidadeXBolinha *= -1;
    ponto.play();
}
if (yBolinha + raio> height ||
   yBolinha - raio< 0){
  velocidadeYBolinha *= -1;
 
}  
}

function raquete(x,y){
  fill(0,191,255)
  stroke(0,191,255 )
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
  yRaquete -= 10;
    
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
  
}

function movimentoInimigo(){
  if (keyIsDown(87)){
    yRaqueteInimiga += -10
  }
  
  if (keyIsDown (83)){
    yRaqueteInimiga += 10
  }
  
  
}

function colisaoRaquete(){
if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete + alturaRaquete){
  velocidadeXBolinha *= -1;
  }
}

function colisãoMinhaRaquete(x, y){
  colisão =
  collideRectCircle (x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colisão){
    velocidadeXBolinha *= -1;
    raquetada.play();

  }
}

function movimentoRaqueteInimiga(){
  velocidadeYInimigo = yBolinha - yRaqueteInimiga - larguraRaquete / 2 - 30;
  yRaqueteInimiga += velocidadeYInimigo
}

function placares(){
  stroke (255)
  textAlign (CENTER);
  textSize (16);
  fill(25,25,112);
  rect(180, 10 , 50, 25);
  fill(0,255,255);
  text(pontos, 205, 26);
  fill(25,25,112);
  rect(360, 10 , 50, 25);
  fill(0,255,255);
  text(pontosInimigos, 385, 26);
  fill(255)
  rect(295, 0 , 5 , 500)
}

function marcacao (){
  if (xBolinha > 585){
    pontos += 1
  }
  if (xBolinha < 10){
    pontosInimigos += 1
  }

  
  
  
  
}


