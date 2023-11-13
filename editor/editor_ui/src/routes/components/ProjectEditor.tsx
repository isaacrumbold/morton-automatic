import React, { SyntheticEvent, useEffect, useState } from 'react'
import { mode } from '../Editor'

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
    projPicture: string
    examples: ExampleSchema[] | any[]
}[]

export type ExampleSchema = {
    exmpId: number
    exmpTitle: string
    exmpDescription: string
    exmpPictureArray: string[]
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
    const [formId, setFormId] = useState<number | undefined>(undefined)
    const [formTitle, setFormTitle] = useState<string>('')
    const [formDesc, setFormDesc] = useState<string | undefined>('')
    const [imageFile, setImageFile] = useState<File | File[]>()
    const [selectedProj, setSelectedProj] = useState<
        currentSelected | undefined
    >()
    const form = document.getElementById('projForm') as HTMLFormElement
    const imageAmountError = () => {
        form.reset()
        alert('Max 6 images, please select only 6 at most.')
        setImageFile(undefined)
    }

    const exampleArrayFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const arr: File[] = []
            for (let i = 0; i < e.target.files.length; i++) {
                arr.push(e.target.files[i])
            }
            setImageFile(arr)
        }
    }

    const submitForm = async (event: SyntheticEvent) => {
        event.preventDefault()
        if (mode === 'update') {
            updateMethod(
                currentProjs,
                sectionType,
                formId as number,
                formTitle,
                formDesc
            ).then((res) => res !== undefined && alert(`Status: ${res}`))
        }
        if (mode === 'delete') {
            deleteMethod(currentProjs, formId!, sectionType).then(
                (res) => res !== undefined && alert(`Status: ${res}`)
            )
        }
        if (mode === 'create') {
            const cRes = await createMethod(
                currentProjs,
                sectionType,
                formTitle,
                imageFile,
                formDesc,
                formId
            )

            alert(`Status: ${cRes}`)
        }

        setSelectedProj(undefined)
        setFormId(undefined)
        setFormTitle('')
        setFormDesc('')
        form.reset()
        location.reload()
    }
    const onSelectId = (e: any) => {
        if (e.target.value === '') {
            setSelectedProj(undefined)
            setFormId(undefined)
            setFormTitle('')
            setFormDesc('')
        }
        if (sectionType === 'project') {
            setFormId(Number(e.target.value))
            const i = currentProjs.findIndex(
                (proj: any) => proj.projId === Number(e.target.value)
            )
            if (i !== -1) {
                setSelectedProj({
                    id: currentProjs[i].projId,
                    title: currentProjs[i].projTitle,
                    desc: currentProjs[i].projDescription,
                })
                setFormId(currentProjs[i].projId)
                setFormTitle(currentProjs[i].projTitle)
                setFormDesc(currentProjs[i].projDescription)
            }
        } else {
            setFormId(Number(e.target.value))
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
                    setFormId(example.exmpId)
                    setFormTitle(example.exmpTitle)
                    setFormDesc(example.exmpDescription)
                }
            }
        }
    }
    useEffect(() => {
        setSelectedProj(undefined)
        form && form.reset()
        setFormId(undefined)
        setFormTitle('')
        setFormDesc('')
        setImageFile(undefined)
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
                                setFormTitle(e.target.value)
                            }}
                            required
                            defaultValue={
                                mode === 'update' && selectedProj
                                    ? formTitle
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
                                    setFormDesc(e.target.value)
                                }}
                                defaultValue={
                                    mode === 'update' &&
                                    selectedProj !== undefined
                                        ? formDesc
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
                                    setFormDesc(e.target.value)
                                }}
                                defaultValue={
                                    mode === 'update' &&
                                    selectedProj !== undefined
                                        ? formDesc
                                        : ''
                                }
                            />
                        </div>
                    )}

                    {mode !== 'update' &&
                        (sectionType === 'project' ? (
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
                                        if (e.target.files) {
                                            setImageFile(e.target.files[0])
                                            console.log(imageFile)
                                        } else {
                                            alert(
                                                'something went wrong with your images...'
                                            )
                                        }
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <label htmlFor="picture">
                                    Upload up to 6 pictures (.jpg or .png only):
                                </label>
                                <input
                                    multiple
                                    type="file"
                                    id="picture"
                                    accept=".jpg, .png"
                                    required
                                    onChange={(e) => {
                                        e.target.files &&
                                        e.target.files.length <= 6
                                            ? exampleArrayFunc(e)
                                            : imageAmountError()
                                    }}
                                />
                            </div>
                        ))}
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

const updateMethod = async (
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
                    projPicture: projects[projectIndex].projPicture,
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
                        exmpPictureArray:
                            projects[i].examples[exampleIndex].exmpPictureArray,
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
    const imageIdArray: number[] = []

    switch (sectionType) {
        case 'project':
            const projectIndex = projects.findIndex(
                (project) => project.projId === id
            )
            if (projectIndex === -1) {
                alert('Project not found')
                return
            } else {
                imageIdArray.push(id)
                imageIdArray.push(
                    ...projects[projectIndex].examples.map(
                        (ex: ExampleSchema) => ex.exmpId
                    )
                )
                console.log(imageIdArray)
                projects.splice(projectIndex, 1)
            }
            break
        case 'example':
            for (let i = 0; i < projects.length; i++) {
                const exampleIndex = projects[i].examples.findIndex(
                    (example) => example.exmpId === id
                )
                if (exampleIndex !== -1) {
                    imageIdArray.push(id)
                    console.log(imageIdArray)
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

    const imageDeleteBody = JSON.stringify({ idArray: imageIdArray })

    const imageDelete = await fetch('http://localhost:3000/deletefolder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: imageDeleteBody,
    })

    const imageStatus = imageDelete.status
    const status = response.status
    return { status, imageStatus }
}

const createMethod = async (
    projects: ProjectArraySchema,
    sectionType: 'project' | 'example',
    title: string,
    image: File | File[] | undefined,
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
                projPicture: (image as File).name,
                examples: [],
            })
            await imagefetch(image, sectionType, aId)
            break
        case 'example':
            if (id === undefined) {
                alert('Id is required, select an Id.')
                return
            } else {
                const projIndex = projects.findIndex(
                    (proj) => proj.projId === id
                )
                const exampleId = makeExmpId(projIndex, projects)
                const imageNames: string[] = (image as File[]).map(
                    (img) => img.name
                )
                projects[projIndex].examples.push({
                    exmpId: exampleId,
                    exmpTitle: title,
                    exmpDescription: desc ? desc : '',
                    exmpPictureArray: imageNames,
                })
                imagefetch(image, sectionType, exampleId)
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
    image: File | File[] | undefined,
    sectionType: 'project' | 'example',
    id: number
) => {
    let status: number | undefined
    switch (sectionType) {
        case 'project':
            const formData = new FormData()
            formData.append('id', id.toString())
            formData.append('image', image as Blob)

            try {
                const result = await fetch(
                    'http://localhost:3000/projectimage',
                    {
                        method: 'POST',
                        body: formData,
                    }
                )

                status = result.status
            } catch (e) {
                console.log(e)
            }
            break
        case 'example':
            if (image !== undefined) {
                for (let i = 0; i < image.length; i++) {}
                const formData2 = new FormData()
                formData2.append('id', id.toString())
                for (let i = 0; i < image.length; i++) {
                    formData2.append('images', (image as File[])[i])
                }

                try {
                    const result = await fetch(
                        'http://localhost:3000/exampleimages',
                        {
                            method: 'POST',
                            body: formData2,
                        }
                    )

                    status = result.status
                } catch (e) {
                    console.log(e)
                }
            }
            break
    }
    return status
}

const makeExmpId = (projIndex: number, projects: ProjectArraySchema) => {
    const length = projects[projIndex].examples.length
    if (length !== 0) {
        return projects[projIndex].examples[length - 1].exmpId + 0.01
    } else {
        return projects[projIndex].projId + 0.01
    }
}
