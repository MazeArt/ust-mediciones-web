import { LoadingButton } from "./buttons"
import { Icon } from "./icons"

export function FormButtons({ loading, onClick, disabledButton = false, onDelete, deleting = false, stateMessage }) {
    return (
        <div className="add-item-form-buttons mt-4">
            <div className={`flex flex-row items-center w-3/4 ${onDelete ? 'justify-between' : 'justify-center'}`}>
                { loading ? <LoadingButton small={true} /> :
                    <button onClick={onClick}
                        disabled={disabledButton}
                        className={`add-item-form-btn-base ${disabledButton ? 'disabled-btn' : ''}`}>
                        <Icon icon={"Save"} className="mr-2" title="Guardar" />
                    </button>
                }
                { onDelete && (
                    
                    deleting ?
                        <LoadingButton small={true} /> :
                        <button onClick={onDelete}
                            className={`add-item-form-btn-base btn-base-delete`}>
                            <Icon icon={"Delete"} className="mr-2" title="Borrar" />
                        </button>
                )
                }
            </div>
            {stateMessage && <span className="add-item-form-validation-msg">{stateMessage}</span>}
        </div>
    )
}

export function FormReset({ resetForm }) {
    return (
        <div className="add-item-form-reset">
            <button onClick={resetForm} className="add-item-form-reset-btn">
                <Icon icon={"Delete"} className="mr-1" size="sm" title="Limpiar" />
            </button>
        </div>
    )
}