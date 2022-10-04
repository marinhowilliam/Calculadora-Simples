//Documentos

const div = document.createElement("div")
const divOutput = document.createElement("div")
const valor1 = document.createElement("input")
const valor2 = document.createElement("input")
const mais = document.createElement("button")
const menos = document.createElement("button")
const mult = document.createElement("button")
const divisao = document.createElement("button")
const resultado = document.createElement("output")
const body = document.body
mais.innerText="+"
menos.innerText="-"
divisao.innerText="÷"
mult.innerText="*"

//filhinhos

body.appendChild(div)
div.appendChild(divOutput)
divOutput.appendChild(resultado) 
div.appendChild(valor1)
div.appendChild(valor2)
div.appendChild(mais)
div.appendChild(menos)
div.appendChild(mult)
div.appendChild(divisao)


//CSS

//divOutput

divOutput.style.background="#000000"
divOutput.style.border="1px solid #800000"
divOutput.style.borderRadius="8px"
divOutput.style.color="white"
divOutput.style.height="50px"
divOutput.style.width="100%"
divOutput.style.marginBottom="30px"
divOutput.style.fontSize="1.8rem"
divOutput.style.textAlign="center"


//div 

div.style.display="grid"
div.style.justifyContent="center"
div.style.alignItems="center"
div.style.marginTop="50px"
div.style.border="2px solid #800000"
div.style.padding="50px 70px"
div.style.paddingTop="100px"
div.style.background="linear-gradient(to top, #363636, #000000)"
div.style.borderRadius="8px"

//body

body.style.display="flex"
body.style.alignItems="center"
body.style.justifyContent="center"
body.style.background="black"
body.style.fontFamily="arial"


//Estilo do input

valor1.style.padding="10px"
valor2.style.padding="10px"
valor1.style.borderRadius="10px"
valor2.style.borderRadius="10px"
valor1.style.border="3px solid #722f37"
valor2.style.border="3px solid #722f37"
valor1.style.marginBottom="15px"
valor2.style.marginBottom="15px"
valor1.style.width="230px"
valor2.style.textAlign="center"
valor1.style.textAlign="center"

//atributos

valor1.setAttribute("type", "text")
valor1.setAttribute("placeholder", "0")
valor2.setAttribute("type", "text")
valor2.setAttribute("placeholder", "0")


//Estilo botão

mais.style.padding="15px"
mais.style.color="#800000"
mais.style.borderRadius="8px"
mais.style.border="1px solid #800000"
mais.style.marginBottom="10px"
mais.style.background="#151515"
mais.style.fontSize="1.5rem"
menos.style.padding="15px"
menos.style.color="#800000"
menos.style.borderRadius="8px"
menos.style.border="1px solid #800000"
menos.style.marginBottom="10px"
menos.style.background="#151515"
menos.style.fontSize="1.5rem"
mult.style.padding="15px"
mult.style.color="#800000"
mult.style.borderRadius="8px"
mult.style.border="1px solid #800000"
mult.style.marginBottom="10px"
mult.style.background="#151515"
mult.style.fontSize="1.5rem"
divisao.style.padding="15px"
divisao.style.color="#800000"
divisao.style.borderRadius="8px"
divisao.style.border="1px solid #800000"
divisao.style.marginBottom="10px"
divisao.style.background="#151515"
divisao.style.fontSize="1.5rem"


//Função

mais.addEventListener("click", () =>{
    let soma = parseInt(valor1.value) + parseInt(valor2.value)
    resultado.innerText = soma
}
)

menos.addEventListener("click", () =>{
    let menos = parseInt(valor1.value) - parseInt(valor2.value)
    resultado.innerText = menos
}
)

mult.addEventListener("click", () =>{
    let m = parseInt(valor1.value) * parseInt(valor2.value)
    resultado.innerText = m
}
)

divisao.addEventListener("click", () =>{
    let d = parseInt(valor1.value) / parseInt(valor2.value)
    resultado.innerText = d
}
)
