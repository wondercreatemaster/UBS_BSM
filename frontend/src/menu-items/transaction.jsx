// third-party
import { FormattedMessage } from 'react-intl';

// type

// ==============================|| MENU ITEMS - PAGES ||============================== //

const transaction = {
	id: 'transaction',
	title: <FormattedMessage id="Transaction" />,
	type: 'group',
	children: [
		{
			id: 'invoice',
			title: <FormattedMessage id="Invoice" />,
			type: 'collapse',
			children: [
				{
					id: 'invoice-billing',
					title: <FormattedMessage id="Invoice Billing" />,
					type: "item",
					url: "/transaction/invoice-billing",
				},
				{
					id: 'auto-generate-billing',
					title: <FormattedMessage id="Auto Generate Billing" />,
					type: "item",
					url: "/transaction/auto-generate-billing",
				},
				{
					id: 'generate-meter-invoice',
					title: <FormattedMessage id="Generate Meter Invoice" />,
					type: "item",
					url: "/transaction/generate-meter-invoice",
				},
				{
					id: 'delete-auto-generate-invoice-in-batch',
					title: <FormattedMessage id="Delete Auto Generate Invoice In Batch" />,
					type: "item",
					url: "/transaction/delete-auto-generate-invoice-in-batch",
				},
				{
					id: 'delete-meter-invoice-in-match',
					title: <FormattedMessage id="Delete Meter Invoice In Batch" />,
					type: "item",
					url: "/transaction/delete-meter-invoice-in-match",
				},
			]
		},
		{
			id: 'debit-note',
			title: <FormattedMessage id="Debit Note" />,
			type: 'item',
			url: '/transaction/debit-note',
		},
		{
			id: 'credit',
			title: <FormattedMessage id="Credit Note" />,
			type: 'collapse',
			children: [
				{
					id: 'credit-note',
					title: <FormattedMessage id="Credit Note" />,
					type: "item",
					url: "/transaction/credit-note",
				},
				{
					id: 'auto-generate-credit-note',
					title: <FormattedMessage id="Auto Generate Credit Note" />,
					type: "item",
					url: "/transaction/auto-generate-credit-note",
				},
			]
		},
		{
			id: 'payment',
			title: <FormattedMessage id="Payment" />,
			type: 'item',
			url: '/transaction/payment',
		},
		{
			id: 'deposit',
			title: <FormattedMessage id="Deposit" />,
			type: 'collapse',
			children: [
				{
					id: 'deposit-payment',
					title: <FormattedMessage id="Deposit Payment" />,
					type: "item",
					url: "/transaction/deposit-payment",
				},
				{
					id: 'deposit-refund',
					title: <FormattedMessage id="Deposit Refund" />,
					type: "item",
					url: "/transaction/deposit-refund",
				},
			]
		},
		{
			id: 'vendor-invoice',
			title: <FormattedMessage id="Vendor's Invoice" />,
			type: 'item',
			url: '/transaction/vendor-invoice',
		},
		{
			id: 'vendor-payment',
			title: <FormattedMessage id="Vendor's Payment" />,
			type: 'item',
			url: '/transaction/vendor-payment',
		},
		{
			id: 'late-interest',
			title: <FormattedMessage id="Late Interest" />,
			type: 'collapse',
			children: [
				{
					id: 'charge-late-interest',
					title: <FormattedMessage id="Charge Late Interest" />,
					type: "item",
					url: "/transaction/charge-late-interest",
				},
				{
					id: 'delete-late-interest',
					title: <FormattedMessage id="Delete Late Interest" />,
					type: "item",
					url: "/transaction/delete-late-interest",
				},
				{
					id: 'waive-late-interest-in-batch',
					title: <FormattedMessage id="Waive Late Interest in Batch" />,
					type: "item",
					url: "/transaction/waive-late-interest-in-batch",
				},
				{
					id: 'revise-interest-date',
					title: <FormattedMessage id="Revise Interest Date" />,
					type: "item",
					url: "/transaction/revise-interest-date",
				},
				{
					id: 'revise-interest-date-in-batch',
					title: <FormattedMessage id="Revise Interest Date in Batch" />,
					type: "item",
					url: "/transaction/revise-interest-date-in-batch",
				},
			]
		},
		{
			id: 'owner-knockoff',
			title: <FormattedMessage id="Owner's Knock Off" />,
			type: 'item',
			url: '/transaction/owner-knockoff',
		},
		{
			id: 'vendor-knockoff',
			title: <FormattedMessage id="Vendor's Knock Off" />,
			type: 'item',
			url: '/transaction/vendor-knockoff',
		},
		{
			id: 'reverse-knockoff',
			title: <FormattedMessage id="Reverse Knock Off" />,
			type: 'item',
			url: '/transaction/reverse-knockoff',
		},
		{
			id: 'reverse-vendor-knockoff',
			title: <FormattedMessage id="Reverse Vendor's Knock Off" />,
			type: 'item',
			url: '/transaction/reverse-vendor-knockoff',
		},
		{
			id: 'generate-reminder-letter',
			title: <FormattedMessage id="Generate Reminder Letter" />,
			type: 'item',
			url: '/transaction/generate-reminder-letter',
		},
	]
};

export default transaction;
