
---

### 📌 `type` Declarations in TypeScript vs JavaScript

* `type` and `interface` declarations exist **only at the TypeScript level** — they do **not** get compiled into JavaScript.
* Therefore, when importing types, you **must use** `import type` to prevent runtime errors.
* Otherwise, JavaScript will try to find an actual export at runtime and throw a **"doesn't provide an export"** error.

#### Key Points:

* `import type` → used only at compile-time, stripped out of the JS output.
* `import` → expects a runtime value or object, included in JS output.
