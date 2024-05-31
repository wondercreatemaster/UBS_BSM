// third-party
import { FormattedMessage } from 'react-intl';

// type

// ==============================|| MENU ITEMS - PAGES ||============================== //

const enquiry = {
    id: 'enquiry',
    title: <FormattedMessage id="Enquiry" />,
    type: 'group',
    children: [
        {
            id: 'owner-ledger',
            title: <FormattedMessage id="Owner Ledger" />,
            type: 'item',
            url: '/enquiry/owner-ledger',
        },
        {
            id: 'bad-debt-owner-ledger',
            title: <FormattedMessage id="Bad Bebt Owner Ledger" />,
            type: 'item',
            url: '/enquiry/bad-debt-owner-ledger',
        },
        {
            id: 'history-owner-ledger',
            title: <FormattedMessage id="History Owner Ledger" />,
            type: 'item',
            url: '/enquiry/history-owner-ledger',
        },
        {
            id: 'meter-ledger',
            title: <FormattedMessage id="Meter Ledger" />,
            type: 'item',
            url: '/enquiry/meter-ledger',
        },
        {
            id: 'vender-ledger',
            title: <FormattedMessage id="Vendor Ledger" />,
            type: 'item',
            url: '/enquiry/vender-ledger',
        },
        {
            id: 'property-listing',
            title: <FormattedMessage id="Property Listing" />,
            type: 'item',
            url: '/enquiry/property-listing',
        },
        {
            id: 'log-enquiry',
            title: <FormattedMessage id="Log Enquiry" />,
            type: 'collapse',
            children: [
                {
                    id: 'biling-log',
                    title: <FormattedMessage id="Billing Log" />,
                    type: "item",
                    url: "/enquiry/biling-log",
                },
                {
                    id: 'revise-interest-date',
                    title: <FormattedMessage id="Revise Interest Date" />,
                    type: "item",
                    url: "/enquiry/revise-interest-date",
                },
                {
                    id: 'financier-transfer',
                    title: <FormattedMessage id="Financier Transfer" />,
                    type: "item",
                    url: "/enquiry/financier-transfer",
                },
                {
                    id: 'insurance-company-transfer',
                    title: <FormattedMessage id="Insurance Company Transfer" />,
                    type: "item",
                    url: "/enquiry/insurance-company-transfer",
                },
                {
                    id: 'solicitor-transfer',
                    title: <FormattedMessage id="Solicitor Transfer" />,
                    type: "item",
                    url: "/enquiry/solicitor-transfer",
                },
            ]
        },
    ]
};

export default enquiry;
