import './style'
import { Container } from './style'

interface IProps {
  color: string,
  handleColorSelected(): void,
  selected: boolean
}

function ColorsProfile(props: IProps) {

  return (
    <Container selected={props.selected} onClick={props.handleColorSelected} color={props.color} >
    </Container>
  )
}

export default ColorsProfile