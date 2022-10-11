import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
  selector: string;
};

export default function ReactPortal({
  children,
  selector,
}: PortalProps): React.ReactPortal | null {
  const ref = useRef<HTMLElement | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current as HTMLElement) : null;
}
