import 'styled-components'
import {Theme} from './variables/types'

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}