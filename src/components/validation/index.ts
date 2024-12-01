import { z } from "zod";

export const todoSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().optional(),
});

export type TodoSchemaType = z.infer<typeof todoSchema>;
