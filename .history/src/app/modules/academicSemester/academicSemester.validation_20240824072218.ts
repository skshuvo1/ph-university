import { z } from 'zod';

export const AcademicSemesterValidationSchema = z.object({
  name: z.enum(['Autumn', 'Summer', 'Fall']),
  code: z.enum(['01', '02', '03']),
  year: z.date(),
  startMonth: z.enum(months),
  endMonth: z.enum(months),
});
