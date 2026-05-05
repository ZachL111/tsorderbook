import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 81,
    "capacity": 75,
    "latency": 15,
    "risk": 24,
    "weight": 9,
    "score": 93,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 98,
    "capacity": 106,
    "latency": 27,
    "risk": 19,
    "weight": 7,
    "score": 142,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 104,
    "capacity": 84,
    "latency": 20,
    "risk": 22,
    "weight": 8,
    "score": 140,
    "decision": "review"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
