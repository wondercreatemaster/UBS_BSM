// third-party
import { Bill, CardTick1 } from 'iconsax-react';
import { FormattedMessage } from 'react-intl';

// type

// ==============================|| MENU ITEMS - PAGES ||============================== //

const icons = {
	invoice: Bill,
	credit: CardTick1
}

const transaction = {
	id: 'transaction',
	title: <FormattedMessage id="transaction" />,
	type: 'group',
	children: [
		{
			id: 'invoice',
			title: <FormattedMessage id="invoice" />,
			type: 'item',
			url: '/transaction/invoice',
			icon: icons.invoice
			// children: [
			// 	{
			// 		id: 'invoice-billing',
			// 		title: <FormattedMessage id="invoice-billing" />,
			// 		type: "item",
			// 		url: "/transaction/invoice-billing",
			// 	},
			// 	{
			// 		id: 'auto-generate-billing',
			// 		title: <FormattedMessage id="auto-generate-billing" />,
			// 		type: "item",
			// 		url: "/transaction/auto-generate-billing",
			// 	},
			// 	{
			// 		id: 'generate-meter-invoice',
			// 		title: <FormattedMessage id="generate-meter-invoice" />,
			// 		type: "item",
			// 		url: "/transaction/generate-meter-invoice",
			// 	},
			// 	{
			// 		id: 'delete-auto-generate-invoice-in-batch',
			// 		title: <FormattedMessage id="delete-auto-generate-invoice-in-batch" />,
			// 		type: "item",
			// 		url: "/transaction/delete-auto-generate-invoice-in-batch",
			// 	},
			// 	{
			// 		id: 'delete-meter-invoice-in-match',
			// 		title: <FormattedMessage id="delete-meter-invoice-in-match" />,
			// 		type: "item",
			// 		url: "/transaction/delete-meter-invoice-in-match",
			// 	},
			// ]
		},
		// {
		// 	id: 'debit-note',
		// 	title: <FormattedMessage id="debit-note" />,
		// 	type: 'item',
		// 	url: '/transaction/debit-note',
		// },
		// {
		// 	id: 'credit',
		// 	title: <FormattedMessage id="credit" />,
		// 	type: 'collapse',
		// 	children: [
		{
			id: 'credit-note',
			title: <FormattedMessage id="credit-note" />,
			type: "item",
			url: "/transaction/credit-note",
			icon: icons.credit
		},
		// 		{
		// 			id: 'auto-generate-credit-note',
		// 			title: <FormattedMessage id="auto-generate-credit-note" />,
		// 			type: "item",
		// 			url: "/transaction/auto-generate-credit-note",
		// 		},
		// 	]
		// },
		// {
		// 	id: 'payment',
		// 	title: <FormattedMessage id="payment" />,
		// 	type: 'item',
		// 	url: '/transaction/payment',
		// },
		// {
		// 	id: 'deposit',
		// 	title: <FormattedMessage id="deposit" />,
		// 	type: 'collapse',
		// 	children: [
		// 		{
		// 			id: 'deposit-payment',
		// 			title: <FormattedMessage id="deposit-payment" />,
		// 			type: "item",
		// 			url: "/transaction/deposit-payment",
		// 		},
		// 		{
		// 			id: 'deposit-refund',
		// 			title: <FormattedMessage id="deposit-refund" />,
		// 			type: "item",
		// 			url: "/transaction/deposit-refund",
		// 		},
		// 	]
		// },
		// {
		// 	id: 'vendor-invoice',
		// 	title: <FormattedMessage id="vendor-invoice" />,
		// 	type: 'item',
		// 	url: '/transaction/vendor-invoice',
		// },
		// {
		// 	id: 'vendor-payment',
		// 	title: <FormattedMessage id="vendor-payment" />,
		// 	type: 'item',
		// 	url: '/transaction/vendor-payment',
		// },
		// {
		// 	id: 'late-interest',
		// 	title: <FormattedMessage id="late-interest" />,
		// 	type: 'collapse',
		// 	children: [
		// 		{
		// 			id: 'charge-late-interest',
		// 			title: <FormattedMessage id="charge-late-interest" />,
		// 			type: "item",
		// 			url: "/transaction/charge-late-interest",
		// 		},
		// 		{
		// 			id: 'delete-late-interest',
		// 			title: <FormattedMessage id="delete-late-interest" />,
		// 			type: "item",
		// 			url: "/transaction/delete-late-interest",
		// 		},
		// 		{
		// 			id: 'waive-late-interest-in-batch',
		// 			title: <FormattedMessage id="waive-late-interest-in-batch" />,
		// 			type: "item",
		// 			url: "/transaction/waive-late-interest-in-batch",
		// 		},
		// 		{
		// 			id: 'revise-interest-date',
		// 			title: <FormattedMessage id="revise-interest-date" />,
		// 			type: "item",
		// 			url: "/transaction/revise-interest-date",
		// 		},
		// 		{
		// 			id: 'revise-interest-date-in-batch',
		// 			title: <FormattedMessage id="revise-interest-date-in-batch" />,
		// 			type: "item",
		// 			url: "/transaction/revise-interest-date-in-batch",
		// 		},
		// 	]
		// },
		// {
		// 	id: 'owner-knockoff',
		// 	title: <FormattedMessage id="owner-knockoff" />,
		// 	type: 'item',
		// 	url: '/transaction/owner-knockoff',
		// },
		// {
		// 	id: 'vendor-knockoff',
		// 	title: <FormattedMessage id="vendor-knockoff" />,
		// 	type: 'item',
		// 	url: '/transaction/vendor-knockoff',
		// },
		// {
		// 	id: 'reverse-knockoff',
		// 	title: <FormattedMessage id="reverse-knockoff" />,
		// 	type: 'item',
		// 	url: '/transaction/reverse-knockoff',
		// },
		// {
		// 	id: 'reverse-vendor-knockoff',
		// 	title: <FormattedMessage id="reverse-vendor-knockoff" />,
		// 	type: 'item',
		// 	url: '/transaction/reverse-vendor-knockoff',
		// },
		// {
		// 	id: 'generate-reminder-letter',
		// 	title: <FormattedMessage id="generate-reminder-letter" />,
		// 	type: 'item',
		// 	url: '/transaction/generate-reminder-letter',
		// },
	]
};

export default transaction;
