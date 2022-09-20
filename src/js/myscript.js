function cargar(){
    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
    let frase= "";
    let aleat = Math.floor(Math.random() * 4);
    frase += who[aleat] + " ";
    aleat = Math.floor(Math.random() * 4);
    frase += what[aleat] + " ";
    aleat = Math.floor(Math.random() * 5);
    frase += when[aleat];
    document.getElementById("excuse").innerHTML = frase;
}