import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greet.js";

test("greets by name", () => {
  assert.equal(greet("Ada"), "Hello, Ada");
});

test("trims surrounding whitespace from the name", () => {
  assert.equal(greet("  Ada "), "Hello, Ada");
});

test("rejects an empty name", () => {
  assert.throws(() => greet("   "), { name: "TypeError", message: "name is required" });
});

test("capitalises the first letter of the name", () => {
  assert.equal(greet("ada"), "Hello, Ada");
});
