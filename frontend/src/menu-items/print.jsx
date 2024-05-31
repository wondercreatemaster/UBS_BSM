// third-party
import { FormattedMessage } from 'react-intl';

// type

// ==============================|| MENU ITEMS - PAGES ||============================== //

const print = {
    id: 'print',
    title: <FormattedMessage id="Print" />,
    type: 'group',
    children: [
        {
            id: 'invoice-printout',
            title: <FormattedMessage id="Invoice Printout" />,
            type: 'item',
            url: '/print/invoice-printout',
        },
        {
            id: 'invoice-debit-note-printout',
            title: <FormattedMessage id="Invoice Debit Note Printout" />,
            type: 'item',
            url: '/print/invoice-debit-note-printout',
        },
        {
            id: 'payment-printout',
            title: <FormattedMessage id="Payment Printout" />,
            type: 'item',
            url: '/print/payment-printout',
        },
        {
            id: 'debit-note-printout',
            title: <FormattedMessage id="Debit Note Printout" />,
            type: 'item',
            url: '/print/debit-note-printout',
        },
        {
            id: 'credit-note-printout',
            title: <FormattedMessage id="Credit Note Printout" />,
            type: 'item',
            url: '/print/credit-note-printout',
        },
        {
            id: 'deposit-payment-printout',
            title: <FormattedMessage id="Deposit Payment Printout" />,
            type: 'item',
            url: '/print/deposit-payment-printout',
        },
        {
            id: 'deposit-refund-printout',
            title: <FormattedMessage id="Deposit Refund Printout" />,
            type: 'item',
            url: '/print/deposit-refund-printout',
        },
        {
            id: 'monthly-statement',
            title: <FormattedMessage id="Monthly Statement" />,
            type: 'item',
            url: '/print/monthly-statement',
        },
        {
            id: 'reminder-letters-printout',
            title: <FormattedMessage id="Reminder Letters Printout" />,
            type: 'item',
            url: '/print/reminder-letters-printout',
        },
        {
            id: 'mailing-label',
            title: <FormattedMessage id="Mailing Label" />,
            type: 'item',
            url: '/print/mailing-label',
        },
        {
            id: 'user-define-letter',
            title: <FormattedMessage id="User Define Letter" />,
            type: 'item',
            url: '/print/user-define-letter',
        },
        {
            id: 'purge-log',
            title: <FormattedMessage id="Perge Log" />,
            type: 'item',
            url: '/print/purge-log',
        },
    ]
};

export default print;
