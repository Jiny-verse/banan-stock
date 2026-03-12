import re

with open('src/data/camera.ts', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r"tag:\s*([^}]+?)\s*(?=\})", r"tags: [\1]", text)
text = text.replace("tags: ['']", "tags: []")
# For strings containing single quotes, escape them
text = text.replace("bird's", r"bird\'s")

with open('src/data/camera.ts', 'w', encoding='utf-8') as f:
    f.write(text)

with open('src/data/perspective.ts', 'r', encoding='utf-8') as f:
    ptext = f.read()
ptext = ptext.replace("bird's", r"bird\'s").replace("worm's", r"worm\'s")
with open('src/data/perspective.ts', 'w', encoding='utf-8') as f:
    f.write(ptext)

with open('src/data/shotTypes.ts', 'r', encoding='utf-8') as f:
    stext = f.read()
stext = stext.replace("Bird's", r"Bird\'s").replace("bird's", r"bird\'s").replace("worm's", r"worm\'s")
with open('src/data/shotTypes.ts', 'w', encoding='utf-8') as f:
    f.write(stext)
