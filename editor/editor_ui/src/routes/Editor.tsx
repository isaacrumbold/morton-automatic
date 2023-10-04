import { useEffect, useState } from 'react'
import projects from '../../../projects.json'
import { EditorMode } from './components/EditorMode'
import { ProjectEditor } from './components/ProjectEditor'

export type mode = 'create' | 'delete' | 'update'
type section = 'project' | 'example'

export const Editor = () => {
    const [mode, setMode] = useState<mode>('create')
    const [sectionType, setSectionType] = useState<section>('project')
    const [selected, setSelected] = useState<number>(0)
    const [editorArea, setEditorArea] = useState<any>(null)

    const modeChanger = (mode: mode) => {
        setMode(mode)
        setSelected(0)
    }

    const sectionChanger = (section: section) => {
        setSectionType(section)
        setSelected(0)
    }

    useEffect(() => {
        const section = getSection(sectionType, selected)
        if (section) {
            setEditorArea(section)
        } else {
            setEditorArea(null)
        }
    }, [mode, sectionType, selected])
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
                                    <button
                                        onClick={() => {
                                            setSelected(project.projId)
                                        }}
                                        className={`ml-2 w-fit border border-black px-1 ${
                                            sectionType === 'project' &&
                                            mode !== 'create' &&
                                            selected !== project.projId
                                                ? 'bg-orange-100 '
                                                : ' '
                                        } ${
                                            selected === project.projId
                                                ? 'bg-orange-400 text-white'
                                                : ''
                                        }`}
                                    >{`${project.projId} - ${project.projTitle}`}</button>
                                    {project.examples.map((example) => {
                                        return (
                                            <button
                                                onClick={() => {
                                                    setSelected(example.exmpId)
                                                }}
                                                className={`ml-6 mt-2 w-fit border border-black px-1 ${
                                                    sectionType === 'example' &&
                                                    mode !== 'create' &&
                                                    selected !== example.exmpId
                                                        ? 'bg-orange-100 '
                                                        : ' '
                                                } ${
                                                    selected === example.exmpId
                                                        ? 'bg-orange-400 text-white'
                                                        : ''
                                                }`}
                                                key={`${example.exmpId} - ${example.exmpTitle}`}
                                            >{`${example.exmpId} - ${example.exmpTitle}`}</button>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* editing area */}
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
                            <div>
                                <button
                                    className={`mx-3 border border-black ${
                                        sectionType === 'project'
                                            ? 'bg-orange-400 text-white'
                                            : ''
                                    }`}
                                    onClick={() => sectionChanger('project')}
                                >
                                    project
                                </button>
                                <button
                                    className={`mx-3 border border-black ${
                                        sectionType === 'example'
                                            ? 'bg-orange-400 text-white'
                                            : ''
                                    }`}
                                    onClick={() => sectionChanger('example')}
                                >
                                    example
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full w-full">
                        {sectionType === 'project' && (
                            <ProjectEditor
                                mode={mode}
                                currentProjs={projects}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const getSection = (sectionType: section, id: number) => {
    if (sectionType === 'project') {
        return projects.find((project) => project.projId === id)
    }

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i]
        const example = project.examples.find(
            (example) => example.exmpId === id
        )
        if (example) {
            return example
        }
    }

    return null
}
