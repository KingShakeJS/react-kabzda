import {reducer, stateType, TOGGLE_COLLAPSED} from "./reducer";


test(
    'collapsed должно измениться на true',
    () => {
        const state: stateType = {
            collapsed: false
        }
        const newState: stateType = reducer(state, {type: TOGGLE_COLLAPSED})
        expect(newState.collapsed).toBe(true)
    }
)

test(
    'collapsed должно измениться на false',
    () => {
        const state: stateType = {
            collapsed: true
        }
        const newState: stateType = reducer(state, {type: TOGGLE_COLLAPSED})
        expect(newState.collapsed).toBe(false)
    }
)

test(
    'должна быть ошибка',
    () => {
        const state: stateType = {
            collapsed: true
        }

        expect(()=>reducer(state, {type: 'sds'})).toThrow('xxx')
    }
)