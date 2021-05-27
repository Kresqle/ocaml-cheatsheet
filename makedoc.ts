import fs from 'fs'

interface Doc {
  title: string
  chapters: {
    name: string
    title: string
    desc?: string
    complexity?: string
    sections: {
      name: string
      title: string
      desc?: string
      hideTitle?: boolean
      complexity?: string
      entries: {
        name: string
        code: string
        desc: string
        complexity?: string
        indexEntry?: string
      }[]
    }[]
  }[]
}

function fmtComplexity (comp?: string): string {
  return comp ? comp.split('\n').map(line => '> ' + line).join('\n') + '\n\n' : ''
}

function generate (inputPath: string, outputPath: string): void {
  const data: Doc = JSON.parse(fs.readFileSync(inputPath, 'utf8'))

  let head = `# ${data.title}\n\n## Table of contents\n`
  let t = ''

  const indexEntries: { name: string, title: string }[] = []

  for (const chapter of data.chapters) {
    head += `- <a href="#${chapter.name}">${chapter.title}</a>\n`

    t += `## <a name="${chapter.name}"></a>${chapter.title}\n\n`

    if (chapter.desc) {
      t += chapter.desc + '\n\n'
    }

    t += fmtComplexity(chapter.complexity)

    for (const section of chapter.sections) {
      if (!section.hideTitle) {
        head += `  - <a href="#${chapter.name}-${section.name}">${section.title}</a>\n`

        t += `### <a name="${chapter.name}-${section.name}"></a>${section.title}\n\n`
      }

      if (section.desc) {
        t += section.desc + '\n\n'
      }

      t += fmtComplexity(section.complexity)

      for (const entry of section.entries) {
        if (entry.indexEntry) {
          indexEntries.push({ name: `${chapter.name}-${section.name}-${entry.name}`, title: entry.indexEntry })
        }

        t += `<a name="${chapter.name}-${section.name}-${entry.name}"></a>\n`

        t += `\`\`\`ocaml\n${entry.code}\n\`\`\`\n`

        t += `${entry.desc}\n\n`

        t += fmtComplexity(entry.complexity)
      }
    }
  }

  const index = indexEntries.sort(({ title: a }, { title: b }) => a > b ? 1 : -1).map(({ name, title }) => `- <a href="#${name}">${title}</a>`).join('\n')

  const doc = head + '\n## Index\n' + index + '\n' + t

  console.log(doc)
  fs.writeFileSync(outputPath, doc)
}

generate('doc.json', 'README.md')
