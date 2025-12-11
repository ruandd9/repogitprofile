import { Fragment } from 'react';
import { MdClose, MdOpenInNew, MdCode } from 'react-icons/md';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { getLanguageColor } from '../../utils';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: string;
    forks_count: string;
    language: string;
  };
  demoUrl: string;
  onVisitDemo: () => void;
  onVisitGithub: () => void;
}

const ProjectModal = ({
  isOpen,
  onClose,
  project,
  demoUrl,
  onVisitDemo,
  onVisitGithub,
}: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <Fragment>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-base-100 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-base-200">
            <div className="flex items-center space-x-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: getLanguageColor(project.language) }}
              />
              <h3 className="text-xl font-semibold text-base-content">
                {project.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="btn btn-ghost btn-sm btn-circle"
            >
              <MdClose className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-base-content text-opacity-70 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Stats */}
            <div className="flex items-center space-x-4 mb-6 text-sm text-base-content text-opacity-60">
              <div className="flex items-center space-x-1">
                <AiOutlineStar className="w-4 h-4" />
                <span>{project.stargazers_count}</span>
              </div>
              <div className="flex items-center space-x-1">
                <AiOutlineFork className="w-4 h-4" />
                <span>{project.forks_count}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>{project.language}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3">
              <button
                onClick={onVisitDemo}
                className="btn btn-primary btn-block flex items-center justify-center space-x-2"
              >
                <MdOpenInNew className="w-5 h-5" />
                <span>Visitar Projeto</span>
              </button>
              
              <button
                onClick={onVisitGithub}
                className="btn btn-outline btn-block flex items-center justify-center space-x-2"
              >
                <MdCode className="w-5 h-5" />
                <span>Ver Código no GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectModal;