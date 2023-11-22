import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnlineFunction() {
      setIsOnline(true);
    }

    function handleOfflineFunction() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnlineFunction);
    window.addEventListener("offline", handleOfflineFunction);

    return () => {
      window.removeEventListener("online", handleOnlineFunction);
      window.removeEventListener("offline", handleOfflineFunction);
    };
  });

  return isOnline;
}
