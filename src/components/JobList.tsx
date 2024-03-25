import { IJobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type Props = {
  jobItems: IJobItem[];
  isLoading: boolean;
};

export function JobList({ jobItems, isLoading }: Props) {
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map((jobItem: IJobItem) => <JobListItem jobItem={jobItem} />)}
    </ul>
  );
}

export default JobList;
