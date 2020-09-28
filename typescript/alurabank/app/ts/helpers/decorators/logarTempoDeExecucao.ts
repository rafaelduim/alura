export function logarTempoDeExecucao(emSegundos : boolean = false) {

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
        
        const metodoOriginal = descriptor.value;

        let unidade = 'ms';
        let divisor = 1;
        if(emSegundos){
            unidade = 's';
            divisor = 1000;
        }

        descriptor.value = function(...args:any[]){
            console.log('----------------');
            console.log(`parâmetros passados para o método ${propertKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this,args);
            const t2 = performance.now();
            console.log(`o retorno do o método ${propertKey}: ${JSON.stringify(retorno)}`);
            console.log(`o método ${propertKey} demorou : ${(t2 - t1)/divisor} ${unidade}`);
            return retorno;
        }
    }
}