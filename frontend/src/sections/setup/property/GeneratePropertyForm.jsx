import { Box, Checkbox, FormControlLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material"
import { openSnackbar } from "api/snackbar";
import { useEffect, useState } from "react"

const generateStrings = (start, end) => {
  const result = [];

  const incrementString = (str) => {
    let carry = 1;
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      let charCode = str.charCodeAt(i) + carry;
      if (charCode > 'Z'.charCodeAt(0)) {
        charCode = 'A'.charCodeAt(0);
        carry = 1;
      } else {
        carry = 0;
      }
      newStr = String.fromCharCode(charCode) + newStr;
    }
    if (carry) {
      newStr = 'A' + newStr;
    }
    return newStr;
  };

  const isGreaterOrEqual = (str1, str2) => {
    if (str1.length !== str2.length) {
      return str1.length > str2.length;
    }
    return str1 >= str2;
  };

  const isLessOrEqual = (str1, str2) => {
    if (str1.length !== str2.length) {
      return str1.length < str2.length;
    }
    return str1 <= str2;
  };

  if (!isLessOrEqual(start, end)) {
    throw new Error('Start string must be less than or equal to end string');
  }

  let current = start;
  while (isLessOrEqual(current, end)) {
    result.push(current);
    current = incrementString(current);
  }

  return result;
}

export const WithNumFloorNo = ({ setUNITNOs }) => {

  const [checked, setChecked] = useState(false)

  const [head, setHead] = useState('')
  const [separator, setSeparator] = useState('')

  const [floordig, setFloorDig] = useState(1)

  const [floorfrom, setFloorfrom] = useState(1)
  const [floorto, setFloorto] = useState(1)

  const [unitdig, setUnitDig] = useState(1)

  const [unitfrom, setUnitfrom] = useState(1)
  const [unitto, setUnitto] = useState(1)

  useEffect(() => {
    if (floorfrom > floorto)
      setFloorto(floorfrom)
  }, [floorfrom])

  useEffect(() => {
    if (unitfrom > unitto)
      setUnitto(unitfrom)

    if (checked && unitfrom.length > unitto.length)
      setUnitto(unitfrom)
  }, [unitfrom])

  useEffect(() => {
    setUNITNOs([])
  }, [])

  useEffect(() => {
    let floordigs = []
    for (let i = parseInt(floorfrom); i <= parseInt(floorto); i++) {
      floordigs.push(i.toString().padStart(floordig, '0'))
    }

    let unitdigs = []
    if (checked) {
      try {
        unitdigs = generateStrings(unitfrom, unitto)
      }
      catch (err) {
        console.log(err)
      }
    }
    else {
      for (let i = parseInt(unitfrom); i <= parseInt(unitto); i++)
        unitdigs.push(i.toString().padStart(unitdig, '0'))
    }

    let final = []
    for (let i of floordigs)
      for (let j of unitdigs)
        final.push(head + separator + i + separator + j);
    setUNITNOs(final)
  }, [checked, head, separator, floordig, floorfrom, floorto, unitdig, unitfrom, unitto])

  const handleUnitFrom = e => {
    if (checked)
      setUnitfrom(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''))
    else
      setUnitfrom(e.target.value)
  }

  const handleUnitTo = e => {
    if (checked)
      setUnitto(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''))
    else
      setUnitto(e.target.value)
  }

  return (
    <Box className="grid grid-cols-12 gap-3 items-baseline">
      <Typography className="col-start-7">Separator</Typography>
      <Typography className="col-span-2">Floor Digit</Typography>
      {
        checked ? "" : <Typography className="col-start-11">Unit Digits</Typography>
      }

      <OutlinedInput className="col-start-7" value={separator} onChange={e => {
        if (e.target.value.length <= 1)
          setSeparator(e.target.value)
      }} />
      <OutlinedInput className="col-span-2" type="number" inputProps={{ min: 1, max: 3 }} value={floordig} onChange={e => setFloorDig(e.target.value)} />
      {
        checked ? "" : <OutlinedInput className="col-start-11 col-span-2" type="number" inputProps={{ min: 1, max: 5 }} value={unitdig} onChange={e => setUnitDig(e.target.value)} />
      }

      <Typography className="col-start-1 col-span-3">Unit No From</Typography>
      <OutlinedInput className="col-span-3" value={head} onChange={e => setHead(e.target.value.toUpperCase())} />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type="number" inputProps={{ min: 1, max: 10 ** floordig - 1 }} value={floorfrom} onChange={e => setFloorfrom(e.target.value)} />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type={checked ? "text" : "number"} inputProps={!checked && { min: 1, max: 10 ** unitdig - 1 }} value={unitfrom} onChange={handleUnitFrom} />

      <Typography className="col-span-3">Unit No To</Typography>
      <OutlinedInput className="col-span-3" value={head} disabled />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type="number" inputProps={{ min: floorfrom, max: 10 ** floordig - 1 }} value={floorto} onChange={e => setFloorto(e.target.value)} />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type={checked ? "text" : "number"} inputProps={!checked && { min: unitfrom, max: 10 ** unitdig - 1 }} value={unitto} onChange={handleUnitTo} />

      <FormControlLabel className="col-start-8 col-span-3" control={<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />} label="With Character Unit No" />
    </Box>
  )
}

export const WithCharFloorNo = ({ setUNITNOs }) => {
  const [checked, setChecked] = useState(false)

  const [head, setHead] = useState('')
  const [separator, setSeparator] = useState('')
  const [floor, setFloor] = useState('')

  const [unitdig, setUnitdig] = useState(1)

  const [unitfrom, setUnitfrom] = useState(1)
  const [unitto, setUnitto] = useState(1)

  const handleUnitFrom = e => {
    if (checked)
      setUnitfrom(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''))
    else
      setUnitfrom(e.target.value)
  }

  const handleUnitTo = e => {
    if (checked)
      setUnitto(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''))
    else
      setUnitto(e.target.value)
  }

  useEffect(() => {
    if (unitfrom > unitto)
      setUnitto(unitfrom)

    if (checked && unitfrom.length > unitto.length)
      setUnitto(unitfrom)
  }, [unitfrom])

  useEffect(() => {
    setUNITNOs([])
  }, [])

  useEffect(() => {
    let unitdigs = []
    if (checked) {
      try {
        unitdigs = generateStrings(unitfrom, unitto)
      }
      catch (err) {
        console.log(err)
      }
    }
    else {
      for (let i = parseInt(unitfrom); i <= parseInt(unitto); i++)
        unitdigs.push(i.toString().padStart(unitdig, '0'))
    }

    let final = unitdigs.map(item => head + separator + floor + separator + item)
    setUNITNOs([...final])
  }, [checked, head, separator, floor, unitdig, unitfrom, unitto])

  useEffect(() => {
    if (checked) {
      setUnitfrom('')
      setUnitto('')
    }
    else {
      setUnitfrom(1)
      setUnitto(1)
    }
  }, [checked])

  return (
    <Box className="grid grid-cols-12 gap-3 items-baseline">
      <Typography className="col-start-7">Separator</Typography>
      <Typography className="col-span-2">Floor No</Typography>
      {
        checked ? "" : <Typography className="col-start-11">Unit Digits</Typography>
      }

      <OutlinedInput className="col-start-7" value={separator} onChange={e => {
        if (e.target.value.length <= 1)
          setSeparator(e.target.value)
      }} />
      {
        checked ? "" : <OutlinedInput className="col-start-11 col-span-2" type="number" inputProps={{ min: 1, max: 5 }} value={unitdig} onChange={e => setUnitdig(e.target.value)} />
      }

      <Typography className="col-start-1 col-span-3">Unit No From</Typography>
      <OutlinedInput className="col-span-3" value={head} onChange={e => setHead(e.target.value.toUpperCase())} />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" value={floor} onChange={e => setFloor(e.target.value.toUpperCase())} />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type={checked ? "text" : "number"} inputProps={!checked && { min: 1, max: 10 ** unitdig - 1 }} value={unitfrom} onChange={handleUnitFrom} />

      <Typography className="col-span-3">Unit No To</Typography>
      <OutlinedInput className="col-span-3" value={head} disabled />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" value={floor} />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type={checked ? "text" : "number"} inputProps={!checked && { min: unitfrom, max: 10 ** unitdig - 1 }} value={unitto} onChange={handleUnitTo} />

      <FormControlLabel className="col-start-8 col-span-3" control={<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />} label="With Character Unit No" />
    </Box>
  )
}

export const WithoutFloorNo = ({ setUNITNOs }) => {

  const [head, setHead] = useState('')
  const [separator, setSeparator] = useState('')

  const [unitdig, setUnitdig] = useState(1)

  const [unitfrom, setUnitfrom] = useState(1)
  const [unitto, setUnitto] = useState(1)

  useEffect(() => {
    setUNITNOs([])
  }, [])

  useEffect(() => {
    let final = []
    for (let i = parseInt(unitfrom); i <= parseInt(unitto); i++)
      final.push(head + separator + i.toString().padStart(unitdig, '0'))
    setUNITNOs([...final])
  }, [head, separator, unitdig, unitfrom, unitto])

  return (
    <Box className="grid grid-cols-12 gap-3 items-baseline">
      <Typography className="col-start-7">Separator</Typography>
      <Typography className="col-span-2">Unit Digits</Typography>

      <OutlinedInput className="col-start-7" value={separator} onChange={e => {
        if (e.target.value.length <= 1)
          setSeparator(e.target.value)
      }} />
      <OutlinedInput type="number" className="col-span-2" inputProps={{ min: 1, max: 5 }} value={unitdig} onChange={e => setUnitdig(e.target.value)} />

      <Typography className="col-start-1 col-span-3">Unit No From</Typography>
      <OutlinedInput className="col-span-3" value={head} onChange={e => setHead(e.target.value.toUpperCase())} />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type="number" inputProps={{ min: 1, max: 10 ** unitdig - 1 }} value={unitfrom} onChange={e => setUnitfrom(e.target.value)} />

      <Typography className="col-start-1 col-span-3">Unit No To</Typography>
      <OutlinedInput className="col-span-3" value={head} disabled />
      <OutlinedInput disabled value={separator} />
      <OutlinedInput className="col-span-2" type="number" inputProps={{ min: unitfrom, max: 10 ** unitdig - 1 }} value={unitto} onChange={e => setUnitto(e.target.value)} />
    </Box>
  )
}

export const SpecChar = ({ setUNITNOs }) => {

  const [headfrom, setHeadfrom] = useState('')
  const [headto, setHeadto] = useState('')

  const [tailfrom, setTailfrom] = useState('')
  const [tailto, setTailto] = useState('')

  const [separator, setSeparator] = useState('')

  const [order, setOrder] = useState(0)

  const [digitChecked, setDigitChecked] = useState(false)
  const [separatorChecked, setSeparatorChecked] = useState(false)

  const [unitdig, setUnitdig] = useState(1);

  useEffect(() => {
    setUNITNOs([])
  }, [])

  useEffect(() => {
    switch (order) {
      case 0:
        if (tailfrom.length > tailto.length || (tailfrom.length == tailto.length && tailfrom > tailto))
          setTailto(tailfrom)
        break;
      case 1:
        if (tailfrom > tailto)
          setTailto(tailfrom)
        break;
    }
  }, [tailfrom])

  useEffect(() => {
    switch (order) {
      case 1:
      case 2:
        if (headfrom.length > headto.length || (headfrom.length == headto.length && headfrom > headto))
          setHeadto(headfrom)
        break;
      case 0:
      case 3:
        if (headfrom > headto)
          setHeadto(headfrom)
        break;
    }
  }, [headfrom])


  const handleTailFrom = e => {
    if (order == 0)
      setTailfrom(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''))
    else
      setTailfrom(e.target.value)
  }

  const handleTailTo = e => {
    if (order == 0)
      setTailto(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''))
    else
      setTailto(e.target.value)
  }

  const handleHeadFrom = e => {
    if (order == 1 || order == 2)
      setHeadfrom(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''))
    else
      setHeadfrom(e.target.value)
  }

  const handleHeadTo = e => {
    if (order == 1 || order == 2)
      setHeadto(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''))
    else
      setHeadto(e.target.value)
  }

  useEffect(() => {
    let heads = [];
    let tails = [];
    let final = [];
    switch (order) {
      case 0:
        for (let i = parseInt(headfrom); i <= parseInt(headto); i++)
          if (digitChecked)
            heads.push(i.toString().padStart(unitdig, 0))
          else
            heads.push(i.toString())

        try {
          tails = generateStrings(tailfrom, tailto);
        }
        catch (err) {
          console.log(err)
        }


        for (let i of heads)
          for (let j of tails)
            if (separatorChecked)
              final.push(i + separator + j);
            else
              final.push(i + j);

        setUNITNOs(final);
        break;
      case 1:
        try {
          heads = generateStrings(headfrom, headto)
        }
        catch (err) {
          console.log(err)
        }

        for (let i = parseInt(tailfrom); i <= parseInt(tailto); i++)
          if (digitChecked)
            tails.push(i.toString().padStart(unitdig, 0))
          else
            tails.push(i.toString())

        for (let i of heads)
          for (let j of tails)
            if (separatorChecked)
              final.push(i + separator + j)
            else
              final.push(i + j)
        setUNITNOs(final)
        break;
      case 2:
        try {
          final = generateStrings(headfrom, headto)
        }
        catch (err) {
          console.log(err)
        }
        setUNITNOs(final)
        break;
      case 3:
        for (let i = parseInt(headfrom); i <= parseInt(headto); i++)
          if (digitChecked)
            final.push(i.toString().padStart(unitdig, '0'))
          else
            final.push(i)
        setUNITNOs(final)
        break;

    }
  }, [headfrom, headto, tailfrom, tailto, separator, digitChecked, separatorChecked])

  useEffect(() => {
    setHeadfrom('')
    setHeadto('')
    setTailfrom('')
    setTailto('')
    setSeparator('')
    setUnitdig(1)
  }, [order])
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
        order == 0 || order == 3 ? <OutlinedInput className="col-start-4 col-span-3" type="number" inputProps={{ min: 1, max: 5 }} value={unitdig} onChange={e => setUnitdig(e.target.value)} /> : ''
      }
      {
        order == 0 || order == 1 ?
          <>
            {
              separatorChecked ?
                <OutlinedInput className="col-start-7" value={separator} onChange={e => {
                  if (e.target.value.length <= 1)
                    setSeparator(e.target.value)
                }} /> : ''
            }
            {
              order == 1 ?
                <OutlinedInput className="col-start-8" type="number" inputProps={{ min: 1, max: 5 }} value={unitdig} onChange={e => setUnitdig(e.target.value)} /> : ''
            }
          </> : ''
      }

      <Typography className="col-start-1 col-span-3">Unit No From</Typography>
      <OutlinedInput
        className="col-span-3"
        value={headfrom}
        onChange={handleHeadFrom}
        type={order == 3 || order == 0 ? "number" : "text"}
        inputProps={(order == 3 || order == 0) && { min: 1, max: 10 ** unitdig - 1 }}
      />
      {
        order == 2 || order == 3 ? '' :
          <>
            {
              separatorChecked ? <OutlinedInput disabled value={separator} /> : ''
            }
            <OutlinedInput
              className="col-span-2"
              type={order == 1 && "number"}
              inputProps={order == 1 && { min: 1, max: 10 ** unitdig - 1 }}
              value={tailfrom}
              onChange={handleTailFrom}
            />
          </>
      }

      <Typography className="col-start-1 col-span-3">Unit No To</Typography>
      <OutlinedInput
        className="col-span-3"
        value={headto}
        onChange={handleHeadTo}
        inputProps={(order == 3 || order == 0) && { min: 1, max: 10 ** unitdig - 1 }}
        type={order == 3 || order == 0 ? "number" : "text"}
      />
      {
        order == 2 || order == 3 ? '' :
          <>
            {
              separatorChecked ? <OutlinedInput disabled value={separator} /> : ''
            }
            <OutlinedInput
              className="col-span-2"
              type={order == 1 && "number"}
              inputProps={order == 1 && { min: 1, max: 10 ** unitdig - 1 }}
              value={tailto}
              onChange={handleTailTo}
            />
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