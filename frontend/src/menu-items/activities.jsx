// third-party
import { FormattedMessage } from 'react-intl';

// type

// ==============================|| MENU ITEMS - PAGES ||============================== //

const activities = {
	id: 'activities',
	title: <FormattedMessage id="Activities" />,
	type: 'group',
	children: [
		{
			id: 'facility-booking',
			title: <FormattedMessage id="Facility Booking" />,
			type: 'item',
			url: '/activities/facility-booking',
		},
        {
			id: 'facility-service-record',
			title: <FormattedMessage id="Facility Service Record" />,
			type: 'item',
			url: '/activities/facility-service-record',
		},
        {
			id: 'service-request',
			title: <FormattedMessage id="Service Request" />,
			type: 'item',
			url: '/activities/service-request',
		}
	]
};

export default activities;
