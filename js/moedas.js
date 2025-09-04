$(document).ready(function () {

    const listaMoedas = $("#lista-moedas")
    const carregando = $("#loading")
    const apiURL = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json"
    //const dataHoje = "09-03-2025"

    const hoje = new Date()
    const dia = hoje.getDate()
    const mes = hoje.getMonth() + 1
    const ano = hoje.getFullYear()

    const dataHoje = `${mes}-${dia}-${ano}`
    console.log(dataHoje)

    function buscarMoedas() {
        carregando.show()

        // chamar a api
        $.getJSON(apiURL)
            .done(data => {

                // iterar sobre o array de objetos
                data.value.forEach(objetoMoeda => {
                    //console.log(objetoMoeda.simbolo)

                    //obter a cotaçao da moeda do dia
                    const apiCotacao = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${objetoMoeda.simbolo}'&@dataCotacao='${dataHoje}'&$top=100&$format=json`

                    $.getJSON(apiCotacao)
                        .done(listaDeCotacao => {
                            
                            // pegar o array de objetos
                            let compra = listaDeCotacao.value[4].cotacaoCompra
                            let venda = listaDeCotacao.value[4].cotacaoVenda
             
                            //fixar as casas decimais:
                            compra = compra.toFixed(2)

                            // comando para substituir o "." por ",":
                            compra = compra.replace(".",",")
                            
                            const item = `<li class='moeda-item'>
                                <span class='simbolo'>${objetoMoeda.simbolo}</span> 
                                ${objetoMoeda.nomeFormatado} |
                                Compra: ${compra} |
                                Venda: ${venda.toFixed(2).replace(".",",")}
                            </li>`
        
                            // Adiciona na lista do HTML
                            listaMoedas.append(item)
                        })

                })
            })

        carregando.hide()
    }

    buscarMoedas()
})
