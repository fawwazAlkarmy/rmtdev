import { useActiveId } from "../lib/hooks";
import { IJobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type Props = {
  jobItems: IJobItem[];
  isLoading: boolean;
};

export function JobList({ jobItems, isLoading }: Props) {
  const { activeId } = useActiveId();
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map((jobItem: IJobItem) => (
          <JobListItem
            key={jobItem.id}
            jobItem={jobItem}
            isActive={jobItem.id === activeId}
          />
        ))}
    </ul>
  );
}

export default JobList;
