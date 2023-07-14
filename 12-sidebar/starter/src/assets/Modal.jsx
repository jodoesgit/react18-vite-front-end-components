import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
	const { isModal, closeModal } = useGlobalContext();
	return (
		<div className="modal-overlay">
			<div className="modal-container">
				<h3>Content</h3>
				<button className="close-modal-btn" onClick={closeModal}>
					<FaTimes />
				</button>
			</div>
		</div>
	);
};
export default Modal;
