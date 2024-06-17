import { Box, Checkbox, FormControlLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material"
import { useState } from "react"


export const WithNumFloorNo = () =>
{
  const [checked, setChecked] = useState(false)

  const [head, setHead] = useState('')
  const [separator, setSeparator] = useState('')

  return (
    <Box className="grid grid-cols-12 gap-3 items-baseline">
      <Typography className="col-start-7">Separator</Typography>
      <Typography className="col-span-2">Floor Digit</Typography>
      {
        checked ? "" : <Typography className="col-start-11">Unit Digits</Typography>
      }

      <OutlinedInput className="col-start-7" value={separator} onChange={e =>
      {
        if (e.target.value.length <= 1)
          setSeparator(e.target.value)
      }} />
      <OutlinedInput className="col-span-2" type="number" />
      {
        checked ? "" : <OutlinedInput className="col-start-11" type="number" />
      }

      <Typography className="col-start-1 col-span-3">Unit No From</Typography>
      <OutlinedInput className="col-span-3" value={head} onChange={e => setHead(e.target.value.toUpperCase())} />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type="number" />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type={checked ? "text" : "number"} />

      <Typography className="col-span-3">Unit No To</Typography>
      <OutlinedInput className="col-span-3" value={head} disabled />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type="number" />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type={checked ? "text" : "number"} />

      <FormControlLabel className="col-start-8 col-span-3" control={<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />} label="With Character Unit No" />
    </Box>
  )
}

export const WithCharFloorNo = () =>
{
  const [checked, setChecked] = useState(false)

  const [head, setHead] = useState('')
  const [separator, setSeparator] = useState('')

  return (
    <Box className="grid grid-cols-12 gap-3 items-baseline">
      <Typography className="col-start-7">Separator</Typography>
      <Typography className="col-span-2">Floor No</Typography>
      {
        checked ? "" : <Typography className="col-start-11">Unit Digits</Typography>
      }

      <OutlinedInput className="col-start-7" value={separator} onChange={e =>
      {
        if (e.target.value.length <= 1)
          setSeparator(e.target.value)
      }} />
      {
        checked ? "" : <OutlinedInput className="col-start-11" type="number" />
      }

      <Typography className="col-start-1 col-span-3">Unit No From</Typography>
      <OutlinedInput className="col-span-3" value={head} onChange={e => setHead(e.target.value.toUpperCase())} />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type={checked ? "text" : "number"} />

      <Typography className="col-span-3">Unit No To</Typography>
      <OutlinedInput className="col-span-3" value={head} disabled />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type={checked ? "text" : "number"} />

      <FormControlLabel className="col-start-8 col-span-3" control={<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />} label="With Character Unit No" />
    </Box>
  )
}

export const WithoutFloorNo = () =>
{

  const [head, setHead] = useState('')
  const [separator, setSeparator] = useState('')

  return (
    <Box className="grid grid-cols-12 gap-3 items-baseline">
      <Typography className="col-start-7">Separator</Typography>
      <Typography className="col-span-2">Unit Digits</Typography>

      <OutlinedInput className="col-start-7" value={separator} onChange={e =>
      {
        if (e.target.value.length <= 1)
          setSeparator(e.target.value)
      }} />
      <OutlinedInput type="number" />

      <Typography className="col-start-1 col-span-3">Unit No From</Typography>
      <OutlinedInput className="col-span-3" value={head} onChange={e => setHead(e.target.value.toUpperCase())} />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type="number" />

      <Typography className="col-start-1 col-span-3">Unit No To</Typography>
      <OutlinedInput className="col-span-3" value={head} disabled />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type="number" />
    </Box>
  )
}

export const SpecChar = () =>
{

  const [head, setHead] = useState('')
  const [separator, setSeparator] = useState('')

  const [order, setOrder] = useState(0)

  const [digitChecked, setDigitChecked] = useState(false)
  const [separatorChecked, setSeparatorChecked] = useState(false)

  return (
    <Box className="grid grid-cols-12 gap-3 items-baseline">
      {
        order == 0 || order == 3 ?
          <Typography className="col-start-4 col-span-2">Unit Digits</Typography> : ''
      }
      {
        order == 0 || order == 1 ?
          <>
            {
              separatorChecked ?
                <Typography className="col-start-7">Separator</Typography> : ""
            }
            {
              order == 0 || order == 3 ? '' :
                <Typography className="col-start-8 col-span-2">Unit Digits</Typography>
            }
          </> : ''
      }



      {
        order == 0 || order == 3 ? <OutlinedInput className="col-start-4 col-span-3" type="number" /> : ''
      }
      {
        order == 0 || order == 1 ?
          <>
            {
              separatorChecked ?
                <OutlinedInput className="col-start-7" value={separator} onChange={e =>
                {
                  if (e.target.value.length <= 1)
                    setSeparator(e.target.value)
                }} /> : ''
            }
            {
              order == 1 ?
                <OutlinedInput className="col-start-8" type="number" /> : ''
            }
          </> : ''
      }




      <Typography className="col-start-1 col-span-3">Unit No From</Typography>
      <OutlinedInput className="col-span-3" value={head} onChange={e => setHead(e.target.value.toUpperCase())} type={order == 3 ? "number" : "text"} />
      {
        order == 2 || order == 3 ? '' :
          <>
            {
              separatorChecked ? <OutlinedInput disabled value={separator} /> : ''
            }
            <OutlinedInput className="col-span-2" type="number" />
          </>
      }

      <Typography className="col-start-1 col-span-3">Unit No To</Typography>
      <OutlinedInput className="col-span-3" value={head} type={order == 3 ? "number" : "text"} />
      {
        order == 2 || order == 3 ? '' :
          <>
            {
              separatorChecked ? <OutlinedInput disabled value={separator} /> : ''
            }
            <OutlinedInput className="col-span-2" type="number" />
          </>
      }



      <Typography className="col-start-1 col-span-3">Order</Typography>
      <Select className="col-span-5" value={order} onChange={e => setOrder(e.target.value)}>
        <MenuItem value={0}>Numeric before character</MenuItem>
        <MenuItem value={1}>Character before numeric</MenuItem>
        <MenuItem value={2}>Just Character</MenuItem>
        <MenuItem value={3}>Just Numeric</MenuItem>
      </Select>
      {
        order == 2 ? "" : <FormControlLabel className="col-start-1 col-span-3" control={<Checkbox checked={digitChecked} onChange={e => setDigitChecked(e.target.checked)} />} label="Use Unit Digits" />
      }
      {
        order == 0 || order == 1 ?
          <FormControlLabel className="col-span-3" control={<Checkbox checked={separatorChecked} onChange={e => setSeparatorChecked(e.target.checked)} />} label="With Separator" /> : ''
      }
    </Box>
  )
}