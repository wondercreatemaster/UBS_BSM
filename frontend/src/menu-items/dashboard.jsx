// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { HomeTrendUp } from 'iconsax-react';


const icons = {
  dashboard: HomeTrendUp
}
// type
const dashboard = {
  id: 'dashboard',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  url: '/dashboard',
  icon: icons.dashboard
}

export default dashboard;