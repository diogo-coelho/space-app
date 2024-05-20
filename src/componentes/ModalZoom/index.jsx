import Imagem from '../Galeria/Imagem'
import styled from 'styled-components'

const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ModalZoom = ({ foto }) => {
	return (
		<>
			{foto && 
				<>
				<Overlay />
				<DialogEstilizado open={!!foto}>
					<Imagem foto={foto} expandida={true} />
					<form method="dialog">
						<button>OK</button>
					</form>
				</DialogEstilizado>
				</>
			}
		</>
	)
}

export default ModalZoom