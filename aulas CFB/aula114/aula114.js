// Aprendendo sobre Desestruturação #P1:
// expressão extrai dados de obj ou array e associa com variaveis distintas;

// -- associação ligeira
let a, b, c, d;

({ a, b, c, d } = {
  a: "burroQndoFoge",
  b: "jacaAMilanesa",
  c: "vinagreteEscarlate",
  d: "sanduicheiche",
});

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// -- associação goiania
let numeros = [10, 20, 30, 40];

let [e, f, g, h] = numeros;

console.log(e);
console.log(f);
console.log(g);
console.log(h);

// -- associação baiana
let i, j, l, m;

[i = 0, j = 0, l = 0, m = 0] = [10];

console.log(i);
console.log(j);
console.log(l);
console.log(m);

// -- associação dupla entre si, dei meio bug

/* let n = 38
let o = 26

[n, o] = [o, n]

console.log(n)
console.log(o) */

// --
let numeros2 = () => {
  return [1, 2, 3, 4];
};

let [p, q, r, s] = numeros2();

console.log(p);
console.log(q);
console.log(r);
console.log(s);
