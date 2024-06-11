// third-party
import { FormattedMessage } from 'react-intl';

// type

// ==============================|| MENU ITEMS - PAGES ||============================== //

const report = {
  id: 'report',
  title: <FormattedMessage id="report" />,
  type: 'group',
  children: [
    {
      id: 'transaction-list',
      title: <FormattedMessage id="transaction-list" />,
      type: 'collapse',
      children: [
        {
          id: 'billing-listing',
          title: <FormattedMessage id="billing-listing" />,
          type: 'collapse',
          children: [
            {
              id: 'invoice-list',
              title: <FormattedMessage id="invoice-list" />,
              type: "item",
              url: "/report/invoice-list",
            },
            {
              id: 'invoice-list-by-unit-no',
              title: <FormattedMessage id="invoice-list-by-unit-no" />,
              type: "item",
              url: "/report/invoice-list-by-unit-no",
            },
            {
              id: 'invoice-list-by-tenant',
              title: <FormattedMessage id="invoice-list-by-tenant" />,
              type: "item",
              url: "/report/invoice-list-by-tenant",
            },
            {
              id: 'meter-invoice-list',
              title: <FormattedMessage id="meter-invoice-list" />,
              type: "item",
              url: "/report/meter-invoice-list",
            },
            {
              id: 'meter-invoice-list-by-unit-no',
              title: <FormattedMessage id="meter-invoice-list-by-unit-no" />,
              type: "item",
              url: "/report/meter-invoice-list-by-unit-no",
            },
            {
              id: 'meter-invoice-list-by-tenant',
              title: <FormattedMessage id="meter-invoice-list-by-tenant" />,
              type: "item",
              url: "/report/meter-invoice-list-by-tenant",
            },
            {
              id: 'late-charges-list',
              title: <FormattedMessage id="late-charges-list" />,
              type: "item",
              url: "/report/late-charges-list",
            },
            {
              id: 'late-charges-list-by-unit-no',
              title: <FormattedMessage id="late-charges-list-by-unit-no" />,
              type: "item",
              url: "/report/late-charges-list-by-unit-no",
            },
            {
              id: 'billing-listing-by-charges',
              title: <FormattedMessage id="billing-listing-by-charges" />,
              type: "item",
              url: "/report/billing-listing-by-charges",
            },
            {
              id: 'billing-charges-list',
              title: <FormattedMessage id="billing-charges-list" />,
              type: "item",
              url: "/report/billing-charges-list",
            },
            {
              id: 'billing-details',
              title: <FormattedMessage id="billing-details" />,
              type: "item",
              url: "/report/billing-details",
            },
          ]
        },
        {
          id: 'payment-listing',
          title: <FormattedMessage id="payment-listing" />,
          type: 'collapse',
          children: [
            {
              id: 'payment-list',
              title: <FormattedMessage id="payment-list" />,
              type: "item",
              url: "/report/payment-list",
            },
            {
              id: 'payment-list-by-unit-no',
              title: <FormattedMessage id="payment-list-by-unit-no" />,
              type: "item",
              url: "/report/payment-list-by-unit-no",
            },
            {
              id: 'payment-list-by-tenant',
              title: <FormattedMessage id="payment-list-by-tenant" />,
              type: "item",
              url: "/report/payment-list-by-tenant",
            },
            {
              id: 'payment-details',
              title: <FormattedMessage id="payment-details" />,
              type: "item",
              url: "/report/payment-details",
            },
            {
              id: 'payment-details-by-tenant',
              title: <FormattedMessage id="payment-details-by-tenant" />,
              type: "item",
              url: "/report/payment-details-by-tenant",
            },
            {
              id: 'payment-receipt-by-charges',
              title: <FormattedMessage id="payment-receipt-by-charges" />,
              type: "item",
              url: "/report/payment-receipt-by-charges",
            },
            {
              id: 'deleted-payment-list',
              title: <FormattedMessage id="deleted-payment-list" />,
              type: "item",
              url: "/report/deleted-payment-list",
            },
            {
              id: 'payment-knock-off-error-check-list',
              title: <FormattedMessage id="payment-knock-off-error-check-list" />,
              type: "item",
              url: "/report/payment-knock-off-error-check-list",
            },
            {
              id: 'payment-knock-off-error-listing',
              title: <FormattedMessage id="payment-knock-off-error-listing" />,
              type: "item",
              url: "/report/payment-knock-off-error-listing",
            },
          ]
        },
        {
          id: 'outstanding-listing',
          title: <FormattedMessage id="outstanding-listing" />,
          type: 'collapse',
          children: [
            {
              id: 'outstanding-billing',
              title: <FormattedMessage id="outstanding-billing" />,
              type: "item",
              url: "/report/outstanding-billing",
            },
            {
              id: 'outstanding-billing-by-charges',
              title: <FormattedMessage id="outstanding-billing-by-charges" />,
              type: "item",
              url: "/report/outstanding-billing-by-charges",
            },
            {
              id: 'outstanding-billing-by-tenant',
              title: <FormattedMessage id="outstanding-billing-by-tenant" />,
              type: "item",
              url: "/report/outstanding-billing-by-tenant",
            },
            {
              id: 'outstanding-charges-list',
              title: <FormattedMessage id="outstanding-charges-list" />,
              type: "item",
              url: "/report/outstanding-charges-list",
            },
            {
              id: 'owner-outstanding-by-charges',
              title: <FormattedMessage id="owner-outstanding-by-charges" />,
              type: "item",
              url: "/report/owner-outstanding-by-charges",
            },
          ]
        },
        {
          id: 'debit-note-listing',
          title: <FormattedMessage id="debit-note-listing" />,
          type: 'collapse',
          children: [
            {
              id: 'debit-note-list',
              title: <FormattedMessage id="debit-note-list" />,
              type: "item",
              url: "/report/debit-note-list",
            },
            {
              id: 'debit-note-list-by-unit-no',
              title: <FormattedMessage id="debit-note-list-by-unit-no" />,
              type: "item",
              url: "/report/debit-note-list-by-unit-no",
            },
            {
              id: 'debit-note-list-by-tenant',
              title: <FormattedMessage id="debit-note-list-by-tenant" />,
              type: "item",
              url: "/report/debit-note-list-by-tenant",
            },
          ]
        },
        {
          id: 'credit-note-listing',
          title: <FormattedMessage id="credit-note-listing" />,
          type: 'collapse',
          children: [
            {
              id: 'credit-note-list',
              title: <FormattedMessage id="credit-note-list" />,
              type: "item",
              url: "/report/credit-note-list",
            },
            {
              id: 'credit-note-list-by-unit-no',
              title: <FormattedMessage id="credit-note-list-by-unit-no" />,
              type: "item",
              url: "/report/credit-note-list-by-unit-no",
            },
            {
              id: 'credit-note-list-by-tenant',
              title: <FormattedMessage id="credit-note-list-by-tenant" />,
              type: "item",
              url: "/report/credit-note-list-by-tenant",
            },
            {
              id: 'credit-note-by-charges',
              title: <FormattedMessage id="credit-note-by-charges" />,
              type: "item",
              url: "/report/credit-note-by-charges",
            },
          ]
        },
      ]
    },
    {
      id: 'facility-service-record',
      title: <FormattedMessage id="facility-service-record" />,
      type: 'item',
      url: '/report/facility-service-record',
    },
    {
      id: 'service-request',
      title: <FormattedMessage id="service-request" />,
      type: 'item',
      url: '/report/service-request',
    }
  ]
};

export default report;
