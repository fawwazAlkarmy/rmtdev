import JobListItem from "./JobListItem";

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
};

export function JobList({ jobItems }: Props) {
  return (
    <ul className="job-list">
      {jobItems.map((jobItem: any) => (
        <JobListItem jobItem={jobItem} />
      ))}
    </ul>
  );
}

export default JobList;
