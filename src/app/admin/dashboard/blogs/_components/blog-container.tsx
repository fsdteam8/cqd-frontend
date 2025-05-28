"use client";

import DeleteModal from "@/components/shared/modals/DeleteModal";
import { BlogApiResponse } from "@/components/types/BlogDataType";
import { CQDPagination } from "@/components/ui/cqd-pagination";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PencilLine, Trash } from "lucide-react";
import moment from "moment";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import BlogHeader from "./BlogHeader";
import { useSearchStore } from "@/components/zustand/features/BlogSearch";
import { useDebounce } from "@/hooks/useDebounce";
import { useStatusStore } from "@/components/zustand/features/BlogStatus";

const BlogContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const session = useSession();
  const token = (session?.data?.user as { token?: string })?.token;
  const queryClient = useQueryClient();
  const { search, setSearch } = useSearchStore();
  const { status, setStatus } = useStatusStore();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  const debounceValue = useDebounce(search, 500);

  // Fetch all blogs
  const { data, isLoading, error, isError } = useQuery<BlogApiResponse>({
    queryKey: ["all-blogs", currentPage, debounceValue, status],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs?page=${currentPage}&search=${debounceValue}&publish=${status}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((res) => res.json()),
  });



  // Mutation to toggle publish status
  const updatePublishStatus = useMutation({
    mutationFn: ({ id, publish }: { id: number; publish: number }) => {
      return fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}?_method=PUT`,
        {
          method: "POST", // or PATCH depending on your backend
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ publish }),
        }
      ).then((res) => res.json());
    },
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message || "Failed to update publish status");
        return;
      } else {
        toast.success(data?.message || "Publish status updated successfully");
      }
      queryClient.invalidateQueries({ queryKey: ["all-blogs"] });
    },
  });

  // delete api logic
  const { mutate: deleteBlog } = useMutation({
    mutationKey: ["delete-blog"],
    mutationFn: (id: number) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message || "Failed to delete blog");
        return;
      } else {
        toast.success(data?.message || "Blog deleted successfully");
      }
      queryClient.invalidateQueries({ queryKey: ["all-blogs"] });
    },
  });

  // delete modal logic
  const handleDelete = () => {
    if (selectedBlogId) {
      deleteBlog(selectedBlogId);
    }
    setDeleteModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div>
      {/* blog header */}
      <BlogHeader
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />
      <div className="overflow-hidden rounded-[16px] shadow-[0_4px_10px_0_#0000001A] border border-[#E5E7EB] mt-[30px] mb-[305px]">
        <table className="w-full ">
          <thead className="bg-[#0E2A5C] text-white">
            <tr>
              <th className="text-lg font-semibold py-[19px] px-[45px]">
                Image
              </th>
              <th className="text-lg font-semibold py-[19px] px-[205px]">
                Title
              </th>
              <th className="text-lg font-semibold py-[19px] px-[53px]">
                Date
              </th>
              <th className="text-lg font-semibold py-[19px] px-[30px]">
                Published
              </th>
              <th className="text-lg font-semibold py-[19px] px-[45px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="border-b border-[#E5E7EB]">
            {data?.data?.map((blog) => (
              <tr key={blog.id} className="py-[10px]">
                <td className="w-full flex items-center justify-center py-[10px]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/Blogs/${blog.image}`}
                    alt={blog.title}
                    width={56}
                    height={70}
                    className="w-[56px] h-[70px] object-cover"
                  />
                </td>
                <td className="text-base font-light text-[#0E2A5C] text-center">
                  {blog.title}
                </td>
                <td className="text-base font-light text-[#0E2A5C] text-center">
                  {moment(blog.created_at).format("DD MMMM YYYY")}
                </td>
                <td>
                  <div className="flex items-center justify-center space-x-2">
                    <Switch
                      id={`${blog.id}`}
                      checked={Boolean(blog.publish)}
                      onCheckedChange={(value) =>
                        updatePublishStatus.mutate({
                          id: blog.id,
                          publish: value ? 1 : 0,
                        })
                      }
                      disabled={updatePublishStatus.isPending}
                    />
                    <Label htmlFor={`${blog.id}`} className="sr-only">
                      {/* Toggle publish status for {blog.title} */}
                    </Label>
                  </div>
                </td>
                <td className="">
                  <div className="w-full flex items-center justify-center gap-[10px]">
                    <Link href={`/admin/dashboard/blogs/edit/${blog.id}`}>
                      <button
                        type="button"
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                        aria-label={`Edit ${blog.title}`}
                      >
                        <PencilLine className="text-[#0E2A5C]" size={18} />
                      </button>
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setDeleteModalOpen(true);
                        setSelectedBlogId(blog?.id);
                      }}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      aria-label={`Delete ${blog.title}`}
                    >
                      <Trash className="text-[#0E2A5C]" size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="">
          {data && data?.total_pages > 1 && (
            <div className="flex justify-between items-center">
              <p className="font-normal text-base leading-[120%] text-[#0E2A5C] pl-[26px]">
                Showing {data?.current_page} from {data?.total_pages} pages
              </p>
              <div>
                <CQDPagination
                  currentPage={currentPage}
                  totalResults={data?.total_blogs}
                  resultsPerPage={itemsPerPage}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          )}
        </div>

        {/* delete modal  */}
        {deleteModalOpen && (
          <DeleteModal
            isOpen={deleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
            onConfirm={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default BlogContainer;
