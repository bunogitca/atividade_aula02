const vendedores = require('./mockup.vendedores.js');

function cadastrarVendedor(matricula, nome, salario, comissao) {
    vendedores.push({ matricula, nome, salario, comissao });
    console.log(`-> Vendedor ${nome} cadastrado.`);
}

function listarVendedores() {
    console.log("\n--- LISTA DE VENDEDORES ---");
    vendedores.forEach(v => {
        console.log(`[${v.matricula}] ${v.nome} - Salário: R$${v.salario} - Comissão: ${v.comissao * 100}%`);
    });
    console.log("---------------------------\n");
}

function buscar(termo) {
    return vendedores.filter(v => 
        String(v.matricula).includes(termo) || 
        v.nome.toLowerCase().includes(String(termo).toLowerCase())
    );
}

function buscarPorMatricula(matricula) {
    return vendedores.find(v => v.matricula === matricula) || null;
}

function buscarPorNome(nome) {
    return vendedores.filter(v => v.nome.toLowerCase().includes(nome.toLowerCase()));
}

function excluirPorMatricula(matricula) {
    const indice = vendedores.findIndex(v => v.matricula === matricula);
    if (indice !== -1) {
        vendedores.splice(indice, 1);
        console.log(`-> Vendedor de matrícula ${matricula} excluído.`);
    } else {
        console.log("-> Vendedor não encontrado.");
    }
}

console.log("=== INICIANDO TESTES ===");

listarVendedores();

cadastrarVendedor(1005, "Mariana Costa", 4000, 0.10);
listarVendedores();

console.log("Busca por Matrícula (1003):", buscarPorMatricula(1003));
console.log("Busca por Nome ('carlos'):", buscarPorNome("carlos"));
console.log("Busca Geral ('Mariana'):", buscar("Mariana"));

excluirPorMatricula(1001);
listarVendedores();