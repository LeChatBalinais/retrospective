// pageReducer.js
import { NOT_FOUND } from 'redux-first-router'
import { Action } from './actions-reducers'

const components = {
    ROUTE_HOME: 'Home',
    ROUTE_REFERENCE_EDITOR: 'ReferenceEditor',
    [NOT_FOUND]: 'NotFound'
}

export default (state: string = 'Home', action: Action): string => components[action.type] || state