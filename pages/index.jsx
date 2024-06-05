// import Nav from "./components/nav"
// import building from "../public/img/building.jpg"
import "../styles/home.module.css" 

export default function Home() {
	return (
		<main className = "background">
			<div className = "container">
				<div className = "grid grid-cols-3">
					<div className = "col-6"></div>
					<div className = "col-6">
						<h1 className = "col-6 nixie_header">Raising Future Acumen Leaders</h1>
						<p>
							Welcome to Acumen College - where Knowledge Meets Purpose. 
							Our mission is to empower you with the skills, wisdom, and 
							resilience needed to excel in an ever-evolving world. 
							Explore our programs, embrace your potential, and embark 
							on a transformative educational journey with us.
						</p>
						<button className = "btn border-2 rounded-md bg-neutral-600 border-neutral-500 py-3 px-10">LEARN MORE</button>
					</div>
					<div className = "col-6"></div>
				</div>
			</div>
		</main>
	)
}
