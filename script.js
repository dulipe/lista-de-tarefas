const listElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const tasks = []

function showTasks() {
    listElement.innerHTML = ''
  
    for (item of tasks) {
  
      // As 3 linhas abaixo são responsáveis criar elementos a cada tarefa inserida
      const itemList = document.createElement('li')
      const itemText = document.createTextNode(item)
      const deleteLink = document.createElement('a')
  
      // Nessa linha estamos pegando a posição da tarefa em questão
      const pos = tasks.indexOf(item)
  
      // Nas 2 linhas abaixo estamos inserindo o ícone de lixeira e a função de deletar
      deleteLink.innerHTML = '<img src="delete.svg">'
      deleteLink.setAttribute('onclick', `removeTarefa(${pos})`)
  
      // Nas 3 linhas abaixo estamos inserindo cada coisa no seu lugar
      itemList.appendChild(itemText)
      itemList.appendChild(deleteLink)
      listElement.appendChild(itemList)
    }
  }
      // Deixaremos a função aqui sendo chamada para a lista sempre ficar atualizada
  showTasks()
  
  function removeTarefa(pos) {
    tasks.splice(pos, 1)
    showTasks()
  }
  
  
  document.querySelector('button').addEventListener('click', () => {
    const tarefa = inputElement.value
    tasks.push(tarefa)
    inputElement.value = '' // transformando valor do input em string ?
    showTasks()
  })