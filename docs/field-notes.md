# Field Notes

The fixture is small on purpose, which makes each domain case carry real weight.

The domain cases cover `spread pressure`, `fill risk`, `portfolio drift`, and `quote width`. They sit beside the smaller starter fixture so the project has both a compact scoring check and a domain-flavored review check.

The widest spread is between `quote width` and `fill risk`, so those are the first two cases I would preserve during a refactor.

The local verifier covers this data so the notes stay tied to code.
