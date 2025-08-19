'use strict'

import funcionarios from './funcionarios.json' with { type: 'json' }

const teamContainer = document.getElementById('team')

funcionarios.forEach(funcionario => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${funcionario.imagem}`
    img.alt = funcionario.nome

    const nome = document.createElement('h3')
    nome.textContent = funcionario.nome

    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo

    card.append(img, nome, cargo)
    teamContainer.appendChild(card)
})