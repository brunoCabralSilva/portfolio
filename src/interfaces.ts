export interface IJob {
  role: String;
  company: String;
  job: String;
  serviceTime: String;
  time: String;
  local: String;
  type: String;
  description: String[];
}

export interface ICourse {
  company: String;
  course: String;
  time: String;
  description: String[];
  skills: String[];
}

export interface IArticle {
  name: string;
  link: string;
}

export interface IProject {
  title: string;
  deploy: string;
  github: string;
  description: string;
  skills: string[];
}