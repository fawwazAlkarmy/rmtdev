import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

interface IJobItem {
  id: number;
  title: string;
  company: string;
  badgeLetters: string;
  date: string;
  relevanceScore: number;
  daysAgo: number;
}

type Props = {
  jobItems: IJobItem[];
  isLoading: boolean;
};

export function JobList({ jobItems, isLoading }: Props) {
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}
      {!isLoading &&
        jobItems.map((jobItem: any) => <JobListItem jobItem={jobItem} />)}
    </ul>
  );
}

export default JobList;
