"use client"

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import TextAlign from "@tiptap/extension-text-align"
import {
  Bold,
  Italic,
  UnderlineIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Undo,
  Redo,
} from "lucide-react"

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
}

export function RichTextEditor({ content, onChange, placeholder = "Start writing..." }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: "tiptap prose prose-sm sm:prose-base focus:outline-none max-w-none",
        placeholder,
      },
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className="border rounded-md overflow-hidden">
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="flex items-center bg-white shadow-lg border rounded-md overflow-hidden">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-2 ${editor.isActive("bold") ? "bg-gray-100 text-primary" : ""}`}
              type="button"
            >
              <Bold className="h-4 w-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-2 ${editor.isActive("italic") ? "bg-gray-100 text-primary" : ""}`}
              type="button"
            >
              <Italic className="h-4 w-4" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={`p-2 ${editor.isActive("underline") ? "bg-gray-100 text-primary" : ""}`}
              type="button"
            >
              <UnderlineIcon className="h-4 w-4" />
            </button>
          </div>
        </BubbleMenu>
      )}

      <EditorContent editor={editor} className="min-h-[200px]" />

      <div className="tiptap-toolbar overflow-x-auto">
        <div className="tiptap-toolbar-group">
          <select
            onChange={(e) => {
              const value = e.target.value
              if (value === "paragraph") {
                editor.chain().focus().setParagraph().run()
              } else if (value === "heading1") {
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              } else if (value === "heading2") {
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              } else if (value === "heading3") {
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
            }}
            value={
              editor.isActive("heading", { level: 1 })
                ? "heading1"
                : editor.isActive("heading", { level: 2 })
                  ? "heading2"
                  : editor.isActive("heading", { level: 3 })
                    ? "heading3"
                    : "paragraph"
            }
            className="tiptap-toolbar-select"
          >
            <option value="paragraph">Paragraph</option>
            <option value="heading1">Heading 1</option>
            <option value="heading2">Heading 2</option>
            <option value="heading3">Heading 3</option>
          </select>
        </div>

        <div className="tiptap-toolbar-group">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`tiptap-toolbar-button ${editor.isActive("bold") ? "is-active" : ""}`}
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`tiptap-toolbar-button ${editor.isActive("italic") ? "is-active" : ""}`}
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`tiptap-toolbar-button ${editor.isActive("underline") ? "is-active" : ""}`}
            title="Underline"
          >
            <UnderlineIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="tiptap-toolbar-group">
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={`tiptap-toolbar-button ${editor.isActive({ textAlign: "left" }) ? "is-active" : ""}`}
            title="Align left"
          >
            <AlignLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={`tiptap-toolbar-button ${editor.isActive({ textAlign: "center" }) ? "is-active" : ""}`}
            title="Align center"
          >
            <AlignCenter className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={`tiptap-toolbar-button ${editor.isActive({ textAlign: "right" }) ? "is-active" : ""}`}
            title="Align right"
          >
            <AlignRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            className={`tiptap-toolbar-button ${editor.isActive({ textAlign: "justify" }) ? "is-active" : ""}`}
            title="Justify"
          >
            <AlignJustify className="h-4 w-4" />
          </button>
        </div>

        <div className="tiptap-toolbar-group">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`tiptap-toolbar-button ${editor.isActive("bulletList") ? "is-active" : ""}`}
            title="Bullet list"
          >
            <List className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`tiptap-toolbar-button ${editor.isActive("orderedList") ? "is-active" : ""}`}
            title="Ordered list"
          >
            <ListOrdered className="h-4 w-4" />
          </button>
        </div>

        <div className="tiptap-toolbar-group">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="tiptap-toolbar-button"
            title="Undo"
          >
            <Undo className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="tiptap-toolbar-button"
            title="Redo"
          >
            <Redo className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
