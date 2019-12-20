import Figure from "./figure"
import CodeBlock from "./code-block"
import Blockquote from "./blockquote"

const serializers = {
  types: {
    figure: Figure,
    codeBlock: CodeBlock,
    blockquote: Blockquote,
  },
}

export default serializers
