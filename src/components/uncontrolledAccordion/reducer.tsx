type ActionType = {
    type: string
}

export type stateType={
    collapsed: boolean
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
 export const reducer = (state: stateType, action: ActionType):stateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error('xxx')
    }
}