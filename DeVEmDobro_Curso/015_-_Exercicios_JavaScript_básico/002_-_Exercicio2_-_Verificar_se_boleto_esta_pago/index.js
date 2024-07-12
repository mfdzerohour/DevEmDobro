let boletoPago = false

alert('boletoPago: ' + boletoPago)

//é a mesma coisa boletoPago === true, não precisa atribuir o true
if (boletoPago) { 
    alert('O boleto está pago')
} else if(boletoPago === false){
    alert('O boleto não está pago')
}