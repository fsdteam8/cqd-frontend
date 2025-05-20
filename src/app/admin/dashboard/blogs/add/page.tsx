"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { RichTextEditor } from "@/components/rich-text-editor"
import { ImageIcon, Plus, X } from "lucide-react"
import Image from "next/image"

export default function AddBlogPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [metaTitle, setMetaTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [keywords, setKeywords] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, you would submit the form data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log({
        title,
        content,
        metaTitle,
        metaDescription,
        keywords,
        tags,
      })

      // Redirect back to blogs page
      router.push("/admin/dashboard/blogs")
    } catch (error) {
      console.error("Error publishing blog:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault()
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()])
      }
      setTagInput("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <DashboardLayout title="Add New Blog">
      <div className="p-6 max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="dashboard-card p-6">
                <label className="form-label">Blog Title</label>
                <input
                  type="text"
                  placeholder="Enter a descriptive title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="form-input"
                />
              </div>

              <div className="dashboard-card p-6">
                <label className="form-label">Content</label>
                <RichTextEditor
                  content={content}
                  onChange={setContent}
                  placeholder="Start writing your blog content here..."
                />
              </div>

              <div className="dashboard-card p-6">
                <h3 className="text-lg font-medium mb-4">SEO Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="form-label">Meta Title</label>
                    <input
                      type="text"
                      placeholder="Meta Title"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      className="form-input"
                    />
                    <p className="text-xs text-gray-500 mt-1">{metaTitle.length}/60 characters recommended</p>
                  </div>

                  <div>
                    <label className="form-label">Meta Description</label>
                    <input
                      type="text"
                      placeholder="Meta Description"
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      className="form-input"
                    />
                    <p className="text-xs text-gray-500 mt-1">{metaDescription.length}/160 characters recommended</p>
                  </div>

                  <div>
                    <label className="form-label">Keywords</label>
                    <input
                      type="text"
                      placeholder="Keywords (comma separated)"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="dashboard-card p-6">
                <label className="form-label">Featured Image</label>
                <div className="border-2 border-dashed rounded-lg p-4 text-center">
                  {previewImage ? (
                    <div className="relative">
                      <Image
                      width={300}
                      height={200}
                        src={previewImage || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => setPreviewImage(null)}
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <ImageIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <input
                        type="file"
                        id="thumbnail"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      <label htmlFor="thumbnail" className="cursor-pointer text-center block">
                        <div className="text-gray-500 mb-2">Click to upload or drag and drop</div>
                        <div className="text-xs text-gray-400">PNG, JPG or GIF (max. 2MB)</div>
                      </label>
                    </>
                  )}
                </div>
              </div>

              <div className="dashboard-card p-6">
                <label className="form-label">Tags</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag) => (
                    <div
                      key={tag}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-2 text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Add a tag and press Enter"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleAddTag}
                    className="form-input pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (tagInput.trim()) {
                        if (!tags.includes(tagInput.trim())) {
                          setTags([...tags, tagInput.trim()])
                        }
                        setTagInput("")
                      }
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Press Enter to add a tag</p>
              </div>

              <div className="dashboard-card p-6">
                <label className="form-label">Publishing Options</label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                    <span>Publish immediately</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                    <span>Feature this post</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                    <span>Allow comments</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <button type="button" onClick={() => router.push("/dashboard/blogs")} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
              {isSubmitting ? "Publishing..." : "Publish Blog"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}
