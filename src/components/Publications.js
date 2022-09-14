import React, { Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import publications from '../data/publications'
import NavModule from '../modules/NavModule'

function Publications() {
	const publicationsToDisplay = publications.map(publication => {
		return (
			<div className='mt-4 mb-4 p-5 tray'>
				<p className='display-5'>{publication.title}</p>
				<p className='lead'>{publication.authorName}. {publication.title}. {publication.journalName} {publication.year}; {publication.volumeNumber}({publication.issueNumber}): {publication.pageNumber}</p>
				<a href={publication.doiNumber} className='btn' target='_blank' noopener noreferrer>Read<i className='fas fa-chevron-right'></i></a>
			</div>
		)
	})

	return (
		<Fragment>
			<NavModule />
			<Container>
				<div className='mt-4 mb-2'>
					<Row>
						<Col xs={12} sm={12} md={6} lg={6} xl={6} className='mb-4'>
							<Card>
								<p className='display-6 ps-5 mt-4'>ResearchGate Score</p>
								<Row>
									<Col>
										<i className='fa-brands fa-researchgate fa-4x ps-5 mt-4'></i>
									</Col>
									<Col>
										<p className='display-3 ps-5 mt-4'>8.7</p>
									</Col>
								</Row>
							</Card>
						</Col>
						<Col xs={12} sm={12} md={6} lg={6} xl={6} className='mb-4'>
							<Card>
								<p className='display-6 ps-5 mt-4'>Publications</p>
								<Row>
									<Col>
										<i className='fa-solid fa-book-open fa-4x ps-5 mt-4'></i>
									</Col>
									<Col>
										<p className='display-3 ps-5 mt-4'>2</p>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
				</div>
				{publicationsToDisplay}
			</Container>
		</Fragment>
	)
}

export default Publications