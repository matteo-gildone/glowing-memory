import { map } from "./data/map.js";

function start(cmd) {
  return {
    cmd: cmd.toLowerCase(),
    params: [],
    result: map[cmd.toLowerCase()].description,
    valid: true
  };
}

function go(cmd, room, { params }) {
  const nextRoom = map[room].exits[params[0]];
  if (nextRoom) {
    return {
      room: nextRoom || null,
      cmd: {
        cmd: cmd.toLowerCase(),
        params: params,
        result: map[nextRoom].description,
        valid: true
      }
    };
  }
  return {
    room: null,
    cmd: {
      cmd: cmd.toLowerCase(),
      params: params,
      result: `You can't go there\n**WHAT SHOULD I DO?**`,
      valid: true
    }
  };
}

function look(cmd, room, { params }) {
  return {
    cmd: cmd.toLowerCase(),
    params: params,
    result:
      map[room].items.length > 0
        ? map[room].items.length > 0
        : `Nothing interesting in here...`,
    valid: true
  };
}

function pick(cmd, room, { params }) {
  return {
    cmd: cmd.toLowerCase(),
    params: params,
    result:
      map[room].items.length > 0
        ? map[room].items.length > 0
        : `Nothing to pick up in here...`,
    valid: true
  };
}

function intro() {
  return {
    cmd: "glowing-memory",
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

export { start, go, notFound, help, intro, look, pick };
