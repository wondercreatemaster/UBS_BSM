import { FormattedMessage } from 'react-intl';

const housekeeping = {
  id: "housekeeping",
  title: <FormattedMessage id="housekeeping" />,
  type: 'group',
  children: [
    {
      id: "backup and restore",
      title: <FormattedMessage id="backup and restore" />,
      type: 'collapse',
      children: [
        {
          id: 'backup',
          title: <FormattedMessage id="backup" />,
          type: "item",
          url: "/housekeeping/backup",
        },
        {
          id: 'restore',
          title: <FormattedMessage id="restore" />,
          type: "item",
          url: "/housekeeping/restore",
        },
      ]
    }
  ]
}

export default housekeeping;