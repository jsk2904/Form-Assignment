const content = {
	options: ['Excellent', 'good', 'fair', 'bad'],
	inputs: [
		,
		{
			label:
				'Please rate the quality of the service you received from your host.',
			name: 'service',
			type: 'radio',
		},
		{
			label: 'Please rate the quality of your beverage.',
			name: 'beverage',
			type: 'radio',
		},
		{
			label: 'Was our restaurant clean?',
			name: 'cleanliness',
			type: 'radio',
		},
		{
			label: 'Please rate your overall dining experience.',
			name: 'diningExperience',
			type: 'radio',
		},
	],
}

export default content
