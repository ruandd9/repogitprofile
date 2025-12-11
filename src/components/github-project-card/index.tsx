import { Fragment, useState } from 'react';
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { MdInsertLink, MdRocketLaunch } from 'react-icons/md';
import { ga, getLanguageColor, skeleton } from '../../utils';
import { GithubProject } from '../../interfaces/github-project';
import ProjectModal from '../project-modal';

const GithubProjectCard = ({
  header,
  githubProjects,
  loading,
  limit,
  username,
  googleAnalyticsId,
  demos,
}: {
  header: string;
  githubProjects: GithubProject[];
  loading: boolean;
  limit: number;
  username: string;
  googleAnalyticsId?: string;
  demos?: { [key: string]: string };
}) => {
  const [modalProject, setModalProject] = useState<GithubProject | null>(null);
  const [modalDemoUrl, setModalDemoUrl] = useState<string>('');

  if (!loading && githubProjects.length === 0) {
    return;
  }

  const handleProjectClick = (project: GithubProject, demoUrl?: string) => {
    if (demoUrl) {
      setModalProject(project);
      setModalDemoUrl(demoUrl);
    } else {
      // Se não tem demo, vai direto para o GitHub
      try {
        if (googleAnalyticsId) {
          ga.event('Click project', {
            project: project.name,
          });
        }
      } catch (error) {
        console.error(error);
      }
      window?.open(project.html_url, '_blank');
    }
  };

  const handleVisitDemo = () => {
    if (modalProject && modalDemoUrl) {
      try {
        if (googleAnalyticsId) {
          ga.event('Click demo', {
            project: modalProject.name,
          });
        }
      } catch (error) {
        console.error(error);
      }
      window?.open(modalDemoUrl, '_blank');
      setModalProject(null);
      setModalDemoUrl('');
    }
  };

  const handleVisitGithub = () => {
    if (modalProject) {
      try {
        if (googleAnalyticsId) {
          ga.event('Click project', {
            project: modalProject.name,
          });
        }
      } catch (error) {
        console.error(error);
      }
      window?.open(modalProject.html_url, '_blank');
      setModalProject(null);
      setModalDemoUrl('');
    }
  };

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderProjects = () => {
    return githubProjects.map((item, index) => {
      const demoUrl = demos?.[item.name];
      
      return (
        <div 
          className="card shadow-lg compact bg-base-100 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative group"
          key={index}
          onClick={() => handleProjectClick(item, demoUrl)}
          style={{
            background: 'linear-gradient(145deg, hsl(var(--b1)), hsl(var(--b2)))',
          }}
        >
          {/* Demo Button - Canto Superior Direito */}
          {demoUrl && (
            <div className="absolute top-3 right-3 z-10">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                
                {/* Main Button */}
                <button
                  className="relative w-9 h-9 bg-gradient-to-br from-primary via-primary to-secondary rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group/btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(item, demoUrl);
                  }}
                  style={{
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)',
                  }}
                >
                  {/* Inner Glow */}
                  <div className="absolute inset-0.5 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                  
                  {/* Icon */}
                  <MdRocketLaunch className="w-4 h-4 text-primary-content transform group-hover/btn:rotate-12 transition-transform duration-200 relative z-10" />
                  
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover/btn:scale-100 group-hover/btn:opacity-0 transition-all duration-300"></div>
                </button>

                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-base-content text-base-100 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  Ver Demo
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-base-content rotate-45"></div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center truncate mb-2">
                <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
                  <MdInsertLink className="my-auto" />
                  <span>{item.name}</span>
                </div>
              </div>
              <p className="mb-5 mt-1 text-base-content text-opacity-70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="flex justify-between text-sm text-base-content text-opacity-60 truncate">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center hover:text-warning transition-colors duration-200">
                  <AiOutlineStar className="mr-0.5" />
                  <span>{item.stargazers_count}</span>
                </span>
                <span className="flex items-center hover:text-info transition-colors duration-200">
                  <AiOutlineFork className="mr-0.5" />
                  <span>{item.forks_count}</span>
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-1 opacity-60 shadow-sm"
                    style={{ backgroundColor: getLanguageColor(item.language) }}
                  />
                  <span>{item.language}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                  {loading ? (
                    skeleton({ widthCls: 'w-10', heightCls: 'h-5' })
                  ) : (
                    <a
                      href={`https://github.com/${username}?tab=repositories`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base-content opacity-50 hover:underline"
                    >
                      See All
                    </a>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalProject && (
        <ProjectModal
          isOpen={!!modalProject}
          onClose={() => {
            setModalProject(null);
            setModalDemoUrl('');
          }}
          project={modalProject}
          onVisitDemo={handleVisitDemo}
          onVisitGithub={handleVisitGithub}
        />
      )}
    </Fragment>
  );
};

export default GithubProjectCard;
