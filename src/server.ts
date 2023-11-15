import figlet from "figlet";

declare global {
  var count: number;
}

globalThis.count ??= 0;
globalThis.count++;

Bun.serve({
  fetch(req: Request) {
    const body1 = figlet.textSync("weadadadwe!");
    const body2 = figlet.textSync("weafafwe!");
    const combinedBody = body1 + "\n" + body2 + "\n";
    return new Response(combinedBody+`Reloaded ${globalThis.count} times`);
  },
  port: 5173,
});
console.log("Hello via my server!");