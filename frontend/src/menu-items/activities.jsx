// third-party
import { FormattedMessage } from 'react-intl';

// type

// ==============================|| MENU ITEMS - PAGES ||============================== //

const activities = {
	id: 'activities',
	title: <FormattedMessage id="activities" />,
	type: 'group',
	children: [
		{
			id: 'facility-booking',
			title: <FormattedMessage id="facility-booking" />,
			type: 'item',
			url: '/activities/facility-booking',
		},
		{
			id: 'facility-service-record',
			title: <FormattedMessage id="facility-service-record" />,
			type: 'item',
			url: '/activities/facility-service-record',
		},
		{
			id: 'service-request',
			title: <FormattedMessage id="service-request" />,
			type: 'item',
			url: '/activities/service-request',
		}
	]
};

export default activities;
