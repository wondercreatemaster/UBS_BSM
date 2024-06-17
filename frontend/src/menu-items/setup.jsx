// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { ArchiveBook, ColorSwatch, House, I24Support, MessageProgramming } from 'iconsax-react';

// type

// icons
// icons
const icons = {
  setup: MessageProgramming,
  contactus: I24Support,
  property: ArchiveBook,
  ownership: ColorSwatch,
  tenant: House
};

// ==============================|| MENU ITEMS - PAGES ||============================== //

const setup = {
  id: 'setup',
  title: <FormattedMessage id="setup" />,
  type: 'group',
  children: [
    {
      id: 'property',
      title: <FormattedMessage id="property_container" />,
      type: 'item',
      url: '/setup/property',
      icon: icons.property,
      breadcrumbs: false
      // type: 'collapse',
      // children: [
      //   {
      //     id: 'unit-property',
      //     title: <FormattedMessage id="property" />,
      //     type: "item",
      //     url: "/maintenance/property",
      //   },
      //   {
      //     id: 'generate-units',
      //     title: <FormattedMessage id="generate-units" />,
      //     type: "item",
      //     url: "/maintenance/generate-units",
      //   },
      //   {
      //     id: 'delete-generated-units',
      //     title: <FormattedMessage id='delete-generated-units' />,
      //     type: "item",
      //     url: "/maintenance/delete-generated-units",
      //   }
      // ]
    },
    {
      id: 'ownership',
      title: <FormattedMessage id="ownership" />,
      type: 'item',
      url: '/setup/ownership',
      icon: icons.ownership,
      breadcrumbs: false
    },
    {
      id: 'tenant',
      title: <FormattedMessage id="tenant" />,
      type: 'item',
      url: '/setup/tenant',
      icon: icons.tenant
    },
    // {
    //   id: 'bad-debt',
    //   title: <FormattedMessage id="bad-debt" />,
    //   type: 'item',
    //   url: '/maintenance/bad-debt',
    // },
    // {
    //   id: 'expenses',
    //   title: <FormattedMessage id="expenses" />,
    //   type: 'item',
    //   url: '/maintenance/expenses',
    // },
    // {
    //   id: 'charges',
    //   title: <FormattedMessage id="charges" />,
    //   type: 'item',
    //   url: '/maintenance/charges',
    // },
    // {
    //   id: 'late-charge-setting',
    //   title: <FormattedMessage id="late-charge-setting" />,
    //   type: 'item',
    //   url: '/maintenance/late-charge-setting',
    // },
    // {
    //   id: 'recurring-setting',
    //   title: <FormattedMessage id="recurring-setting" />,
    //   type: 'collapse',
    //   children: [
    //     {
    //       id: 'scheme-setting',
    //       title: <FormattedMessage id="scheme-setting" />,
    //       type: "item",
    //       url: "/maintenance/scheme-setting",
    //     },
    //     {
    //       id: 'scheme-property',
    //       title: <FormattedMessage id="scheme-property" />,
    //       type: "item",
    //       url: "/maintenance/scheme-property",
    //     }
    //   ]
    // },
    // {
    //   id: 'facility',
    //   title: <FormattedMessage id="facility" />,
    //   type: 'item',
    //   url: '/maintenance/facility',
    // },
    // {
    //   id: 'vendor',
    //   title: <FormattedMessage id="vendor" />,
    //   type: 'item',
    //   url: '/maintenance/vendor',
    // },
    // {
    //   id: 'financier',
    //   title: <FormattedMessage id="financier" />,
    //   type: 'item',
    //   url: '/maintenance/financier',
    // },
    // {
    //   id: 'insurance-company',
    //   title: <FormattedMessage id="insurance-company" />,
    //   type: 'item',
    //   url: '/maintenance/insurance-company',
    // },
    // {
    //   id: 'solicitor',
    //   title: <FormattedMessage id="solicitor" />,
    //   type: 'item',
    //   url: '/maintenance/solicitor',
    // },
    // {
    //   id: 'opening-balance',
    //   title: <FormattedMessage id="opening-balance" />,
    //   type: 'collapse',
    //   children: [
    //     {
    //       id: 'metered-charges',
    //       title: <FormattedMessage id="metered-charges" />,
    //       type: "item",
    //       url: "/maintenance/metered-charges",
    //     },
    //     {
    //       id: 'all-charges',
    //       title: <FormattedMessage id="all-charges" />,
    //       type: "item",
    //       url: "/maintenance/all-charges",
    //     }
    //   ]
    // },
    // {
    //   id: 'user-define',
    //   title: <FormattedMessage id="user-define" />,
    //   type: 'collapse',
    //   children: [
    //     {
    //       id: 'keyword-group',
    //       title: <FormattedMessage id="keyword-group" />,
    //       type: "item",
    //       url: "/maintenance/keyword-group",
    //     },
    //     {
    //       id: 'keyword-format',
    //       title: <FormattedMessage id="keyword-format" />,
    //       type: "item",
    //       url: "/maintenance/keyword-format",
    //     },
    //     {
    //       id: 'letter-format',
    //       title: <FormattedMessage id="letter-format" />,
    //       type: "item",
    //       url: "/maintenance/letter-format",
    //     }
    //   ]
    // },
    // {
    //   id: 'miscellaneous-file',
    //   title: <FormattedMessage id="miscellaneous-file" />,
    //   type: 'collapse',
    //   children: [
    //     {
    //       id: 'phase',
    //       title: <FormattedMessage id="phase" />,
    //       type: "item",
    //       url: "/maintenance/phase",
    //     },
    //     {
    //       id: 'house-type',
    //       title: <FormattedMessage id="house-type" />,
    //       type: "item",
    //       url: "/maintenance/house-type",
    //     },
    //     {
    //       id: 'unit-type',
    //       title: <FormattedMessage id="unit-type" />,
    //       type: "item",
    //       url: "/maintenance/unit-type",
    //     },
    //     {
    //       id: 'owner-group',
    //       title: <FormattedMessage id="owner-group" />,
    //       type: "item",
    //       url: "/maintenance/owner-group",
    //     },
    //     {
    //       id: 'currency',
    //       title: <FormattedMessage id="currency" />,
    //       type: "item",
    //       url: "/maintenance/currency",
    //     },
    //     {
    //       id: 'country',
    //       title: <FormattedMessage id="country" />,
    //       type: "item",
    //       url: "/maintenance/country",
    //     },
    //     {
    //       id: 'state',
    //       title: <FormattedMessage id="state" />,
    //       type: "item",
    //       url: "/maintenance/state",
    //     },
    //     {
    //       id: 'credit-card-type',
    //       title: <FormattedMessage id="credit-card-type" />,
    //       type: "item",
    //       url: "/maintenance/credit-card-type",
    //     },
    //     {
    //       id: 'deposit-type',
    //       title: <FormattedMessage id="deposit-type" />,
    //       type: "item",
    //       url: "/maintenance/deposit-type",
    //     },
    //     {
    //       id: 'expenses-type',
    //       title: <FormattedMessage id="expenses-type" />,
    //       type: "item",
    //       url: "/maintenance/expenses-type",
    //     },
    //     {
    //       id: 'service-category',
    //       title: <FormattedMessage id="service-category" />,
    //       type: "item",
    //       url: "/maintenance/service-category",
    //     },
    //     {
    //       id: 'vendor-category',
    //       title: <FormattedMessage id="vendor-category" />,
    //       type: "item",
    //       url: "/maintenance/vendor-category",
    //     },
    //     {
    //       id: 'stamping',
    //       title: <FormattedMessage id="stamping" />,
    //       type: "item",
    //       url: "/maintenance/stamping",
    //     },
    //     {
    //       id: 'invoice-notes',
    //       title: <FormattedMessage id="invoice-notes" />,
    //       type: "item",
    //       url: "/maintenance/invoice-notes",
    //     },
    //     {
    //       id: 'tax',
    //       title: <FormattedMessage id="tax" />,
    //       type: "item",
    //       url: "/maintenance/tax",
    //     },
    //     {
    //       id: 'reason',
    //       title: <FormattedMessage id="reason" />,
    //       type: "item",
    //       url: "/maintenance/reason",
    //     },
    //   ]
    // },
  ]
};

export default setup;
