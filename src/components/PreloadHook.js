import { useEffect } from "react";

export default function useImagePreload(src) {
  useEffect(() => {
    const img = new Image();
    img.src = src;
  }, [src]);
}