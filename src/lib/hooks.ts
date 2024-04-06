import { useState, useEffect } from "react";
import { IJobItem, IJobItemExpanded } from "./types";
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
  const [jobItem, setJobItem] = useState<IJobItemExpanded | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`${BASE_API_URL}/${id}`);
      const data = await response.json();
      setJobItem(data.jobItem);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  return { jobItem, loading };
};

export const useJobItems = (searchText: string) => {
  const [jobItems, setJobItems] = useState<IJobItem[]>([]);
  const [loading, setLoading] = useState(false);

  const jobItemsSliced = jobItems.slice(0, 7);
  const totalNumbersOfResults = jobItems.length;

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
  return { jobItemsSliced, totalNumbersOfResults, loading };
};

export const useDebounce = <T>(value: T, delay = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);
  return debouncedValue;
};
