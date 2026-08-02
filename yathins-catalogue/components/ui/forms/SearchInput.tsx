import * as React from "react";
import { Search, X, Loader2 } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { springs } from "@/lib/tokens/transitions";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  shortcutHint?: string;
  showShortcut?: boolean;
  loading?: boolean;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      className,
      value,
      onChange,
      onClear,
      placeholder = "Search...",
      shortcutHint = "⌘K",
      showShortcut = true,
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const [searchValue, setSearchValue] = React.useState<string>(
      (value as string) || ""
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setSearchValue(value as string);
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
      if (onChange) onChange(e);
    };

    const handleClear = () => {
      setSearchValue("");
      if (onClear) onClear();
    };

    return (
      <div className="relative flex items-center w-full group">
        {loading ? (
          <Loader2 className="absolute left-3.5 h-4 w-4 text-amber-400 animate-spin pointer-events-none" />
        ) : (
          <Search className="absolute left-3.5 h-4 w-4 text-neutral-400 group-focus-within:text-neutral-200 transition-colors pointer-events-none" />
        )}
        <input
          ref={ref}
          type="text"
          value={searchValue}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            "w-full h-11 pl-10 pr-16 text-sm text-neutral-100 placeholder:text-neutral-500 bg-[#111111] border border-[#27272A] rounded-[10px] transition-all outline-none",
            "hover:border-neutral-700 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20 shadow-sm",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className
          )}
          {...props}
        />
        <div className="absolute right-3.5 flex items-center gap-2">
          <AnimatePresence mode="wait">
            {searchValue ? (
              <m.button
                key="clear-btn"
                type="button"
                onClick={handleClear}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={springs.snappy}
                aria-label="Clear search"
                className="p-1 text-neutral-400 hover:text-white transition-colors rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-400"
              >
                <X className="h-3.5 w-3.5" />
              </m.button>
            ) : showShortcut ? (
              <kbd key="shortcut" className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 rounded select-none">
                {shortcutHint}
              </kbd>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
