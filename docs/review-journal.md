# Review Journal

The review surface for `tsorderbook` is deliberately narrow: one fixture, one scoring rule, and one local check.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its trading systems focus without claiming live deployment or external usage.

## Cases

- `baseline`: `spread pressure`, score 156, lane `ship`
- `stress`: `fill risk`, score 154, lane `ship`
- `edge`: `portfolio drift`, score 201, lane `ship`
- `recovery`: `quote width`, score 222, lane `ship`
- `stale`: `spread pressure`, score 167, lane `ship`

## Note

This file is intentionally plain so the fixture remains the source of truth.
