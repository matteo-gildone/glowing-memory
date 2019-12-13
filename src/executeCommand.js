import { map } from "./data/map.js";

function start(cmd) {
  return {
    cmd: cmd.toLowerCase(),
    params: [],
    result: map[cmd.toLowerCase()].description,
    valid: true
  };
}

function go(cmd, { params, stem }) {
  const room = stem[0];
  return {
    cmd: cmd.toLowerCase(),
    params: params,
    result: map[room]
      ? map[room].description
      : `I don't know ${params.join(" ").toUpperCase()}\n**WHAT SHOULD I DO?**`,
    valid: true
  };
}

function intro() {
  return {
    cmd: "curly-carnival",
    params: [],
    result: map["intro"].description,
    valid: true
  };
}

function help() {
  return {
    cmd: "help",
    params: [],
    result: map["help"].description,
    valid: true
  };
}

function notFound(cmd, { params }) {
  return {
    cmd: cmd.toLowerCase(),
    params: params || [],
    result: `command not found: ${cmd.toLowerCase()}`,
    valid: false
  };
}

export { start, go, notFound, help, intro };
