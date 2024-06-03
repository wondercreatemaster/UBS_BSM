// third-party
import { FormattedMessage } from 'react-intl';

// type

// ==============================|| MENU ITEMS - PAGES ||============================== //

const report = {
  id: 'report',
  title: <FormattedMessage id="Report" />,
  type: 'group',
  children: [
    {
      id: 'transaction-list',
      title: <FormattedMessage id="Transaction List" />,
      type: 'collapse',
      children: [
        {
          id: 'billing-listing',
          title: <FormattedMessage id="Billing Listing" />,
          type: 'collapse',
          children: [
            {
              id: 'invoice-list',
              title: <FormattedMessage id="Invoice List" />,
              type: "item",
              url: "/report/invoice-list",
            },
            {
              id: 'invoice-list-by-unit-no',
              title: <FormattedMessage id="Invoice List By Unit No" />,
              type: "item",
              url: "/report/invoice-list-by-unit-no",
            },
            {
              id: 'invoice-list-by-tenant',
              title: <FormattedMessage id="Invoice List By Tenant" />,
              type: "item",
              url: "/report/invoice-list-by-tenant",
            },
            {
              id: 'meter-invoice-list',
              title: <FormattedMessage id="Meter Invoice List" />,
              type: "item",
              url: "/report/meter-invoice-list",
            },
            {
              id: 'meter-invoice-list-by-unit-no',
              title: <FormattedMessage id="Meter Invoice List By Unit No" />,
              type: "item",
              url: "/report/meter-invoice-list-by-unit-no",
            },
            {
              id: 'meter-invoice-list-by-tenant',
              title: <FormattedMessage id="Meter Invoice List By Tenant" />,
              type: "item",
              url: "/report/meter-invoice-list-by-tenant",
            },
            {
              id: 'late-charges-list',
              title: <FormattedMessage id="Late Charges List" />,
              type: "item",
              url: "/report/late-charges-list",
            },
            {
              id: 'late-charges-list-by-unit-no',
              title: <FormattedMessage id="Late Charges List By Unit No" />,
              type: "item",
              url: "/report/late-charges-list-by-unit-no",
            },
            {
              id: 'billing-listing-by-charges',
              title: <FormattedMessage id="Billing Listing By Charges" />,
              type: "item",
              url: "/report/billing-listing-by-charges",
            },
            {
              id: 'billing-charges-list',
              title: <FormattedMessage id="Billing Charges List" />,
              type: "item",
              url: "/report/billing-charges-list",
            },
            {
              id: 'billing-details',
              title: <FormattedMessage id="Billing Details" />,
              type: "item",
              url: "/report/billing-details",
            },
          ]
        },
        {
          id: 'mayment-listing',
          title: <FormattedMessage id="Payment Listing" />,
          type: 'collapse',
          children: [
            {
              id: 'payment-list',
              title: <FormattedMessage id="Payment List" />,
              type: "item",
              url: "/report/payment-list",
            },
            {
              id: 'payment-list-by-unit-no',
              title: <FormattedMessage id="Payment List By Unit No" />,
              type: "item",
              url: "/report/payment-list-by-unit-no",
            },
            {
              id: 'payment-list-by-tenant',
              title: <FormattedMessage id="Payment List By Tenant" />,
              type: "item",
              url: "/report/payment-list-by-tenant",
            },
            {
              id: 'payment-details',
              title: <FormattedMessage id="Payment Details" />,
              type: "item",
              url: "/report/payment-details",
            },
            {
              id: 'payment-details-by-tenant',
              title: <FormattedMessage id="Payment Details By Tenant" />,
              type: "item",
              url: "/report/payment-details-by-tenant",
            },
            {
              id: 'payment-receipt-by-charges',
              title: <FormattedMessage id="Payment Receipt By Charges" />,
              type: "item",
              url: "/report/payment-receipt-by-charges",
            },
            {
              id: 'deleted-payment-list',
              title: <FormattedMessage id="Deleted Payment List" />,
              type: "item",
              url: "/report/deleted-payment-list",
            },
            {
              id: 'payment-knock-off-error-check-list',
              title: <FormattedMessage id="Payent Knock Off Error Check List" />,
              type: "item",
              url: "/report/payment-knock-off-error-check-list",
            },
            {
              id: 'payment-knock-off-error-listing',
              title: <FormattedMessage id="Payment Knock Off Error Listing" />,
              type: "item",
              url: "/report/payment-knock-off-error-listing",
            },
          ]
        },
        {
          id: 'outstanding-listing',
          title: <FormattedMessage id="Outstanding Listing" />,
          type: 'collapse',
          children: [
            {
              id: 'outstanding-billing',
              title: <FormattedMessage id="Outstanding Billing" />,
              type: "item",
              url: "/report/outstanding-billing",
            },
            {
              id: 'outstanding-billing-by-charges',
              title: <FormattedMessage id="Outstanding Billing By Charges" />,
              type: "item",
              url: "/report/outstanding-billing-by-charges",
            },
            {
              id: 'outstanding-billing-by-tenant',
              title: <FormattedMessage id="Outstanding Billing By Tenant" />,
              type: "item",
              url: "/report/outstanding-billing-by-tenant",
            },
            {
              id: 'outstanding-charges-list',
              title: <FormattedMessage id="Outstanding Charges List" />,
              type: "item",
              url: "/report/outstanding-charges-list",
            },
            {
              id: 'owner-outstanding-by-charges',
              title: <FormattedMessage id="Owner Outstanding By Charges" />,
              type: "item",
              url: "/report/owner-outstanding-by-charges",
            },
          ]
        },
        {
          id: 'debit-note-listing',
          title: <FormattedMessage id="Debit Note Listing" />,
          type: 'collapse',
          children: [
            {
              id: 'debit-note-list',
              title: <FormattedMessage id="Debit Note List" />,
              type: "item",
              url: "/report/debit-note-list",
            },
            {
              id: 'debit-note-list-by-unit-no',
              title: <FormattedMessage id="Debit Note List By Unit No" />,
              type: "item",
              url: "/report/debit-note-list-by-unit-no",
            },
            {
              id: 'debit-note-list-by-tenant',
              title: <FormattedMessage id="Debit Note List By Tenant" />,
              type: "item",
              url: "/report/debit-note-list-by-tenant",
            },
          ]
        },
        {
          id: 'credit-note-listing',
          title: <FormattedMessage id="Credit Note Listing" />,
          type: 'collapse',
          children: [
            {
              id: 'credit-note-list',
              title: <FormattedMessage id="Credit Note List" />,
              type: "item",
              url: "/report/credit-note-list",
            },
            {
              id: 'credit-note-list-by-unit-no',
              title: <FormattedMessage id="Credit Note List By Unit No" />,
              type: "item",
              url: "/report/credit-note-list-by-unit-no",
            },
            {
              id: 'credit-note-list-by-tenant',
              title: <FormattedMessage id="Credit Note List By Tenant" />,
              type: "item",
              url: "/report/credit-note-list-by-tenant",
            },
            {
              id: 'credit-note-by-charges',
              title: <FormattedMessage id="Credit Note By Charges" />,
              type: "item",
              url: "/report/credit-note-by-charges",
            },
          ]
        },
      ]
    },
    {
      id: 'facility-service-record',
      title: <FormattedMessage id="Facility Service Record" />,
      type: 'item',
      url: '/report/facility-service-record',
    },
    {
      id: 'service-request',
      title: <FormattedMessage id="Service Request" />,
      type: 'item',
      url: '/report/service-request',
    }
  ]
};

export default report;
