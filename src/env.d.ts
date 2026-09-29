/// <reference types="astro/client" />
declare module '*.yaml?raw' {
  const text: string;
  export default text;
}
