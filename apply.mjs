import { show } from "./show.mjs";
export const hidden = "__ADVICE__";
export const pointcut = ["apply@around"]
export const advice = {
  "apply@around": (_, fct, ths, args, _loc) => {
    const res = Reflect.apply(fct, ths, args);
    console.log(`${show(res)} <- ${show(fct)}(${
      args.map(show).join(", ")
    })`);
    return res;
  }
};