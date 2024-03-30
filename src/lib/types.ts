export interface IJobItem {
  id: number;
  title: string;
  company: string;
  badgeLetters: string;
  date: string;
  relevanceScore: number;
  daysAgo: number;
}

export interface IJobItemExpanded extends IJobItem {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  location: string;
  salary: string;
  coverImgURL: string;
  companyURL: string;
}

export type PageDirection = "next" | "previous";

export type SortBy = "relevant" | "recent";
