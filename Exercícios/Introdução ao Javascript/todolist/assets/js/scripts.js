const formulario = document.getElementById('tarefas-formulario');
const listaTarefas = document.getElementById('tarefas');

formulario.onsubmit = function (evento) {
	evento.preventDefault();                                    //prevenir comportamento padrão de submit
	const input = document.getElementById('tarefas-input');     
	adicionarTarefa(input.value);                               //chamar a função
	formulario.reset();                                         //limpar o formulário após adicionar
};

function adicionarTarefa(descricao) {
	const novaTarefa = document.createElement('input');         //criar os elementos
    const tituloTarefa = document.createElement('label');       //input, div, label e node
    const taskContainer = document.createElement('div');
	const tarefaNode = document.createTextNode(descricao);

	novaTarefa.setAttribute('type', 'checkbox');                //setar os atributos da tarefa
	novaTarefa.setAttribute('name', descricao);                 //type, name, id
	novaTarefa.setAttribute('id', descricao);

	tituloTarefa.setAttribute('for', descricao);                //setar atributo do título           
	tituloTarefa.appendChild(tarefaNode);                       //acrescentar child

	taskContainer.classList.add('tarefa-item');                 //adicionar a tarefa no container
	taskContainer.appendChild(novaTarefa);
	taskContainer.appendChild(tituloTarefa);

	listaTarefas.appendChild(taskContainer);
}