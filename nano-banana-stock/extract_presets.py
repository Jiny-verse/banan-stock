import re

with open('../docs/DATA_PRESETS.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the export const PRESETS block
match = re.search(r'(export const PRESETS: Preset\[\] = \[.*?\];)', content, re.DOTALL)
if not match:
    # try one without trailing semicolon
    match = re.search(r'(export const PRESETS: Preset\[\] = \[.*?\n\])', content, re.DOTALL)

if not match:
    print("Could not find PRESETS block")
    exit(1)

code = match.group(1)

# Replace new Set(['...']) with ['...']
code = re.sub(r"new Set\(\[(.*?)\]\)", r"[\1]", code)
# Same for multiple items new Set(['a', 'b'])
code = re.sub(r"new Set\(\[(.*?)\]\)", r"[\1]", code)

out = "import { Preset } from '../types';\n\n" + code
if not out.endswith(';'):
    out += ';'

with open('src/data/presets.ts', 'w', encoding='utf-8') as f:
    f.write(out)

print("Extracted presets.ts")
