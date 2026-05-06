# tsorderbook

`tsorderbook` keeps a focused TypeScript implementation around trading systems. The project goal is to maintain price-time priority order books from event logs.

## Reason For The Project

The point is to make a small domain rule concrete enough that a reader can change it and immediately see what broke.

## Tsorderbook Review Notes

Start with `quote width` and `fill risk`. Those cases create the widest score spread in this repo, so they are the best quick check when the model changes.

## What It Does

- `fixtures/domain_review.csv` adds cases for spread pressure and fill risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/tsorderbook-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `quote width` and `fill risk`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## How It Is Put Together

The core code exposes a scoring path and the added review layer uses `signal`, `slack`, `drag`, and `confidence`. The domain terms are `spread pressure`, `fill risk`, `portfolio drift`, and `quote width`.

The TypeScript code keeps the review rule close to the tests.

## Run It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Check It

The check exercises the source code and the review fixture. `recovery` is the high score at 222; `stress` is the low score at 154.

## Boundaries

The fixture set is small enough to audit by hand. The next useful expansion is malformed input coverage, not extra surface area.
