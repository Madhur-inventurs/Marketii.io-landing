'use server';

/**
 * @fileOverview An AI agent that analyzes user engagement with the landing page and recommends the optimal time for scheduling a demo.
 *
 * - recommendDemoTime - A function that recommends the optimal demo time based on user engagement data.
 * - RecommendDemoTimeInput - The input type for the recommendDemoTime function.
 * - RecommendDemoTimeOutput - The return type for the recommendDemoTime function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendDemoTimeInputSchema = z.object({
  timeSpentOnPage: z.number().describe('The total time spent on the landing page in seconds.'),
  sectionsViewed: z.array(z.string()).describe('An array of section names viewed by the user.'),
  elementsClicked: z.array(z.string()).describe('An array of element IDs clicked by the user.'),
});
export type RecommendDemoTimeInput = z.infer<typeof RecommendDemoTimeInputSchema>;

const RecommendDemoTimeOutputSchema = z.object({
  recommendedTime: z
    .string()
    .describe(
      'The recommended time for scheduling a demo, in ISO 8601 format (e.g., 2024-01-01T10:00:00Z).'
    ),
  reasoning: z
    .string()
    .describe(
      'The reasoning behind the recommended time, explaining why it is optimal based on the user engagement data.'
    ),
});
export type RecommendDemoTimeOutput = z.infer<typeof RecommendDemoTimeOutputSchema>;

export async function recommendDemoTime(input: RecommendDemoTimeInput): Promise<RecommendDemoTimeOutput> {
  return recommendDemoTimeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendDemoTimePrompt',
  input: {schema: RecommendDemoTimeInputSchema},
  output: {schema: RecommendDemoTimeOutputSchema},
  prompt: `You are an AI assistant that analyzes user engagement data from a landing page and recommends the optimal time to schedule a demo.

You will receive the following data about the user's engagement:
- Total time spent on the page (in seconds): {{{timeSpentOnPage}}}
- Sections viewed: {{#each sectionsViewed}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
- Elements clicked: {{#each elementsClicked}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Based on this data, recommend the optimal time to schedule a demo and explain your reasoning. The recommended time should be in ISO 8601 format.
Consider that users who spend more time and view more sections are more engaged. Clicking on elements indicates interest in specific features.
{{timeSpentOnPage}}
{{sectionsViewed}}
{{elementsClicked}}


Optimal Demo Time:`,
});

const recommendDemoTimeFlow = ai.defineFlow(
  {
    name: 'recommendDemoTimeFlow',
    inputSchema: RecommendDemoTimeInputSchema,
    outputSchema: RecommendDemoTimeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
