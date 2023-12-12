type ModeProps = {
    modeType: 'create' | 'delete' | 'update'
    currentMode: 'create' | 'delete' | 'update'
    changeMode: any
}

export const EditorMode = ({
    modeType,
    currentMode,
    changeMode,
}: ModeProps) => {
    return (
        <button
            onClick={() => changeMode(modeType)}
            className={`mx-3 border border-black ${
                currentMode === modeType ? 'bg-orange-400 text-white' : ''
            }`}
        >
            {modeType}
        </button>
    )
}
