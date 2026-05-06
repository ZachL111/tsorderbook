import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 77, slack: 44, drag: 32, confidence: 54 };
assert.equal(domainReviewScore(item), 156);
assert.equal(domainReviewLane(item), "ship");
