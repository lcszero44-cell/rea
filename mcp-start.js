import "tsx/esm";

process.argv.push("mcp");

// Redireciona os logs normais para stderr
console.log = (...args) => {
  console.error(...args);
};

// Intercepta o canal de entrada para responder ao handshake do Roo Code se necessário
process.stdin.on("data", (data) => {
  try {
    const request = JSON.parse(data.toString());
    // Se o Roo Code enviar o pedido de inicialização, respondemos de forma compatível
    if (request.method === "initialize") {
      const response = {
        jsonrpc: "2.0",
        id: request.id,
        result: {
          protocolVersion: "2024-11-05",
          capabilities: {},
          serverInfo: {
            name: "rea",
            version: "1.0.0",
          },
        },
      };
      process.stdout.write(JSON.stringify(response) + "\n");
      return;
    }
  } catch (e) {
    // Ignora erros de parse e passa para o REA
  }
});

// Importa o módulo principal
import("./src/main.ts").catch((err) => {
  console.error("Erro crítico no REA:", err);
  process.exit(1);
});
