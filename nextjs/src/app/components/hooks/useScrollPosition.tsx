import {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  MutableRefObject,
} from "react";

export const ScrollPositionContext = createContext<number | undefined>(
  undefined,
);

export function useScrollPosition() {
  return useContext(ScrollPositionContext);
}

export function useScrollPOsiitionProvider(ref: MutableRefObject<HTMLElement>) {
  const [scrollPosition, setScrollPosition] = useState<number | undefined>(
    undefined,
  );

  const handleScroll = () => {
    if (ref.current) {
      setScrollPosition(ref.current.scrollTop);
    }
  };

  const scrollProvider = ({
    children,
    className,
  }: {
    children: ReactNode;
    className: string;
  }) => {
    return (
      <ScrollPositionContext.Provider value={scrollPosition}>
        {children}
      </ScrollPositionContext.Provider>
    );
  };

  return { scrollProvider };
}
