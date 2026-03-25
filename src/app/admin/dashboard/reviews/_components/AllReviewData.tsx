"use client";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import AddReview from "./AddReview";
import EditReview from "./EditReview";
import { toast } from "sonner";
import DeleteModal from "@/components/modals/DeleteModal";
import { ReviewsResponse } from "@/components/types/reviewDataType";
import Image from "next/image";
import { SquarePen, Trash2 } from "lucide-react";

const AllReviewData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const token = (session?.data?.user as { token?: string })?.token;

  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [editFormOpen, setEditFormOpen] = useState(false);

  const [selectedReviewId, setSelectedReviewId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery<ReviewsResponse>({
    queryKey: ["all-review-data"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-reviews`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
  });

  const allData = data?.data?.data || [];

  if (isLoading) {
    return <div className="w-full h-[500px]">Loading...</div>;
  } else if (isError) {
    <div className="w-full h-[500px]">
      <ErrorContainer message={error?.message || "Something went Wrong"} />
    </div>;
  }

  const handleDeleteReview = async () => {
    if (!selectedReviewId) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-reviews/${selectedReviewId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await res.json();

      if (res.ok) {
        toast.success("Review deleted successfully!");
        setDeleteModalOpen(false);
        queryClient.invalidateQueries({ queryKey: ["all-review-data"] });
        // Optionally refetch the reviews
      } else {
        toast.error(result?.message || "Failed to delete review.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete review. Please try again.");
    }
  };

  return (
    <div className="">
      <div className="border rounded-[10px] bg-white shadow-lg px-10 pb-10">
        <div className="w-full flex items-center justify-end pt-5">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#0F2A5C] text-white py-1 px-4 rounded-[10px] text-base font-medium"
          >
            Add Review
          </button>
        </div>
        <h2 className="text-3xl font-bold text-[#0F2A5C] leading-normal text-center pb-6">
          All Review Data
        </h2>
        <table className="w-full">
          <thead>
            <tr className="border border-gray-300 bg-[#0F2A5C] text-white">
              <th className="border-r border-gray-300 py-2">SL</th>
              <th className="border-r border-gray-300 py-2">Image</th>
              <th className="border-r border-gray-300 py-2">Name</th>
              <th className="border-r border-gray-300 py-2">Rating</th>
              <th className="border-r border-gray-300 py-2">Review Message</th>
              <th className="">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allData?.map((item, index) => {
              return (
                <tr key={index} className="border border-gray-300">
                  <td className="border-r border-gray-300 text-center py-2 text-[#0F2A5C] ">
                    {index + 1}
                  </td>
                  <td className="border-r border-gray-300 text-center py-2 flex items-center justify-center">
                    <Image
                      src={item.profile_photo_url || "/images/no-img.jpg"}
                      alt="profile image"
                      width={80}
                      height={80}
                      className="w-[80px] h-[80px] rounded-full object-cover"
                    />
                  </td>
                  <td className="border-r border-gray-300 text-center py-2 text-[#0F2A5C]">
                    {item.author_name}
                  </td>
                  <td className="border-r border-gray-300 text-center py-2 text-[#0F2A5C]">
                    {item.rating}
                  </td>
                  <td className="border-r border-gray-300 text-center p-2 text-[#0F2A5C] w-[50%]">
                    {item.text}
                  </td>
                  <td className="-translate-y-1/5">
                    <div className=" flex items-center justify-center gap-5">
                      <div className="">
                        <button
                          onClick={() => {
                            setSelectedReviewId(String(item.id));
                            setEditFormOpen(true);
                          }}
                          className="text-[#0F2A5C]"
                        >
                          <SquarePen />
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setSelectedReviewId(String(item.id));
                            setDeleteModalOpen(true);
                          }}
                          className="text-red-500 "
                        >
                          <Trash2 />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* add review modal  */}
        {isOpen && (
          <AddReview open={isOpen} onOpenChange={() => setIsOpen(false)} />
        )}

        {/* Logout modal */}
        {deleteModalOpen && (
          <DeleteModal
            isOpen={deleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
            onConfirm={handleDeleteReview}
          />
        )}

        {/* edit form modal  */}
        {editFormOpen && (
          <EditReview
            open={editFormOpen}
            onOpenChange={() => setEditFormOpen(false)}
            reviewId={selectedReviewId}
          />
        )}
      </div>
    </div>
  );
};

export default AllReviewData;
