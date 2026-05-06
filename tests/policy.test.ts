function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
