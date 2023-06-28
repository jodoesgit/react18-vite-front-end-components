import Tour from "./Tour";

const Tours = ({ tours }) => {
	return (
		<section>
			<div className="title">
				<h2>our tours</h2>
				<div className="title-underline"></div>
			</div>
			<div className="tours">
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour} />;
				})}
			</div>
		</section>
	);
};
export default Tours;
