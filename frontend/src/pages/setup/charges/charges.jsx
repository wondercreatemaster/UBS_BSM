import PropTypes from 'prop-types';
import React, { useMemo, useState, Fragment, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import capitalize from '@mui/utils/capitalize';

// third-party
import { NumericFormat } from 'react-number-format';
import
{
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { rankItem } from '@tanstack/match-sorter-utils';

// project-import
import ScrollX from 'components/ScrollX';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import ChargeView from 'sections/setup/charges/ChargeView';
import
{
  DebouncedInput,
  HeaderSort,
  IndeterminateCheckbox,
  RowSelection,
  SelectColumnSorting,
  TablePagination
} from 'components/third-party/react-table';


// assets
import { Add, Edit, Eye, Setting2, Trash } from 'iconsax-react';
import axiosServices from 'utils/axios';
import { APP_DEFAULT_PATH } from 'config';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import { Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, ListItemText, Menu, MenuItem, OutlinedInput, Select } from '@mui/material';
import { openSnackbar } from 'api/snackbar';
import { calcmethods, phases, status, unittypes } from 'utils/domains';

export const fuzzyFilter = (row, columnId, value, addMeta) =>
{
  // rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // store the ranking info
  addMeta(itemRank);

  // return if the item should be filtered in/out
  return itemRank.passed;
};

// ==============================|| REACT TABLE - LIST ||============================== //

function ReactTable({ data, columns, rowCount, setPage, setChargesPerPage, setSearchword })
{
  const theme = useTheme();

  const [columnState, setColumnState] = useState([])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() =>
  {
    setColumnState([...columns])
  }, [])

  const [sorting, setSorting] = useState([
    {
      id: 'UNITNO',
      desc: false
    }
  ]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');

  useEffect(() =>
  {
    setPage(pagination.pageIndex + 1);
    setChargesPerPage(pagination.pageSize);
    setSearchword(globalFilter);
  }, [pagination, globalFilter])

  const table = useReactTable({
    data,
    columns: columnState,
    state: {
      sorting,
      rowSelection,
      globalFilter,
      pagination
    },
    enableRowSelection: true,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getRowCanExpand: () => true,
    getSortedRowModel: getSortedRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    //getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    manualFiltering: true,
    rowCount: rowCount,
    getExpandedRowModel: getExpandedRowModel(),
    globalFilterFn: fuzzyFilter,
    debugTable: true
  });

  const backColor = alpha(theme.palette.primary.lighter, 0.1);
  const [headers, setHeaders] = useState([]);

  useEffect(() =>
  {
    setHeaders([])
    columnState.map(
      (columns) =>
        // @ts-ignore
        columns.accessorKey &&
        setHeaders([...headers, {
          label: typeof columns.header === 'string' ? columns.header : '#',
          // @ts-ignore
          key: columns.accessorKey
        }])
    );
  }, [columnState])

  const navigate = useNavigate();

  const handleAddCharge = () =>
  {
    navigate('/setup/charges/add');
  };


  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
        width: 200,
      },
    },
  };

  const handleClick = (event) =>
  {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () =>
  {
    setAnchorEl(null);
  };

  return (
    <MainCard content={false}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ p: 3 }}>
        <DebouncedInput
          value={globalFilter ?? ''}
          onFilterChange={(value) => setGlobalFilter(String(value))}
          placeholder={`Search ${rowCount} records...`}
        />

        <Stack direction="row" spacing={1} alignItems="center">
          {/* <SelectColumnSorting {...{ getState: table.getState, getAllColumns: table.getAllColumns, setSorting }} /> */}
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <Setting2 />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {columns.map(column =>
            {
              if (column.id != "Row Selection" && column.header != "Actions")
                return (
                  <MenuItem key={column.header} onClick={() =>
                  {
                    if (columnState.filter(item => item.header == column.header).length > 0)
                      setColumnState([...columnState.filter(item => item.header != column.header)])
                    else
                      setColumnState([...columnState.slice(0, -1), column, columnState[columnState.length - 1]])
                  }}>
                    <Checkbox checked={columnState.filter(item => item.header == column.header).length > 0} />
                    <ListItemText primary={column.header} />
                  </MenuItem>
                )
            })
            }
          </Menu>

          <Button variant="contained" startIcon={<Add />} onClick={handleAddCharge} size="large">
            Add Charge
          </Button>
        </Stack>
      </Stack>
      <ScrollX>
        <Stack>
          <RowSelection selected={Object.keys(rowSelection).length} />
          <TableContainer>
            <Table>
              <TableHead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) =>
                    {
                      if (header.column.columnDef.meta !== undefined && header.column.getCanSort())
                      {
                        Object.assign(header.column.columnDef.meta, {
                          className: header.column.columnDef.meta.className + ' cursor-pointer prevent-select'
                        });
                      }

                      return (
                        <TableCell
                          key={header.id}
                          {...header.column.columnDef.meta}
                          onClick={header.column.getToggleSortingHandler()}
                          {...(header.column.getCanSort() &&
                            header.column.columnDef.meta === undefined && {
                            className: 'cursor-pointer prevent-select'
                          })}
                        >
                          {header.isPlaceholder ? null : (
                            <Stack direction="row" spacing={1} alignItems="center">
                              <Box>{flexRender(header.column.columnDef.header, header.getContext())}</Box>
                              {header.column.getCanSort() && <HeaderSort column={header.column} />}
                            </Stack>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <Fragment key={row.id}>
                    <TableRow>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                    {row.getIsExpanded() && (
                      <TableRow sx={{ '&:hover': { bgcolor: `${backColor} !important` } }}>
                        <TableCell colSpan={row.getVisibleCells().length}>
                          <ChargeView data={row.original} />
                        </TableCell>
                      </TableRow>
                    )}
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <>
            <Divider />
            <Box sx={{ p: 2 }}>
              <TablePagination
                {...{
                  setPageSize: table.setPageSize,
                  setPageIndex: table.setPageIndex,
                  getState: table.getState,
                  getPageCount: table.getPageCount,
                  initialPageSize: 10
                }}
              />
            </Box>
          </>
        </Stack>
      </ScrollX>
    </MainCard >
  );
}

// ==============================|| PRODUCT LIST ||============================== //

export default function Charges()
{
  const [page, setPage] = useState(1);
  const [rowCount, setRowCount] = useState(1);

  const [chargesPerPage, setChargesPerPage] = useState(10);
  const [charges, setCharges] = useState([]);
  const [searchword, setSearchword] = useState("");

  const [phaseFiltering, setPhaseFiltering] = useState([]);
  const [typeFiltering, setTypeFiltering] = useState([]);

  const [deleteCharge, setDeleteCharge] = useState({
    charge: {},
    dialog: false
  })
  const navigate = useNavigate();

  const handleDelete = () =>
  {
    axiosServices.delete(`/api/charge/${deleteCharge.charge._id}`)
      .then(res =>
      {
        if (res.data.success)
        {
          openSnackbar({
            open: true,
            message: "Successfully Deleted!",
            variant: 'alert',
            alert: {
              color: 'success'
            }
          })
          setDeleteCharge({ ...deleteCharge, dialog: false })
          axiosServices.post('/api/charge/getcharges', { chargesPerPage, searchword, page })
            .then(res =>
            {
              setCharges([...res.data.charges])
              setRowCount(res.data.totalCharges)
            })
        }
      })
      .catch(err =>
      {
        setDeleteCharge({ ...deleteCharge, dialog: false })
        openSnackbar({
          open: true,
          message: err,
          variant: 'alert',

          alert: {
            color: 'error'
          }
        })
      }
      )
  }

  useEffect(() =>
  {
    axiosServices.post('/api/charge/getcharges', { chargesPerPage, searchword, page })
      .then(res =>
      {
        setCharges(res.data.charges)
        setRowCount(res.data.totalCharges)
      })
  }, [page, searchword, chargesPerPage])

  const columns = useMemo(
    () => [
      {
        id: 'Row Selection',
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        )
      },
      {
        header: 'Charge Code',
        accessorKey: 'CHARCODE',
        meta: {
          className: 'cell-left'
        }
      },
      {
        header: 'Description',
        accessorKey: 'DESP',
        meta: {
          className: 'cell-left'
        }
      },
      {
        header: 'Calculate Method',
        accessorKey: 'CALMETHOD',
        cell: ({ row }) =>
        {
          return Object.keys(calcmethods)[row.original.CALMETHOD - 1]
        },
        meta: {
          className: 'cell-left'
        }
      },
      {
        header: 'Status',
        accessorKey: 'STATUS',
        cell: ({ row }) => status[row.original.STATUS - 1],
        meta: {
          className: 'cell-left'
        }
      },
      {
        header: 'Actions',
        meta: {
          className: 'cell-center'
        },
        cell: ({ row }) =>
        {
          const collapseIcon = row.getCanExpand() && row.getIsExpanded() ? <Add style={{ transform: 'rotate(45deg)' }} /> : <Eye />;
          return (
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
              <Tooltip title="View">
                <IconButton color={row.getIsExpanded() ? 'error' : 'secondary'} onClick={row.getToggleExpandedHandler()}>
                  {collapseIcon}
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit">
                <IconButton
                  color="primary"
                  onClick={(e) =>
                  {
                    navigate(`/setup/charges/edit/${row.original._id}`)
                    e.stopPropagation();
                  }}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  color="error"
                  onClick={(e) =>
                  {
                    e.stopPropagation();
                    console.log(row)
                    setDeleteCharge({
                      charge: row.original,
                      dialog: true
                    })
                  }}
                >
                  <Trash />
                </IconButton>
              </Tooltip>
            </Stack>
          );
        }
      }
    ],
    []
  );

  let breadcrumbLinks = [{ title: 'Home', to: APP_DEFAULT_PATH }, { title: 'Charges' }];

  return (
    <>
      <Breadcrumbs custom heading="Charges" links={breadcrumbLinks} />
      <ReactTable {...{ data: charges, columns, rowCount, setPage, setChargesPerPage, setSearchword, setPhaseFiltering, setTypeFiltering }} />

      <Dialog open={deleteCharge.dialog} onClose={() => setDeleteCharge({ ...deleteCharge, dialog: false })}>
        <DialogTitle>
          Are you sure you want to delete?
        </DialogTitle>
        <DialogContent>
          By deleting {deleteCharge.charge.UNITNO}, Its details will also be removed from Charges.
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={() => setDeleteCharge({ ...deleteCharge, dialog: false })}>Cancel</Button>
          <Button variant='contained' color='error' onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

ReactTable.propTypes = { data: PropTypes.array, columns: PropTypes.array, rowCount: PropTypes.number };
