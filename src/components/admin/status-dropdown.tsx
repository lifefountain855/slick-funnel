import { useState, useRef, useEffect } from "react";

export interface StatusOption {
  name: string;
  color: string; // Must be full Tailwind strings like "!text-emerald-400"
}

export interface StatusDropdownProps {
  selected: {
    id: string | number;
    status: string;
  };
  statuses: StatusOption[];
  updateLead: (data: { status: string }) => void | Promise<void>;
}

export default function StatusDropdown({ selected, statuses, updateLead }: StatusDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Match current status object to pull the specific color class
  const currentStatusObj = statuses.find((s) => s.name === selected.status);

  // Close dropdown menu when clicking outside the component
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full" ref={dropdownRef}>
      <label 
        id={`status-label-${selected.id}`}
        className="block text-sm font-medium text-mist-300 mb-1"
      >
        Status
      </label>

      <div className="relative">
        {/* Trigger Button */}
        <button
          type="button"
          id={`status-select-${selected.id}`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-full items-center justify-between rounded-md border border-mist-800 bg-mist-900 px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          {/* Text color applied directly to span to override parent text defaults */}
          <span className={currentStatusObj?.color || "!text-mist-200"}>
            {selected.status}
          </span>
          <svg
            className={`h-4 w-4 text-mist-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Custom Options List */}
        {isOpen && (
          <ul
            role="listbox"
            aria-labelledby={`status-label-${selected.id}`}
            className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-mist-800 bg-mist-900 py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            {statuses.map((status) => {
              const isSelected = status.name === selected.status;

              return (
                <li
                  key={status.name}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    void updateLead({ status: status.name });
                    setIsOpen(false);
                  }}
                  className={`cursor-pointer select-none px-3 py-2 text-sm font-medium transition-colors hover:bg-mist-800 ${
                    status.color
                  } ${isSelected ? "bg-mist-800/80" : ""}`}
                >
                  {status.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}