import type { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
	title: "Pricing",
	description: "Learn more about our pricing options.",
	keywords: ["pricing", "cost", "services"],
};

const PricingPage = () => {
	return (
		<div>
			<h1>Pricing</h1>
			<p>We offer competitive pricing for our services.</p>
		</div>
	)
}

export default PricingPage
