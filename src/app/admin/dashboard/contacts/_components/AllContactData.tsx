"use client";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

import { toast } from "sonner";
import DeleteModal from "@/components/modals/DeleteModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye, Trash2 } from "lucide-react";
import {
  ContactMessage,
  ContactMessageApiResponse,
} from "./contacts-data-type";

const AllContactsData = () => {
  const session = useSession();
  const token = (session?.data?.user as { token?: string })?.token;

  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(
    null
  );

  const [selectedReviewId, setSelectedReviewId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery<ContactMessageApiResponse>({
    queryKey: ["all-contacts-data"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact-messages`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
  });

  const allData = data?.data?.data || [];

  if (isLoading) {
    return <div className="w-full h-[500px]">Loading...</div>;
  } else if (isError) {
    return (
      <div className="w-full h-[500px]">
        <ErrorContainer message={error?.message || "Something went Wrong"} />
      </div>
    );
  }

  const handleViewContact = (contact: ContactMessage) => {
    setSelectedContact(contact);
    setViewModalOpen(true);
  };

  const handleDeleteReview = async () => {
    if (!selectedReviewId) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact-messages/${selectedReviewId}`,
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
        queryClient.invalidateQueries({ queryKey: ["all-contacts-data"] });
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
      <div className="border rounded-[10px] bg-white shadow-lg px-5 pb-10">
        <h2 className="text-3xl font-bold text-[#0F2A5C] leading-normal text-center py-4">
          All Contacts Data
        </h2>
        <table className="w-full">
          <thead>
            <tr className="border border-gray-300 bg-[#0F2A5C] text-white">
              <th className="border-r border-gray-300 py-2">SL</th>
              <th className="border-r border-gray-300 py-2">Full Name</th>
              <th className="border-r border-gray-300 py-2">Email</th>
              <th className="border-r border-gray-300 py-2">Phone</th>
              <th className="border-r border-gray-300 py-2">City</th>
              {/* <th className="border-r border-gray-300 py-2">Organization</th> */}
              {/* <th className="border-r border-gray-300 py-2">Message</th> */}
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
                  {item?.first_name} {item?.last_name}
                  </td>
                  <td className="border-r border-gray-300 text-center py-2 text-[#0F2A5C]">
                    {item.email}
                  </td>
                  <td className="border-r border-gray-300 text-center py-2 text-[#0F2A5C]">
                    {item.phone}
                  </td>
                  <td className="border-r border-gray-300 text-center py-2 text-[#0F2A5C]">
                    {item.city}
                  </td>
                  {/* <td className="border-r border-gray-300 text-center py-2 text-[#0F2A5C]">
                    {item.organization}
                  </td> */}
                  {/* <td className="border-r border-gray-300 text-center p-2 text-[#0F2A5C] w-[50%]">
                    {item.help}
                  </td> */}
                  <td className="-translate-y-1/5">
                    <div className=" flex items-center justify-center gap-5">
                      <div>
                        <button
                          onClick={() => handleViewContact(item)}
                          className="text-[#0F2A5C]"
                        >
                          <Eye/>
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


        {/* Logout modal */}
        {deleteModalOpen && (
          <DeleteModal
            isOpen={deleteModalOpen}
            onClose={() => setDeleteModalOpen(false)}
            onConfirm={handleDeleteReview}
          />
        )}

        <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
          <DialogContent className="max-w-2xl rounded-[12px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#0F2A5C]">
                Contact Details
              </DialogTitle>
            </DialogHeader>

            {selectedContact && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#0F2A5C]">
                <div className="space-y-1 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">First Name</p>
                  <p className="text-base font-semibold">
                    {selectedContact.first_name || "N/A"}
                  </p>
                </div>
                <div className="space-y-1 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">Last Name</p>
                  <p className="text-base font-semibold">
                    {selectedContact.last_name || "N/A"}
                  </p>
                </div>
                <div className="space-y-1 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <p className="text-base font-semibold break-all">
                    {selectedContact.email || "N/A"}
                  </p>
                </div>
                <div className="space-y-1 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">Phone</p>
                  <p className="text-base font-semibold">
                    {selectedContact.phone || "N/A"}
                  </p>
                </div>
                <div className="space-y-1 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">City</p>
                  <p className="text-base font-semibold">
                    {selectedContact.city || "N/A"}
                  </p>
                </div>
                <div className="space-y-1 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">Organization</p>
                  <p className="text-base font-semibold">
                    {selectedContact.organization || "N/A"}
                  </p>
                </div>
                <div className="space-y-1 rounded-lg bg-slate-50 p-4 md:col-span-2">
                  <p className="text-sm font-medium text-slate-500">Message</p>
                  <p className="text-base leading-7 whitespace-pre-wrap">
                    {selectedContact.help || "N/A"}
                  </p>
                </div>
                <div className="space-y-1 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">Created At</p>
                  <p className="text-base font-semibold">
                    {new Date(selectedContact.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="space-y-1 rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">Updated At</p>
                  <p className="text-base font-semibold">
                    {new Date(selectedContact.updated_at).toLocaleString()}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AllContactsData;
