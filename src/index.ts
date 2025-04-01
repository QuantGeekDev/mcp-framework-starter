import { MCPServer } from "mcp-framework";

const server = new MCPServer({
  transport: {
    type: "http-stream",
    options: {
      port: 1337,
      cors: {
        allowOrigin: "*"
      }
    }
  }});

server.start();