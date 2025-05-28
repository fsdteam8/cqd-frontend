import CQDDropdownSelector from "@/components/ui/CQDDropdownSelector";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const statusList = [
  { id: 1, name: "Status", value: "all" },
  { id: 2, name: "Published", value: "1" },
  { id: 3, name: "UnPublished", value: "0" },
];

interface BlogHeaderProps {
  search: string;
  setSearch: (value: string) => void;
  status: string | number ;
  setStatus: (value: string | number ) => void;
}

const BlogHeader = ({ search, setSearch, status, setStatus }: BlogHeaderProps) => {
    
  return (
    <div className="py-[25px] px-[30px] bg-white shadow-[0_4px_10px_0_#0000001A] rounded-[15px] mt-[30px]">
      <div className="w-full flex items-center justify-between">
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
        <div className="w-full md:max-w-[200px] ">
          <CQDDropdownSelector
            list={statusList}
            selectedValue={status}
            onValueChange={setStatus}
            placeholderText="Status"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
