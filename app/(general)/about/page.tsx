import type { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
	title: "About Us",
	description: "Learn more about our company and values.",
	keywords: ["about", "company", "values"]
};

const AboutPage = () => {
	return (
		<div>
			<h1>About Us</h1>
			<p>We are a company dedicated to providing the best services to our customers.</p>
		</div>
	)
}

export default AboutPage
