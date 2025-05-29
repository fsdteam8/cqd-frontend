"use client";

import * as React from "react";
import { format } from "date-fns";
import { ChevronDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CQDDropdownSelector from "@/components/ui/CQDDropdownSelector";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const statusList = [
  { id: 1, name: "All Status", value: "all" },
  { id: 2, name: "Published", value: "1" },
  { id: 3, name: "Unpublished", value: "0" },
];

interface BlogHeaderProps {
  search: string;
  setSearch: (value: string) => void;
  status: string | number;
  setStatus: (value: string | number) => void;
  date: Date | null;
  setDate: (date: Date | null) => void;
}

const BlogHeader = ({
  search,
  setSearch,
  status,
  setStatus,
  date,
  setDate,
}: BlogHeaderProps) => {
  const clearDate = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setDate(null);
  };
  return (
    <div className="py-[25px] px-[30px] bg-white shadow-[0_4px_10px_0_#0000001A] rounded-[15px] mt-[30px]">
      <div className="w-full flex items-center justify-between gap-2">
        <div className="w-full md:max-[388px]">
          <Input
            type="search"
            startIcon={Search}
            placeholder="Search ......"
            className="h-[49px] w-full max-w-[388px] py-[15px] pl-[40px] pr-[15px] text-[#0E2A5C] placeholder:text-[#595959] font-base font-light leading-[120%] tracking-[0%] focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-[30px]">
          <div className="w-full md:max-w-[200px] ">
            <CQDDropdownSelector
              list={statusList}
              selectedValue={status}
              onValueChange={setStatus}
              placeholderText="Status"
            />
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "h-[49px] w-[200px] justify-between text-base text-[#0E2A5C]  text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "PPP") : <span>Select Date</span>}
                  {/* <CalendarIcon /> */}
                  <ChevronDown className="text-[#595959] !w-[24px] !h-[24px]" />
                  {date && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-auto h-4 w-4 p-0 hover:bg-muted pr-2"
                      onClick={clearDate}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">Clear date</span>
                    </Button>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto mr-14" align="start">
                <Calendar
                  mode="single"
                  selected={date || new Date()}
                  onSelect={(date) => date !== undefined && setDate(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
