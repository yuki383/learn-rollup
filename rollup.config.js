import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/main.js",
  output: [
    {
      dir: "./dist",
    },
  ],
  plugins: [
    replace({
      preventAssignment: true,
    }),
    commonjs(),
    terser(),
  ],
};
