import axiosServices from "./axios"

export const countries = {
  MY: "Malaysia",
  HK: "Hong Kong",
  AU: "Australia",
  SG: "Singapore"
}

export const unittypes = {
  CONDO: "CONDO",
}

export const phases = {
  "BLOCK A": "BLOCK A",
  "BLOCK B": "BLOCK B",
  "BLOCK C": "BLOCK C",
  "BLOCK D": "BLOCK D",
  "BLOCK E": "BLOCK E",
}

export const states = {
  KL: "KUALA LUMPUR",
  KD: "KEDAH",
  KT: "KELANTAN",
  ML: "MELAKA",
  NS: "NEGERI SEMBIRAN",
  PN: "PENANG",
  PH: "PAHANG"
}

export const calcmethods = {
  "By Area Width": "By Area Width",
  "By Fixed Rate": "By Fixed Rate",
  "By Metered Rate": "By Metered Rate",
  "By Car Park Lot": "By Car Park Lot",
  "By Selling Price": "By Selling Price",
  "Un-specified": "Un-specified"
}

export const ownertypes = {
  '1': 'Person',
  '2': 'Company',
  '3': 'Developer'
}

export const genders = [
  'Unspecified',
  'Male',
  'Female'
]

export const premailtypes = [
  '',
  'Contact Address',
  'Console Address'
]

export const races = [
  'Unspecified',
  'Malay',
  'Chinese',
  'Indian',
  'Others'
]

export const mstatus = [
  'Unspecified',
  'Single',
  'Married',
  'Divorced',
  'Widowed'
]

export const status = [
  'Active',
  'Inactive'
]

export const metertypes = [
  'Electricity',
  'Gas',
  'Water',
  'Un-specified'
]

export const metercalcs = [
  'Flat Rate',
  'Table Rate'
]

export const intervaltypes = [
  'Day(s) Forwards',
  'Week(s) Forwards',
  'Month(s) Forwards',
  'Year(s) Forwards',
  'Day(s) Backwards',
  'Week(s) Backwards',
  'Month(s) Backwards',
  'Year(s) Backwards',
]

export const carparktypes = [
  'Buy',
  'Rent',
  'Both'
]

let charges = {};
(await axiosServices.get('/api/charge/getall')).data.charges.map(charge => charges = { ...charges, [charge.CHARCODE]: charge.DESP })
export const chargecodetypes = charges