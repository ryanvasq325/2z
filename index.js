// index.js
const registerCliente = document.getElementById("cadastroCliente");
const registerUsuario = document.getElementById("cadastroUsuario");
const registerFornecedor = document.getElementById("cadastroFornecedor");
const registerEmpresa = document.getElementById("cadastroEmpresa");

if (registerCliente && registerUsuario && registerFornecedor && registerEmpresa) {
    registerCliente.addEventListener("click", async (event) => {
        event.preventDefault();

        try {
            await window.electronAPI.openPage("cliente.html");
        } catch (error) {
            console.error("Erro ao abrir cliente.html:", error);
        }
    });
    registerUsuario.addEventListener("click", async (event) => {
        event.preventDefault();

        try {
            await window.electronAPI.openPage("usuario.html");
        } catch (error) {
            console.error("Erro ao abrir usuario.html:", error);
        }
    });
    registerFornecedor.addEventListener("click", async (event) => {
        event.preventDefault();

        try {
            await window.electronAPI.openPage("fornecedor.html");
        } catch (error) {
            console.error("Erro ao abrir fornecedor.html:", error);
        }
    });
    registerEmpresa.addEventListener("click", async (event) => {
        event.preventDefault();

        try {
            await window.electronAPI.openPage("empresa.html");
        } catch (error) {
            console.error("Erro ao abrir empresa.html:", error);
        }
    });
    Voltarinicio.addEventListener("click", async (event) => {
        event.preventDefault();

        try {
            await window.electronAPI.openPage("index.html");
        } catch (error) {
            console.error("Erro ao abrir index.html:", error);
        }
    });
}