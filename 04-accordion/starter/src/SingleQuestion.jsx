import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const SingleQuestion = ({ title, info }) => {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<article className="question">
			<header>
				<h5>{title}</h5>
				<button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{showInfo && <p>{info}</p>}
		</article>
	);
};
export default SingleQuestion;
