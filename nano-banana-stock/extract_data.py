import re
import os

os.makedirs('src/data', exist_ok=True)
os.makedirs('src/types', exist_ok=True)

with open('../docs/AGENT_TASKS.md', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract types
types_pattern = r'```typescript\n(// types/index\.ts.*?(?:export type Format = "jpg" \| "png";))\n```'
# Wait, let's just use re.search for the interface Option
types_match = re.search(r'export interface Option \{.+?export type Format = "jpg" \| "png";', text, re.DOTALL)

if types_match:
    with open('src/types/index.ts', 'w', encoding='utf-8') as f:
        f.write(types_match.group(0) + '\n')
else:
    print("Types match failed!")

consts = {}
for m in re.finditer(r'const\s+([A-Z_]+)\s*=\s*(\[.*?\]|\{.*?\});', text, re.DOTALL):
    name = m.group(1)
    val = m.group(2)
    consts[name] = val

file_map = {
    'useCases.ts': ['USE_CASES'],
    'styles.ts': ['STYLES'],
    'seasons.ts': ['SEASONS', 'SEASONAL_EVENTS'],
    'backgrounds.ts': ['BACKGROUNDS'],
    'weather.ts': ['WEATHER', 'TIME_OF_DAY'],
    'perspective.ts': ['PERSPECTIVE', 'ENVIRONMENT_STYLES', 'TILING_OPTIONS'],
    'characters.ts': ['CHAR_AGES', 'BODY_TYPES', 'FANTASY_TRAITS', 'EYE_STYLES', 'HAIR_COLORS', 'HAIR_LENGTHS', 'HAIR_STYLES', 'SKIN_TONES', 'SKIN_SPECIALS', 'MAKEUP_STYLES', 'EXPRESSIONS', 'POSES', 'OUTFIT_TOPS', 'OUTFIT_BOTTOMS', 'OUTFIT_FULL', 'ACCESSORIES', 'TEXTURE_DETAILS'],
    'subjects.ts': ['SUBJECTS'],
    'camera.ts': ['CAMERA_BODIES', 'CAMERA_LENSES', 'CAMERA_APERTURE', 'UPSCALE_OPTIONS'],
    'shotTypes.ts': ['SHOT_TYPES'],
    'depthBlur.ts': ['DEPTH_BLUR'],
    'colorGrades.ts': ['COLOR_GRADES'],
    'moods.ts': ['MOODS'],
    'lighting.ts': ['LIGHTING'],
    'palettes.ts': ['COLOR_PALETTES'],
    'colorTargets.ts': ['COLOR_TARGETS'],
    'negativeMap.ts': ['BASE_NEGATIVE', 'STYLE_NEGATIVE_MAP'],
}

headers = {
    'useCases.ts': "import { UseCaseOption } from '../types';\n",
    'styles.ts': "import { StyleOption } from '../types';\n",
    'seasons.ts': "import { Option, SeasonalEvent } from '../types';\n",
    'colorTargets.ts': "import { ColorTarget } from '../types';\n",
}

for fname, var_names in file_map.items():
    with open(f'src/data/{fname}', 'w', encoding='utf-8') as f:
        header = headers.get(fname, "import { Option } from '../types';\n")
        f.write(header + '\n')
        for v in var_names:
            if v in consts:
                if v == 'USE_CASES': type_ann = ': UseCaseOption[]'
                elif v == 'STYLES': type_ann = ': StyleOption[]'
                elif v == 'SEASONAL_EVENTS': type_ann = ': SeasonalEvent[]'
                elif v == 'COLOR_TARGETS': type_ann = ': ColorTarget[]'
                elif fname == 'negativeMap.ts':
                    type_ann = ': string[]' if v == 'BASE_NEGATIVE' else ': Record<string, string[]>'
                else: type_ann = ': Option[]'
                
                f.write(f'export const {v}{type_ann} = {consts[v]};\n\n')

# Presets type extracting
with open('../docs/DATA_PRESETS.md', 'r', encoding='utf-8') as f:
    pt = f.read()

ptypes_match = re.search(r'export interface Preset \{.+?\| "tech";', pt, re.DOTALL)
if ptypes_match:
    with open('src/types/index.ts', 'a', encoding='utf-8') as f:
        f.write('\n\n' + ptypes_match.group(0) + '\n')

# Presets extracting
# The presets array might not end strictly before a semicolon in regex, so just find `export const PRESETS: Preset[] = [...];`
pmatch = re.search(r'export const PRESETS: Preset\[\] = (\[.*\]);', pt, re.DOTALL)
if pmatch:
    with open('src/data/presets.ts', 'w', encoding='utf-8') as f:
        f.write("import type { Preset } from '../types';\n\n")
        f.write(f"export const PRESETS: Preset[] = {pmatch.group(1)};\n")
else:
    print("Preset extraction failed!")

