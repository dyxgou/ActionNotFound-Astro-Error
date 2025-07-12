//import { number } from "./number.ts";

import { defineAction } from "astro:actions";
import { z } from "astro:schema";

let num = 0;

export const server = {
  //number,

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
