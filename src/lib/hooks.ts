import { useState, useEffect } from "react";
import { IJobItem } from "./types";
import { BASE_API_URL } from "./constants";

export const useActiveId = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      setActiveId(Number(id));
    };
    handleHashChange(); // Call it once to initialize the state.
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return { activeId };
};

export const useJobItem = (id: number | null) => {
  const [jobItem, setJobItem] = useState<IJobItem | null>(null);
  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const response = await fetch(`${BASE_API_URL}/${id}`);
      const data = await response.json();
      setJobItem(data.jobItem);
    };
    fetchData();
  }, [id]);
  return { jobItem };
};

export const useJobItems = (searchText: string) => {
  const [jobItems, setJobItems] = useState<IJobItem[]>([]);
  const [loading, setLoading] = useState(false);

  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
      const data = await response.json();
      setJobItems(data.jobItems);
      setLoading(false);
    };
    fetchData();
  }, [searchText]);
  return { jobItemsSliced, loading };
};
