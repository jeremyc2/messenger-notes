import { createPortal } from 'react-dom'

interface Props {
    show: boolean
}

export default function Modal({ show }: Props) {
    // Add Transition Group - import CSSTransition
    return createPortal(<div>
        
    </div>, document.body)
}