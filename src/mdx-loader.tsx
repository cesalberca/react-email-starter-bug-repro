import type { FC } from 'react'
import { join } from 'node:path'
import { readFileSync } from 'node:fs'
import { evaluateSync } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

export const MdxLoader: FC<{ slug: string }> = ({ slug }) => {
  const filePath = join(process.cwd(), 'content', `${slug}.mdx`)
  const code = readFileSync(filePath, 'utf8')

  const { default: Content } = evaluateSync(code, {
    ...runtime,
  } as any)

  return (
    <div>
      <Content />
    </div>
  )
}
