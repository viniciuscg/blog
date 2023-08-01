import './style.ts'
import { Container, Content, Header, Wrapper } from './style.ts'
import { AiOutlineClose } from 'react-icons/ai'

interface IProps {
    visible: boolean,
    closeModal(): void,
    children: JSX.Element | JSX.Element[];
}

function Modal(props: IProps) {

    return(
      <>
      {props.visible &&
      <Wrapper>
        <Container>
          <Header>
            <AiOutlineClose style={{cursor: "pointer", fontSize: "20px"}} onClick={props.closeModal} />
          </Header>
          <Content>
            {props.children}
          </Content>
        </Container>
      </Wrapper>
      }
      </>
    )
}

export default Modal