import { defineAction } from "astro:actions";
import { z } from "astro:schema";

// acts like a database
let num = 0;

export const number = {
  get: defineAction({
    input: z.null(),
    handler() {
      return `The number is ${num}`;
    },
  }),

  incr: defineAction({
    input: z.object({
      incr: z.number().gte(0),
    }),

    handler(input) {
      num += input.incr;

      return `The incremented number is ${num}`;
    },
  }),
};
