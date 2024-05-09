import { FaHandHoldingUsd } from "react-icons/fa";
import { GiBrainstorm } from "react-icons/gi"
import { RiTimeFill } from "react-icons/ri";
import { MdOutlineMoreTime } from "react-icons/md";




export const Articles = ({ messageAr = 'Sin nombre' }) => {
	// console.log(message);
	return (
		<>
			<div className="Articles">
				<div className="Article">
					<FaHandHoldingUsd />
					<h2>Soy un título</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit voluptas consequatur laborum. Fuga sit ea consequuntur tenetur inventore, consectetur.</p>
					<a href="#">Read More</a>
				</div>
				<div className="Article">
					<GiBrainstorm />
					<h2>Soy un título</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit voluptas consequatur laborum. Fuga sit ea consequuntur tenetur inventore, consectetur.</p>
					<a href="#">Read More</a>
				</div>
				<div className="Article">
					<RiTimeFill />
					<h2>Soy un título</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit voluptas consequatur laborum. Fuga sit ea consequuntur tenetur inventore, consectetur.</p>
					<a href="#">Read More</a>
				</div>
				<div className="Article">
					<MdOutlineMoreTime />
					<h2>Soy un título</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit voluptas consequatur laborum. Fuga sit ea consequuntur tenetur inventore, consectetur.</p>
					<a href="#">Read More</a>
				</div>

			</div>

		</>
	)
};
