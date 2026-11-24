import z from "zod";

/**
 * Tipos compartilhados entre o cliente e o servidor.
 */

// Esquema para os dados de screenshots
export const ScreenshotSchema = z.object({
  light: z.object({
    url: z.string(),
    srcset: z.array(z.string()),
  }),
  dark: z.object({
    url: z.string(),
    srcset: z.array(z.string()),
  }),
  badge: z.string().optional(),
  title: z.string(),
  description: z.string(),
});

export type ScreenshotType = z.infer<typeof ScreenshotSchema>;

// Esquema para os dados de features
export const FeatureSchema = z.object({
  badge: z.string().optional(),
  title: z.string(),
  description: z.string(),
  gradient: z.string().optional(),
});

export type FeatureType = z.infer<typeof FeatureSchema>;
