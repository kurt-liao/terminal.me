import Themes from '~/assets/themes.json'
import { Theme } from '~/types/theme'

export const findTheme = (themeName: string): Theme | null => {
  const themes = Themes.filter(
    (theme) => theme.name.toLowerCase() === themeName.toLowerCase(),
  )

  return themes.length === 1 ? themes[0] : null
}
