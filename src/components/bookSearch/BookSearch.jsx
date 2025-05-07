import { Search } from "lucide-react";

const BookSearch = ({ onSearch, search }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex-1 max-w-xl mx-4">
      <div className="flex items-center bg-white rounded-md overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="Search Books..."
          className="w-full px-4 py-2 text-sm text-[#282D77] focus:outline-none"
          onChange={handleSearch}
          value={search}
        />
        <button className="px-3">
          <Search className="w-6 text-[#282D77]" />
        </button>
      </div>
    </div>
  );
};

export default BookSearch;
