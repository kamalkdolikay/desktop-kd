export interface ProjectLink {
  text: string;
  url: string;
}

export interface ProjectItem {
  subtitle?: string; // Optional because 'Technical Implementation' uses label/value
  description?: string;
  label?: string;
  value?: string;
}

export interface ProjectSection {
  title: string;
  content?: string;
  items?: ProjectItem[];
}

export interface ProjectResponsibilityColumn {
  title: string;
  items: ProjectItem[];
}

export interface ProjectData {
  id: string;
  dialogTitle: string;
  banner: {
    src: string;
    alt: string;
  };
  background: {
    title: string;
    subtitle: string;
    description: string;
    links: ProjectLink[];
    role: string;
    timeline: string;
  };
  overview?: ProjectSection;
  responsibilities?: ProjectResponsibilityColumn[];
  demo?: ProjectSection;
  research?: ProjectSection;
  status?: ProjectSection;
}

export interface ProjectViewProps {
  project: ProjectData;
  onClose: () => void;
}