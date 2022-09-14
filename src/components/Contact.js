import React, { Fragment } from 'react'
import NavModule from '../modules/NavModule'
import contact from '../data/contact'
import { Container } from 'react-bootstrap'

function Contact() {
	const contacts =  contact.map(eachContact => {
		return <a href={ eachContact.socialLink } className='btn-transparent' target='_blank'><i className={`fa-brands ${ eachContact.socialLogo } fa-3x`}></i></a>
	})

	return (
		<Fragment>
			<NavModule />
			<Container>
				<div className='cover covertext'>
					<p className='display-3 fw-bold'>
						Contact
					</p>
					<br/>
					{ contacts }
				</div>
			</Container>
		</Fragment>
	)
}

export default Contact