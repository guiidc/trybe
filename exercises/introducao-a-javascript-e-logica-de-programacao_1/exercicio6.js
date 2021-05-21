let peca = 'CAVALO';
peca = peca.toLocaleLowerCase();

switch (peca){
    case 'peao':
        console.log('Caminha somente uma casa em sentido vertical e ataca somente na diagonal');
        break;
    case 'torre':
        console.log('Caminha no sentido vertical ou horizontal sem limite de casas');
        break;
    case 'cavalo':
        console.log('Caminha em forma de L podendo "pular" sobre as peças que estão no caminho');
        break;
    case 'bispo':
        console.log('Caminha no sentido diagonal sem limitação de número de casas');
        break;
    case 'rei':
        console.log('Caminha apenas uma casa em qualquer direção');
        break;
    case 'rainha':
        console.log('Caminha e todas as direções e sem limite de casas');
        break;
    default:{
        console.log('peça invalida');
    }
}