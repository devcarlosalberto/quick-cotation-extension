import { coteTextElement, dateTextElement } from './elements.js'
import { formatToBRL } from './format.js'

dateTextElement.innerText = new Date()

async function fetchApi() {
  try {
    const result = await (await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')).json()
    const { USDBRL: { high: price } } = result

    coteTextElement.innerText = `U$1 => R$${formatToBRL(price)}`
  } catch(err) {
    alert('Não foi possível buscar os resultados!')
    console.log(err)
  }
}

fetchApi()