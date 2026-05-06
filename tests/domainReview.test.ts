function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 77, slack: 44, drag: 32, confidence: 54 };
equal(domainReviewScore(item), 156);
equal(domainReviewLane(item), "ship");
