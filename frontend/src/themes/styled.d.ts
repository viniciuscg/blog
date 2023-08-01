import 'styled-components'

declare module 'styled-components'{
  export interface DefaultTheme {
    title: string

    colors: {
      background: string
      secundary: string
      modalBackground: string
      buttonColors: string
      fontColor: string
      fontColorLowOpacity: string
    }
    
    backgrounds: {
      dark_blue: string,
      purple: string,
      blue: string,
      mint: string,
      white: string,
      beige: string,
      brown: string,
    },

    flexDisplay: string
  }
}