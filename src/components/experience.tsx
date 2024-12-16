import { IJob } from '@/interfaces';
import experienceList from '../data/experience.json';
import JobItem from './jobItem';
export default function Experience() {
  return(
    <div className="mb-3 bg-white rounded-xl p-8">
      <p className="font-bold text-xl mb-5">Experiência</p>
      <div className="mb-2">
        <div>
          {
            experienceList.map((job: IJob, index: number) => (
              <JobItem item={job} key={index} index={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
}