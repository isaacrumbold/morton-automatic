import { useEffect, useState } from 'react'
import projects from '../../../projects.json'
import { EditorMode } from './components/EditorMode'
import { ProjectEditor } from './components/ProjectEditor'
import { ProjectArraySchema } from './components/ProjectEditor'

export type mode = 'create' | 'delete' | 'update'
type section = 'project' | 'example'

export const Editor = () => {
    const [mode, setMode] = useState<mode>('create')
    const [sectionType, setSectionType] = useState<section>('project')
    const [showId, setShowId] = useState<boolean>(false)

    const modeChanger = (mode: mode) => {
        setMode(mode)
    }

    const sectionChanger = (section: section) => {
        setSectionType(section)
    }

    useEffect(() => {
        if (mode === 'create' && sectionType === 'project') {
            setShowId(false)
        } else {
            setShowId(true)
        }
    }, [mode, sectionType])

    return (
        <div className=" h-full bg-slate-200">
            <h1 className=" border-y-2 border-black py-3 text-center text-2xl">
                Editor
            </h1>
            <div className="flex h-full">
                <div className="h-full w-1/4 border-r-2 border-black">
                    <h1 className="mx-auto w-fit border-b border-black">
                        Projects
                    </h1>
                    <div className="h-full w-full ">
                        {projects.map((project) => {
                            return (
                                <div
                                    className=" mx-2 mt-4 flex flex-col border border-black py-1"
                                    key={`${project.projId} - ${project.projTitle}`}
                                >
                                    <div
                                        className={`ml-2 w-fit border border-black px-1 ${
                                            sectionType === 'project' &&
                                            mode !== 'create' &&
                                            'bg-orange-100 '
                                        } 
                                        }`}
                                    >{`${project.projId} - ${project.projTitle}`}</div>
                                    {project.examples.map((example) => {
                                        return (
                                            <div
                                                className={`ml-6 mt-2 w-fit border border-black px-1 ${
                                                    sectionType === 'example' &&
                                                    mode !== 'create' &&
                                                    'bg-orange-100 '
                                                } `}
                                                key={`${example.exmpId} - ${example.exmpTitle}`}
                                            >{`${example.exmpId} - ${example.exmpTitle}`}</div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex h-full w-full flex-col">
                    <div className="flex h-fit w-fit">
                        <div className="flex border-b border-r border-black py-1">
                            <h1>Mode:</h1>
                            <EditorMode
                                modeType="create"
                                currentMode={mode}
                                changeMode={modeChanger}
                            />
                            <EditorMode
                                modeType="delete"
                                currentMode={mode}
                                changeMode={modeChanger}
                            />
                            <EditorMode
                                modeType="update"
                                currentMode={mode}
                                changeMode={modeChanger}
                            />
                        </div>
                        <div className="mx-4 flex border-x border-b border-black py-1">
                            <h1>Section:</h1>
                            <div className="flex">
                                <div
                                    className={`mx-3 border border-black ${
                                        sectionType === 'project'
                                            ? 'bg-orange-400 text-white'
                                            : ''
                                    }`}
                                    onClick={() => sectionChanger('project')}
                                >
                                    project
                                </div>
                                <div
                                    className={`mx-3 border border-black ${
                                        sectionType === 'example'
                                            ? 'bg-orange-400 text-white'
                                            : ''
                                    }`}
                                    onClick={() => sectionChanger('example')}
                                >
                                    example
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full w-full">
                        <ProjectEditor
                            mode={mode}
                            currentProjs={projects as ProjectArraySchema}
                            sectionType={sectionType}
                            showId={showId}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
