import { z } from "zod";

export const quizSearchSchema = z.object({
  pageNumber: z.number().min(1).catch(1),
  pageSize: z.number().min(1).catch(9),
  sortColumn: z.enum(["createdAt", "name", "userName"]).optional(),
  sortOrder: z.enum(["desc", "asc"]).optional(),
  searchTerm: z.string().catch(""),
  userName: z.string().optional(),
});

export type GetQuizesQueryParams = z.infer<typeof quizSearchSchema>;
