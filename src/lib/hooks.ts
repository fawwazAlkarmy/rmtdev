import { useState, useEffect } from "react";

export const useJobItems = (searchText: string) => {
  const [jobItems, setJobItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!searchText) return;
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );
      const data = await response.json();
      setJobItems(data.jobItems);
      setLoading(false);
    };
    fetchData();
  }, [searchText]);
  return { jobItems, loading };
};
