const form = document.querySelector("form")
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

amount.oninput = () => {
    //metodo regex que junto com replace tira as letras do valor do input
    let value = amount.value.replace(/\D/g, "")

    value = Number(value)/100

    //devolve para o valor do input o valor tratado paga permitir apenas numero
    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    return value
}

form.onsubmit = (event) => {
    event.preventDefault()
}