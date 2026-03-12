// index.js
const cadastroCliente = document.getElementById("cadastroCliente");
const cadastroUsuario = document.getElementById("cadastroUsuario");
const cadastroFornecedor = document.getElementById("cadastroFornecedor");
const cadastroEmpresa = document.getElementById("cadastroEmpresa");

if (cadastroCliente && cadastroUsuario && cadastroFornecedor && cadastroEmpresa) {
    cadastroCliente.addEventListener("click", async (event) => {
        event.preventDefault();

        try {
            await window.electronAPI.openPage("cliente.html");
        } catch (error) {
            console.error("Erro ao abrir cliente.html:", error);
        }
    });
    cadastroUsuario.addEventListener("click", async (event) => {
        event.preventDefault();

        try {
            await window.electronAPI.openPage("usuario.html");
        } catch (error) {
            console.error("Erro ao abrir usuario.html:", error);
        }
    });
    cadastroFornecedor.addEventListener("click", async (event) => {
        event.preventDefault();

        try {
            await window.electronAPI.openPage("fornecedor.html");
        } catch (error) {
            console.error("Erro ao abrir fornecedor.html:", error);
        }
    });
    cadastroEmpresa.addEventListener("click", async (event) => {
        event.preventDefault();

        try {
            await window.electronAPI.openPage("empresa.html");
        } catch (error) {
            console.error("Erro ao abrir empresa.html:", error);
        }
    });
}