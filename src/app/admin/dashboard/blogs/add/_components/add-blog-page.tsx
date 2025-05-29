
"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { DashboardLayout } from "@/components/dashboard-layout"
import { RichTextEditor } from "@/components/rich-text-editor"
import { Plus, X, Upload, ImagePlus } from "lucide-react"
import Image from "next/image"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { useSession } from "next-auth/react"

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  details: z.string().min(1, "Content is required"),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  keywords: z.array(z.string()).min(1, "At least one keyword is required"),
  image: z.any().optional(),
})

type BlogFormValues = z.infer<typeof formSchema>

export default function AddBlogPage() {
  const router = useRouter()
  const [tags, setTags] = useState<string[]>([])
  const [keywords, setKeywords] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")
  const [keywordsInput, setKeywordsInput] = useState("")
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)

  const session = useSession()
  const token = (session.data?.user as { token: string })?.token

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      details: "",
      meta_title: "",
      meta_description: "",
      tags: [],
      keywords: [],
      image: undefined,
    },
  })

  // add new blog api
  const { mutate, isPending } = useMutation({
    mutationKey: ["addBlog"],
    mutationFn: (formData: FormData) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message || "Failed to add blog")
        return
      } else {
        toast.success(data.message || "Blog added successfully")
        router.push("/admin/dashboard/blogs")
      }
    },
  })

  const onSubmit = async (data: BlogFormValues) => {

    const formData = new FormData()
    formData.append("title", data.title)
    formData.append("details", data.details)
    formData.append("meta_title", data.meta_title || "")
    formData.append("meta_description", data.meta_description || "")
    formData.append("tags", JSON.stringify(tags))
    formData.append("keywords", JSON.stringify(keywords))

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0])
    }

    mutate(formData)
  }

  // Helper function to add tag
  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      const newTags = [...tags, tagInput.trim()]
      setTags(newTags)
      form.setValue("tags", newTags)
      setTagInput("")
    }
  }

  // Helper function to add keyword
  const addKeyword = () => {
    if (keywordsInput.trim() && !keywords.includes(keywordsInput.trim())) {
      const newKeywords = [...keywords, keywordsInput.trim()]
      setKeywords(newKeywords)
      form.setValue("keywords", newKeywords)
      setKeywordsInput("")
    }
  }

  // tags
  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTag()
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(newTags)
    form.setValue("tags", newTags)
  }

  // keywords
  const handleAddKeyword = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addKeyword()
    }
  }

  const handleRemoveKeyword = (keywordToRemove: string) => {
    const newKeywords = keywords.filter((keyword) => keyword !== keywordToRemove)
    setKeywords(newKeywords)
    form.setValue("keywords", newKeywords)
  }

  const handleImageChange = (file: File) => {
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
      form.setValue("image", [file])
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const files = e.dataTransfer.files
    if (files.length > 0 && files[0].type.startsWith("image/")) {
      handleImageChange(files[0])
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  return (
    <DashboardLayout title="Add New Blog">
      <div className="">
        <h2 className="text-[#0E2A5C] text-2xl font-medium leading-[120%] tracking-[0%] pb-[33px]">Add New Blogs</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <div className="lg:col-span-2">
                <div className="pb-[30px] ">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-[#0E2A5C] font-medium leading-[120%] tracking-[0%]">
                          Add Title
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-[50px] w-full text-sm font-medium leading-[120%] tracking-[0%] text-[#0E2A5C] placeholder:text-[#B6B6B6] border border-[#B6B6B6] rounded-[4px] focus:border-none focus:ring-0 focus-visible:border-none p-4 mt-2"
                            placeholder="Add your title..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className=" ">
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-[#0E2A5C] font-medium leading-[120%] tracking-[0%]">
                          Content
                        </FormLabel>
                        <FormControl>
                          <RichTextEditor
                            content={field.value}
                            onChange={field.onChange}
                            placeholder="Description...."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="">
                <div className="border border-[#B6B6B6] rounded-[8px] p-[15px]">
                  <FormField
                    control={form.control}
                    name="image"
                    render={() => (
                      <FormItem>
                        <FormLabel className="text-sm text-[#0E2A5C] font-medium leading-[120%] tracking-[0%] mb-3 block">
                          Thumbnail
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            {!previewImage ? (
                              <div
                                className={`
                                  h-[310px] border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                                  ${isDragOver ? "border-blue-400 bg-blue-50" : "border-gray-300 hover:border-gray-400"}
                                `}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onClick={() => document.getElementById("image-upload")?.click()}
                              >
                                <div className="h-full flex flex-col items-center justify-center space-y-3">
                                  <div className="">
                                    <ImagePlus className="w-[38px] h-[38px] text-gray-400 " />
                                  </div>
                                </div>
                                <input
                                  id="image-upload"
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    if (file) {
                                      handleImageChange(file)
                                    }
                                  }}
                                />
                              </div>
                            ) : (
                              <div className="relative">
                                <Image
                                  width={292}
                                  height={277}
                                  src={previewImage || "/placeholder.svg"}
                                  alt="Preview"
                                  className="w-full h-[310px] object-cover rounded-lg border-2 border-dashed border-gray-300"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    setPreviewImage(null)
                                    form.setValue("image", undefined)
                                  }}
                                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-50"
                                >
                                  <X className="h-4 w-4 text-gray-600" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => document.getElementById("image-upload")?.click()}
                                  className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
                                >
                                  <Upload className="h-4 w-4 text-gray-600" />
                                </button>
                                <input
                                  id="image-upload"
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0]
                                    if (file) {
                                      handleImageChange(file)
                                    }
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-[30px]">
                  <FormLabel className="text-sm text-[#0E2A5C] font-medium leading-[120%] tracking-[0%]">
                    Add Tags
                  </FormLabel>

                  <div className="relative">
                    <Input
                      className="h-[50px] w-full text-sm font-medium leading-[120%] tracking-[0%] mt-2 text-[#0E2A5C] placeholder:text-[#B6B6B6] border border-[#B6B6B6] rounded-[4px] focus:border-none focus:ring-0 focus-visible:border-none p-4 pr-12"
                      type="text"
                      placeholder="Add your tags..."
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 my-2">
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
                  {form.formState.errors.tags && (
                    <p className="text-sm text-red-500 mt-1">{form.formState.errors.tags.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-[30px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
                <FormField
                  control={form.control}
                  name="meta_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-[#0E2A5C] font-medium leading-[120%] tracking-[0%]">
                        Meta Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Meta Title"
                          {...field}
                          className="h-[45px] w-full text-sm font-medium leading-[120%] tracking-[0%] text-[#0E2A5C] placeholder:text-[#B6B6B6] border border-[#B6B6B6] rounded-[4px] focus:border-none focus:ring-0 focus-visible:border-none px-4 py-[14px] mt-2"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="meta_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-[#0E2A5C] font-medium leading-[120%] tracking-[0%]">
                        Meta Description
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Meta Description"
                          {...field}
                          className="h-[45px] w-full text-sm font-medium leading-[120%] tracking-[0%] text-[#0E2A5C] placeholder:text-[#B6B6B6] border border-[#B6B6B6] rounded-[4px] focus:border-none focus:ring-0 focus-visible:border-none px-4 py-[14px] mt-2"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="">
                  <FormLabel className="text-sm text-[#0E2A5C] font-medium leading-[120%] tracking-[0%]">
                    Keywords
                  </FormLabel>

                  <div className="relative">
                    <Input
                      className="h-[45px] w-full text-sm font-medium leading-[120%] mt-2 tracking-[0%] text-[#0E2A5C] placeholder:text-[#B6B6B6] border border-[#B6B6B6] rounded-[4px] focus:border-none focus:ring-0 focus-visible:border-none px-4 py-[14px] pr-12"
                      type="text"
                      placeholder="Keywords"
                      value={keywordsInput}
                      onChange={(e) => setKeywordsInput(e.target.value)}
                      onKeyDown={handleAddKeyword}
                    />
                    <button
                      type="button"
                      onClick={addKeyword}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 my-2">
                    {keywords.map((keyword) => (
                      <div
                        key={keyword}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        {keyword}
                        <button
                          type="button"
                          onClick={() => handleRemoveKeyword(keyword)}
                          className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                  {form.formState.errors.keywords && (
                    <p className="text-sm text-red-500 mt-1">{form.formState.errors.keywords.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-[30px] mb-[208px]">
              <button
                className="text-xl font-medium leading-[120%] tracking-[0%] text-[#F4F4F4] py-[13px] px-[26px] rounded-[8px] bg-[#0E2A5C] disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Publishing..." : "Publish Blog"}
              </button>
            </div>
          </form>
        </Form>
      </div>
    </DashboardLayout>
  )
}
