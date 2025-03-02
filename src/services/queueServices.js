import { useState, useEffect, useRef } from "react";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/queue-num`;

const queueNumServices = () => {
  const [queueNum, setQueueNum] = useState(null);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return; 
    fetched.current = true;

    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setQueueNum(data.queueNum))
      .catch((error) => console.error("Error fetching queue number:", error));
  }, []);

  return queueNum;
};

export { queueNumServices };
