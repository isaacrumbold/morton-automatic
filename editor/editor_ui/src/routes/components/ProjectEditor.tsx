import { mode } from '../Editor'

type ProjectEditorProps = {
    mode: mode
    currentProjs: any
}
export const ProjectEditor = ({ mode, currentProjs }: ProjectEditorProps) => {
    const submitForm = (e: any) => {
        e.preventDefault()
    }

    console.log(currentProjs)
    console.log(mode)

    return (
        <form className="m-4 space-y-5" onSubmit={submitForm}>
            <div className="flex flex-col">
                <label htmlFor="id">Id:</label>
                <select name="id">
                    {currentProjs.map((proj: any) => {
                        return (
                            <option key={proj.projId} value={proj.projId}>
                                {proj.projId}
                            </option>
                        )
                    })}
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Required title"
                    required
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="desc">description:</label>
                <textarea
                    name="desc"
                    cols={60}
                    rows={5}
                    placeholder="Optional description"
                    defaultValue={''}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="picture">
                    Upload picture (.jpg or .png only):
                </label>
                <input
                    type="file"
                    name="picture"
                    accept=".jpg, .png"
                    required
                />
            </div>
            <button
                className="w-full border-2 border-black bg-orange-300"
                type="submit"
            >
                Submit
            </button>
        </form>
    )
}
