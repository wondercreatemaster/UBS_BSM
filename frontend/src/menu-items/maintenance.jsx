// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { I24Support, MessageProgramming } from 'iconsax-react';

// type

// icons
// icons
const icons = {
  maintenance: MessageProgramming,
  contactus: I24Support
};

// ==============================|| MENU ITEMS - PAGES ||============================== //

const maintenance = {
  id: 'maintenance',
  title: <FormattedMessage id="maintenance" />,
  type: 'group',
  children: [
    {
      id: 'property',
      title: <FormattedMessage id="property_container" />,
      type: 'collapse',
      children: [
        {
          id: 'unit-property',
          title: <FormattedMessage id="property" />,
          type: "item",
          url: "/maintenance/property",
        },
        {
          id: 'generate-units',
          title: <FormattedMessage id="generate-units" />,
          type: "item",
          url: "/maintenance/generate-units",
        },
        {
          id: 'delete-generated-units',
          title: <FormattedMessage id="Delete Generated Units" />,
          type: "item",
          url: "/maintenance/delete-generated-units",
        }
      ]
    },
    {
      id: 'ownership',
      title: <FormattedMessage id="Ownership" />,
      type: 'item',
      url: '/maintenance/ownership',
    },
    {
      id: 'tenant',
      title: <FormattedMessage id="Tenant" />,
      type: 'item',
      url: '/maintenance/tenant',
    },
    {
      id: 'bad-debt',
      title: <FormattedMessage id="Bad Debt" />,
      type: 'item',
      url: '/maintenance/bad-debt',
    },
    {
      id: 'expenses',
      title: <FormattedMessage id="Expenses" />,
      type: 'item',
      url: '/maintenance/expenses',
    },
    {
      id: 'charges',
      title: <FormattedMessage id="Charges" />,
      type: 'item',
      url: '/maintenance/charges',
    },
    {
      id: 'late-charge-setting',
      title: <FormattedMessage id="Late Charge Setting" />,
      type: 'item',
      url: '/maintenance/late-charge-setting',
    },
    {
      id: 'recurring-setting',
      title: <FormattedMessage id="Recurring Setting" />,
      type: 'collapse',
      children: [
        {
          id: 'scheme-setting',
          title: <FormattedMessage id="Scheme Setting" />,
          type: "item",
          url: "/maintenance/scheme-setting",
        },
        {
          id: 'scheme-property',
          title: <FormattedMessage id="Scheme Property" />,
          type: "item",
          url: "/maintenance/scheme-property",
        }
      ]
    },
    {
      id: 'facility',
      title: <FormattedMessage id="Facility" />,
      type: 'item',
      url: '/maintenance/facility',
    },
    {
      id: 'vendor',
      title: <FormattedMessage id="Vendor" />,
      type: 'item',
      url: '/maintenance/vendor',
    },
    {
      id: 'financier',
      title: <FormattedMessage id="Financier" />,
      type: 'item',
      url: '/maintenance/financier',
    },
    {
      id: 'insurance-company',
      title: <FormattedMessage id="Insurance Company" />,
      type: 'item',
      url: '/maintenance/insurance-company',
    },
    {
      id: 'solicitor',
      title: <FormattedMessage id="Solicitor" />,
      type: 'item',
      url: '/maintenance/solicitor',
    },
    {
      id: 'opening-balance',
      title: <FormattedMessage id="Opening Balance" />,
      type: 'collapse',
      children: [
        {
          id: 'metered-charges',
          title: <FormattedMessage id="Metered Charges" />,
          type: "item",
          url: "/maintenance/metered-charges",
        },
        {
          id: 'all-charges',
          title: <FormattedMessage id="All Charges" />,
          type: "item",
          url: "/maintenance/all-charges",
        }
      ]
    },
    {
      id: 'user-define',
      title: <FormattedMessage id="User Define" />,
      type: 'collapse',
      children: [
        {
          id: 'keyword-group',
          title: <FormattedMessage id="Keyword Group" />,
          type: "item",
          url: "/maintenance/keyword-group",
        },
        {
          id: 'keyword-format',
          title: <FormattedMessage id="Keyword Format" />,
          type: "item",
          url: "/maintenance/keyword-format",
        },
        {
          id: 'letter-format',
          title: <FormattedMessage id="Letter Format" />,
          type: "item",
          url: "/maintenance/letter-format",
        }
      ]
    },
    {
      id: 'miscellaneous-file',
      title: <FormattedMessage id="Miscellaneous File" />,
      type: 'collapse',
      children: [
        {
          id: 'phase',
          title: <FormattedMessage id="Phase" />,
          type: "item",
          url: "/maintenance/phase",
        },
        {
          id: 'house-type',
          title: <FormattedMessage id="House Type" />,
          type: "item",
          url: "/maintenance/house-type",
        },
        {
          id: 'unit-type',
          title: <FormattedMessage id="Unit Type" />,
          type: "item",
          url: "/maintenance/unit-type",
        },
        {
          id: 'owner-group',
          title: <FormattedMessage id="Owner Group" />,
          type: "item",
          url: "/maintenance/owner-group",
        },
        {
          id: 'currency',
          title: <FormattedMessage id="Currency" />,
          type: "item",
          url: "/maintenance/currency",
        },
        {
          id: 'country',
          title: <FormattedMessage id="Country" />,
          type: "item",
          url: "/maintenance/country",
        },
        {
          id: 'state',
          title: <FormattedMessage id="State" />,
          type: "item",
          url: "/maintenance/state",
        },
        {
          id: 'credit-card-type',
          title: <FormattedMessage id="Credit Card Type" />,
          type: "item",
          url: "/maintenance/credit-card-type",
        },
        {
          id: 'deposit-type',
          title: <FormattedMessage id="Deposit Type" />,
          type: "item",
          url: "/maintenance/deposit-type",
        },
        {
          id: 'expenses-type',
          title: <FormattedMessage id="Expenses Type" />,
          type: "item",
          url: "/maintenance/expenses-type",
        },
        {
          id: 'service-category',
          title: <FormattedMessage id="Service Category" />,
          type: "item",
          url: "/maintenance/service-category",
        },
        {
          id: 'vendor-category',
          title: <FormattedMessage id="Vendor Category" />,
          type: "item",
          url: "/maintenance/vendor-category",
        },
        {
          id: 'stamping',
          title: <FormattedMessage id="Stamping" />,
          type: "item",
          url: "/maintenance/stamping",
        },
        {
          id: 'invoice-notes',
          title: <FormattedMessage id="Invoice Notes" />,
          type: "item",
          url: "/maintenance/invoice-notes",
        },
        {
          id: 'tax',
          title: <FormattedMessage id="Tax" />,
          type: "item",
          url: "/maintenance/tax",
        },
        {
          id: 'reason',
          title: <FormattedMessage id="Reason" />,
          type: "item",
          url: "/maintenance/reason",
        },
      ]
    },
  ]
};

export default maintenance;
