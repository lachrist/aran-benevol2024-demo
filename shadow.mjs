import { show as showInner } from "./show.mjs";
export const hidden = "__ADVICE__";
const wrap = (inner) => ({ inner });
const unwrap = ({ inner }) => inner;
const show = (obj) => `${showInner(obj)}[${showInner(obj.inner)}]`;
export const advice = {
  "import@after": (_, src, spc, val, loc) => wrap(val),
  "intrinsic@after": (_, tag, val, loc) => wrap(val),
  "primitive@after": (_, val, loc) => wrap(val),
  "test@before": (_, tag, val, loc) => unwrap(val),
  "apply@around": (_, fct, ths, args, loc) => {
    const res = wrap(
      Reflect.apply(
        unwrap(fct),
        unwrap(ths),
        args.map(unwrap),
      ),
    );
    console.log(`${show(res)} <- ${show(fct)}(${
      args.map(show).join(", ")
    })`);
    return res;
  },
};
export const pointcut = Object.keys(advice);