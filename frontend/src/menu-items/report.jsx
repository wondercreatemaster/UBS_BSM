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
                            title: <FormattedMessage id="Invoice List" />,
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
                            id: 'late-charges-list',
                            title: <FormattedMessage id="Meter Invoice List By Unit No" />,
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
                            id: 'billing-list-by-charges',
                            title: <FormattedMessage id="Billing List By Charges" />,
                            type: "item",
                            url: "/report/billing-list-by-charges",
                        },
                    ]
                },
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
                            title: <FormattedMessage id="Invoice List" />,
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
                            id: 'late-charges-list',
                            title: <FormattedMessage id="Meter Invoice List By Unit No" />,
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
                            id: 'billing-list-by-charges',
                            title: <FormattedMessage id="Billing List By Charges" />,
                            type: "item",
                            url: "/report/billing-list-by-charges",
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
