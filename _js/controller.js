//Início de verificação de preenchimento de formulário
function verificar(){
var nome = document.getElementById('name').value;
var idade = document.getElementById('idade').value;
var cpf = document.getElementById('CPF').value;
var fone = document.getElementById('fone').value;
var cep = document.getElementById('cep').value;
var endereco = document.getElementById('endereco').value;
var numero = document.getElementById('numero').value;
var complemento = document.getElementById('complemento').value;
var Bairro = document.getElementById('Bairro').value;
var cidade = document.getElementById ('Cidade').value;
var estado = document.getElementById('Estado').value;


	if (!nome || !idade || !cpf || !fone || !cep){
	alert("Campos não preenchidos, favor preenchê-los");
	} else{
	alert ("Campos preenchidos com sucesso");
	}
}
                                
/*####################
fim verificação mde preenchimento de campos do formulario 
*/

/*inicio da funcao da validacao de campo de telefone
*/
function maskfone(){ 
const numeroAtual = document.getElementByid('fone').value;
const iscelular = numeroAtual.length === 11;
const isfone = numeroAtual.length === 10; 
let numeroajustado;
if(iscelular){
	const part1 = numeroAtual.slice(0,2);
	const part2 =numeroAtual.slice (2,7);
	const part3 = numeroAtual.slice(7,11);
	numeroajustado = `(${part1}) ${part2}-${part3}`
} else if (isfone){
	const part1 = numeroAtual.slice(0,2);
	const part2 = numeroAtual.slice (2,6);
	const part3 = numeroAtual.slice(6,11);
	numeroajustado = `(${part1}) ${part2}-${part3}`
}

 }