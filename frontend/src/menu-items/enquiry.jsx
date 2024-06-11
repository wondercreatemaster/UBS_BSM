// third-party
import { FormattedMessage } from 'react-intl';

// type

// ==============================|| MENU ITEMS - PAGES ||============================== //

const enquiry = {
    id: 'enquiry',
    title: <FormattedMessage id="enquiry" />,
    type: 'group',
    children: [
        {
            id: 'owner-ledger',
            title: <FormattedMessage id="owner-ledger" />,
            type: 'item',
            url: '/enquiry/owner-ledger',
        },
        {
            id: 'bad-debt-owner-ledger',
            title: <FormattedMessage id="bad-debt-owner-ledger" />,
            type: 'item',
            url: '/enquiry/bad-debt-owner-ledger',
        },
        {
            id: 'history-owner-ledger',
            title: <FormattedMessage id="history-owner-ledger" />,
            type: 'item',
            url: '/enquiry/history-owner-ledger',
        },
        {
            id: 'meter-ledger',
            title: <FormattedMessage id="meter-ledger" />,
            type: 'item',
            url: '/enquiry/meter-ledger',
        },
        {
            id: 'vender-ledger',
            title: <FormattedMessage id="vender-ledger" />,
            type: 'item',
            url: '/enquiry/vender-ledger',
        },
        {
            id: 'property-listing',
            title: <FormattedMessage id="property-listing" />,
            type: 'item',
            url: '/enquiry/property-listing',
        },
        {
            id: 'log-enquiry',
            title: <FormattedMessage id="log-enquiry" />,
            type: 'collapse',
            children: [
                {
                    id: 'biling-log',
                    title: <FormattedMessage id="biling-log" />,
                    type: "item",
                    url: "/enquiry/biling-log",
                },
                {
                    id: 'revise-interest-date',
                    title: <FormattedMessage id="revise-interest-date" />,
                    type: "item",
                    url: "/enquiry/revise-interest-date",
                },
                {
                    id: 'financier-transfer',
                    title: <FormattedMessage id="financier-transfer" />,
                    type: "item",
                    url: "/enquiry/financier-transfer",
                },
                {
                    id: 'insurance-company-transfer',
                    title: <FormattedMessage id="insurance-company-transfer" />,
                    type: "item",
                    url: "/enquiry/insurance-company-transfer",
                },
                {
                    id: 'solicitor-transfer',
                    title: <FormattedMessage id="solicitor-transfer" />,
                    type: "item",
                    url: "/enquiry/solicitor-transfer",
                },
            ]
        },
    ]
};

export default enquiry;
