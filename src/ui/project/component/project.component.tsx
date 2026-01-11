import { useAppSelector, useAppDispatch } from '@/store/redux.store';
import { closeProject } from '@/store/slice/project.slice';
import { PROJECTS_DATA } from '../constants/project.constant';
import ProjectView from './project.view';

const Project = () => {
  const dispatch = useAppDispatch();
  const openProjectId = useAppSelector((state) => state.project.openProjectId);

  const project = PROJECTS_DATA.find((p) => p.id === openProjectId);

  if (!project) return null;

  return <ProjectView project={project} onClose={() => dispatch(closeProject())} />;
};

export default Project;