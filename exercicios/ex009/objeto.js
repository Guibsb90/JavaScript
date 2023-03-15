let amigo = {nome: 'Wesley',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('engordou, viado')
    this.peso += p
}} 
amigo.engordar(24)
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`) 
