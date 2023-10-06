import { useEffect, useState } from 'react'
import { mode } from '../Editor'
import axios from 'axios'

type ProjectEditorProps = {
    mode: mode
    currentProjs: ProjectArraySchema
    sectionType: 'project' | 'example'
    showId: boolean
}

export type ProjectArraySchema = {
    projId: number
    projTitle: string
    projDescription: string
    examples: ExampleSchema[] | any[]
}[]

export type ExampleSchema = {
    exmpId: number
    exmpTitle: string
    exmpDescription: string
}

type currentSelected = {
    id: number
    title: string
    desc?: string
}
export const ProjectEditor = ({
    mode,
    currentProjs,
    sectionType,
    showId,
}: ProjectEditorProps) => {
    const [projId, setProjId] = useState<number | undefined>(undefined)
    const [projTitle, setProjTitle] = useState<string>('')
    const [projDesc, setProjDesc] = useState<string | undefined>('')
    const [projPicture, setProjPicture] = useState<any>()
    const [selectedProj, setSelectedProj] = useState<
        currentSelected | undefined
    >()

    const form = document.getElementById('projForm') as HTMLFormElement

    const submitForm = async (e: any) => {
        e.preventDefault()

        if (mode === 'update') {
            update(
                currentProjs,
                sectionType,
                projId!,
                projTitle!,
                projDesc
            ).then((res) => res !== undefined && alert(`Status: ${res}`))
        }
        if (mode === 'delete') {
            deleteMethod(currentProjs, projId!, sectionType).then(
                (res) => res !== undefined && alert(`Status: ${res}`)
            )
        }
        if (mode === 'create') {
            const cRes = await create(
                currentProjs,
                sectionType,
                projTitle!,
                projPicture,
                projDesc,
                projId
            )

            alert(`Status: ${cRes}`)
        }

        setSelectedProj(undefined)
        setProjId(undefined)
        setProjTitle('')
        setProjDesc('')
        form.reset()
    }
    const onSelectId = (e: any) => {
        if (e.target.value === '') {
            setSelectedProj(undefined)
            setProjId(undefined)
            setProjTitle('')
            setProjDesc('')
        }
        if (sectionType === 'project') {
            setProjId(Number(e.target.value))
            const i = currentProjs.findIndex(
                (proj: any) => proj.projId === Number(e.target.value)
            )
            if (i !== -1) {
                setSelectedProj({
                    id: currentProjs[i].projId,
                    title: currentProjs[i].projTitle,
                    desc: currentProjs[i].projDescription,
                })
                setProjId(currentProjs[i].projId)
                setProjTitle(currentProjs[i].projTitle)
                setProjDesc(currentProjs[i].projDescription)
            }
        } else {
            setProjId(Number(e.target.value))
            for (let i = 0; i < currentProjs.length; i++) {
                const example: ExampleSchema | undefined = currentProjs[
                    i
                ].examples.find(
                    (ex: ExampleSchema) => ex.exmpId === Number(e.target.value)
                )

                if (example) {
                    setSelectedProj({
                        id: example.exmpId,
                        title: example.exmpTitle,
                        desc: example.exmpDescription,
                    })
                    setProjId(example.exmpId)
                    setProjTitle(example.exmpTitle)
                    setProjDesc(example.exmpDescription)
                }
            }
        }
    }
    useEffect(() => {
        setSelectedProj(undefined)
        form && form.reset()
        setProjId(undefined)
        setProjTitle('')
        setProjDesc('')
        setProjPicture(undefined)
    }, [mode, sectionType])

    return (
        <form className="m-4 space-y-5" id="projForm" onSubmit={submitForm}>
            {showId && (
                <div className="flex flex-col">
                    <label htmlFor="id">Id:</label>
                    <select id="id" onChange={(e) => onSelectId(e)} required>
                        <option value={''}>none</option>

                        {sectionType === 'example' && mode !== 'create'
                            ? currentProjs.map((proj: any) => {
                                  return proj.examples.map((example: any) => {
                                      return (
                                          <option
                                              key={example.exmpId}
                                              value={example.exmpId}
                                          >
                                              {example.exmpId}
                                          </option>
                                      )
                                  })
                              })
                            : currentProjs.map((proj: any) => {
                                  return (
                                      <option
                                          key={proj.projId}
                                          value={proj.projId}
                                      >
                                          {proj.projId}
                                      </option>
                                  )
                              })}
                    </select>
                </div>
            )}
            {mode !== 'delete' && (
                <>
                    <div className="flex flex-col">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Required title"
                            onChange={(e) => {
                                setProjTitle(e.target.value)
                            }}
                            required
                            defaultValue={
                                mode === 'update' && selectedProj
                                    ? projTitle
                                    : ''
                            }
                        />
                    </div>
                    {sectionType === 'project' ? (
                        <div className="flex flex-col">
                            <label htmlFor="desc">description:</label>
                            <textarea
                                id="desc"
                                cols={60}
                                rows={5}
                                placeholder="Required description"
                                onChange={(e) => {
                                    setProjDesc(e.target.value)
                                }}
                                defaultValue={
                                    mode === 'update' &&
                                    selectedProj !== undefined
                                        ? projDesc
                                        : ''
                                }
                                required
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <label htmlFor="desc">description:</label>
                            <textarea
                                id="desc"
                                cols={60}
                                rows={5}
                                placeholder="Optional description"
                                onChange={(e) => {
                                    setProjDesc(e.target.value)
                                }}
                                defaultValue={
                                    mode === 'update' &&
                                    selectedProj !== undefined
                                        ? projDesc
                                        : ''
                                }
                            />
                        </div>
                    )}
                    {
                        <div className="flex flex-col">
                            <label htmlFor="picture">
                                Upload picture (.jpg or .png only):
                            </label>
                            <input
                                type="file"
                                id="picture"
                                accept=".jpg, .png"
                                required
                                onChange={(e) => {
                                    setProjPicture(e.target.files)
                                }}
                            />
                        </div>
                    }
                </>
            )}
            <button
                className="w-full border-2 border-black bg-orange-300"
                type="submit"
            >
                Submit
            </button>
        </form>
    )
}

const update = async (
    projects: ProjectArraySchema,
    sectionType: 'project' | 'example',
    id: number,
    title: string,
    desc?: string
) => {
    switch (sectionType) {
        case 'project':
            const projectIndex = projects.findIndex(
                (project) => project.projId === id
            )
            if (projectIndex === -1) {
                alert('ID not found')
                return
            } else {
                projects.splice(projectIndex, 1, {
                    projId: id,
                    projTitle: title,
                    projDescription: desc ? desc : '',
                    examples: projects[projectIndex].examples,
                })
            }
            break
        case 'example':
            for (let i = 0; i < projects.length; i++) {
                const exampleIndex = projects[i].examples.findIndex(
                    (example) => example.exmpId === id
                )
                if (exampleIndex !== -1) {
                    projects[i].examples.splice(exampleIndex, 1, {
                        exmpId: id,
                        exmpTitle: title,
                        exmpDescription: desc ? desc : '',
                    })
                } else {
                    alert('ID not found')
                }
                break
            }
    }

    const response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(projects),
    })

    const status = await response.status

    return status
}

const deleteMethod = async (
    projects: ProjectArraySchema,
    id: number,
    sectionType: 'project' | 'example'
) => {
    if (id === undefined) {
        alert('Id is required, select an Id.')
        return
    }
    switch (sectionType) {
        case 'project':
            const projectIndex = projects.findIndex(
                (project) => project.projId === id
            )
            if (projectIndex === -1) {
                alert('Project not found')
                return
            } else {
                projects.splice(projectIndex, 1)
            }
            break
        case 'example':
            for (let i = 0; i < projects.length; i++) {
                const exampleIndex = projects[i].examples.findIndex(
                    (example) => example.exmpId === id
                )
                if (exampleIndex !== -1) {
                    projects[i].examples.splice(exampleIndex, 1)
                } else {
                    alert('Example not found')
                }
                break
            }
    }
    const response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(projects),
    })

    const status = await response.status
    return status
}

const create = async (
    projects: ProjectArraySchema,
    sectionType: 'project' | 'example',
    title: string,
    image: any,
    desc?: string,
    id?: number
) => {
    switch (sectionType) {
        case 'project':
            const aId =
                projects.length === 0
                    ? 1
                    : projects[projects.length - 1].projId + 1

            projects.push({
                projId: aId,
                projTitle: title,
                projDescription: desc ? desc : '',
                examples: [],
            })
            imagefetch(image, sectionType, aId)
            break
        case 'example':
            if (id === undefined) {
                alert('Id is required, select an Id.')
                return
            } else {
                const projIndex = projects.findIndex(
                    (proj) => proj.projId === id
                )
                projects[projIndex].examples.push({
                    exmpId: makeExmpId(projIndex, projects),
                    exmpTitle: title,
                    exmpDescription: desc ? desc : '',
                })
            }
    }
    const response = await fetch('http://localhost:3000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(projects),
    })

    const status = await response.status
    return status
}

const imagefetch = async (
    image: any,
    sectionType: 'project' | 'example',
    id: number
) => {
    const formData = new FormData()
    formData.append('id', id.toString())
    formData.append('image', image[0])

    switch (sectionType) {
        case 'project':
            const result = await axios.post(
                'http://localhost:3000/projectimage',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
            return result.status
    }
}

const makeExmpId = (projIndex: number, projects: ProjectArraySchema) => {
    const length = projects[projIndex].examples.length
    if (length !== 0) {
        return projects[projIndex].examples[length - 1].exmpId + 1
    } else {
        return Number(`${projects[projIndex].projId}1`)
    }
}
