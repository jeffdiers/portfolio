"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { usePathname } from "next/navigation";

const HistoryContext = createContext<string | undefined>(undefined);
export const useHistory = () => useContext(HistoryContext);

const HistoryProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  const prevRef = useRef<string | undefined>(undefined);
  const [previousPathname, setPreviousPathname] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    // prevRef.current is the pathname from the previous render
    setPreviousPathname(prevRef.current);
    // store current pathname for next time
    prevRef.current = pathname;
  }, [pathname]);

  return (
    <HistoryContext.Provider value={previousPathname}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
