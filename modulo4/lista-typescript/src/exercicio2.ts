function recebeParametro(parametro: any){
    if(typeof parametro === "number"){
        return `Variável do tipo number`
    }else if(typeof parametro === "string"){
        return `Variável do tipo string`
    }else if(typeof parametro === 'boolean'){
        return `Variável do tipo boolean`
    }
}

console.log(recebeParametro(8))
console.log(recebeParametro('abc'))
console.log(recebeParametro(true))