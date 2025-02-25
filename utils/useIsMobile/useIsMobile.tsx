import { useEffect, useState } from "react";



export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const userAgent: string = navigator.userAgent
    const regexs = [/(Android)(.+)(Mobile)/i, /BlackBerry/i, /iPhone|iPod/i, /Opera Mini/i, /IEMobile/i]
    setIsMobile(regexs.some((b) => userAgent.match(b)))
  }, []);

  return isMobile
}