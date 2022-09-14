import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavModule from '../modules/NavModule'

function Home() {
	return (
		<Fragment>
			<NavModule />
			<Container>
				<div className='cover covertext'>
					<p className='display-3 fw-bold'>
						Abhishek Konar
					</p>
					<p className='lead my-4 fw-bold'>
						M.Sc in Botany (Molecular Genetics & Molecular Plant Physiology) - Gold Medalist 🥇
					</p>
					<p className='lead my-4 fw-bold'>
						Skills & Experience: Plant Molecular Genetics, Molecular Biology, Ethnobotany, Plant Biotechnology, <br/> Plant Physiology, Molecular Plant Physiology, Plant Pathology, Phytoremediation.
					</p>
					<p className='lead my-4 fw-bold'>
						Discipline: Botany, Thnobotany, Biotechnology, Cell Biology, Plant Biotechnology, <br/> Molecular Plant Physiology, Plant Pathology, Phytoremediation
					</p>
					<Link to='/publications' className='btn'>Publications<i className='fas fa-chevron-right'></i></Link>
				</div>
			</Container>
		</Fragment>
	)
}

export default Home