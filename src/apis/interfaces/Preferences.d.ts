import { ThemeColor, ThemeMode } from '../../store/modules/ui'

export interface Preferences {
    theme: {
        mode: ThemeMode,
        color: ThemeColor
    }
}
