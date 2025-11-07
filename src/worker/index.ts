import { Hono } from "hono";

interface Env {
  SOME_BINDING: string; // Exemplo de propriedade
  ANOTHER_BINDING: number; // Adicione as propriedades necessárias
}

const app = new Hono<{ Bindings: Env }>();

export default app;