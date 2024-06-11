// third-party
import { FormattedMessage } from 'react-intl';

// type

// ==============================|| MENU ITEMS - PAGES ||============================== //

const print = {
    id: 'print',
    title: <FormattedMessage id="print" />,
    type: 'group',
    children: [
        {
            id: 'invoice-printout',
            title: <FormattedMessage id="invoice-printout" />,
            type: 'item',
            url: '/print/invoice-printout',
        },
        {
            id: 'invoice-debit-note-printout',
            title: <FormattedMessage id="invoice-debit-note-printout" />,
            type: 'item',
            url: '/print/invoice-debit-note-printout',
        },
        {
            id: 'payment-printout',
            title: <FormattedMessage id="payment-printout" />,
            type: 'item',
            url: '/print/payment-printout',
        },
        {
            id: 'debit-note-printout',
            title: <FormattedMessage id="debit-note-printout" />,
            type: 'item',
            url: '/print/debit-note-printout',
        },
        {
            id: 'credit-note-printout',
            title: <FormattedMessage id="credit-note-printout" />,
            type: 'item',
            url: '/print/credit-note-printout',
        },
        {
            id: 'deposit-payment-printout',
            title: <FormattedMessage id="deposit-payment-printout" />,
            type: 'item',
            url: '/print/deposit-payment-printout',
        },
        {
            id: 'deposit-refund-printout',
            title: <FormattedMessage id="deposit-refund-printout" />,
            type: 'item',
            url: '/print/deposit-refund-printout',
        },
        {
            id: 'monthly-statement',
            title: <FormattedMessage id="monthly-statement" />,
            type: 'item',
            url: '/print/monthly-statement',
        },
        {
            id: 'reminder-letters-printout',
            title: <FormattedMessage id="reminder-letters-printout" />,
            type: 'item',
            url: '/print/reminder-letters-printout',
        },
        {
            id: 'mailing-label',
            title: <FormattedMessage id="mailing-label" />,
            type: 'item',
            url: '/print/mailing-label',
        },
        {
            id: 'user-define-letter',
            title: <FormattedMessage id="user-define-letter" />,
            type: 'item',
            url: '/print/user-define-letter',
        },
        {
            id: 'purge-log',
            title: <FormattedMessage id="purge-log" />,
            type: 'item',
            url: '/print/purge-log',
        },
    ]
};

export default print;
