import React, { useMemo, useState } from 'react'

import { InfoCircle, ProfileTick } from 'iconsax-react';

import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, LinearProgress, Stack, Typography, useMediaQuery } from '@mui/material'

import EmptyReactTable from 'pages/tables/react-table/empty';

import MainCard from 'components/MainCard';
import InvoiceCard from 'components/cards/invoice/InvoiceCard';
import InvoiceChart from 'components/cards/invoice/InvoiceChart';
import
{
  CSVExport,
  DebouncedInput,
  HeaderSort,
  IndeterminateCheckbox,
  RowSelection,
  SelectColumnSorting,
  TablePagination
} from 'components/third-party/react-table';

import AlertProductDelete from 'sections/transaction/invoice/AlertProductDelete';

import { openSnackbar } from 'api/snackbar';


const Invoice = () =>
{

  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [invoiceId, setInvoiceId] = useState(0);

  const widgetsData = [
    {
      title: 'Paid',
      count: '$7,825',
      percentage: 70.5,
      isLoss: false,
      invoice: '9',
      color: theme.palette.success,
      chartData: [200, 600, 100, 400, 300, 400, 50]
    },
    {
      title: 'Unpaid',
      count: '$1,880',
      percentage: 27.4,
      isLoss: true,
      invoice: '6',
      color: theme.palette.warning,
      chartData: [100, 550, 300, 350, 200, 100, 300]
    },
    {
      title: 'Overdue',
      count: '$3,507',
      percentage: 27.4,
      isLoss: true,
      invoice: '4',
      color: theme.palette.error,
      chartData: [100, 550, 200, 300, 100, 200, 300]
    }
  ];

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
        header: 'Invoice Id',
        accessorKey: 'id',
        meta: { className: 'cell-center' }
      },
      {
        header: 'User Info',
        accessorKey: 'customer_name',
        cell: ({ row, getValue }) => (
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar
              alt="Avatar"
              size="sm"
              src={getImageUrl(`avatar-${!row.original.avatar ? 1 : row.original.avatar}.png`, ImagePath.USERS)}
            />
            <Stack spacing={0}>
              <Typography variant="subtitle1">{getValue()}</Typography>
              <Typography color="text.secondary">{row.original.email}</Typography>
            </Stack>
          </Stack>
        )
      },
      {
        header: 'Create Date',
        accessorKey: 'date'
      },
      {
        header: 'Due Date',
        accessorKey: 'due_date'
      },
      {
        header: 'Quantity',
        accessorKey: 'quantity'
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (cell) =>
        {
          switch (cell.getValue())
          {
            case 'Cancelled':
              return <Chip color="error" label="Cancelled" size="small" variant="light" />;
            case 'Paid':
              return <Chip color="success" label="Paid" size="small" variant="light" />;
            case 'Unpaid':
            default:
              return <Chip color="info" label="Unpaid" size="small" variant="light" />;
          }
        }
      },
      {
        header: 'Actions',
        meta: { className: 'cell-center' },
        disableSortBy: true,
        cell: ({ row }) =>
        {
          return (
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
              <Tooltip title="View">
                <IconButton
                  color="secondary"
                  onClick={(e) =>
                  {
                    e.stopPropagation();
                    navigation(`/apps/invoice/details/${row?.original?.id}`);
                  }}
                >
                  <Eye />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit">
                <IconButton
                  color="primary"
                  onClick={(e) =>
                  {
                    e.stopPropagation();
                    navigation(`/apps/invoice/edit/${row?.original?.id}`);
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
                    setInvoiceId(row?.original?.id);
                    handlerDelete(true);
                  }}
                >
                  <Trash />
                </IconButton>
              </Tooltip>
            </Stack>
          );
        }
      }
    ], // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleClose = (status) =>
  {
    if (status)
    {
      // deleteInvoice(invoiceId);
      openSnackbar({
        open: true,
        message: 'Column deleted successfully',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        variant: 'alert',
        alert: { color: 'success' }
      });
    }
    handlerDelete(false);
  };

  return <Grid container direction={matchDownSM ? 'column' : 'row'} spacing={2} sx={{ pb: 2 }}>
    <Grid item md={8}>
      <Grid container direction="row" spacing={2}>
        {widgetsData.map((widget, index) => (
          <Grid item sm={4} xs={12} key={index}>
            <MainCard>
              <InvoiceCard
                title={widget.title}
                count={widget.count}
                percentage={widget.percentage}
                isLoss={widget.isLoss}
                invoice={widget.invoice}
                color={widget.color.main}
              >
                <InvoiceChart color={widget.color} data={widget.chartData} />
              </InvoiceCard>
            </MainCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item md={4} sm={12} xs={12}>
      <Box
        sx={{
          background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
          borderRadius: 1,
          p: 1.75
        }}
      >
        <Stack direction="row" alignItems="flex-end" justifyContent="space-between" spacing={1}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar alt="Natacha" variant="rounded" type="filled">
              <ProfileTick style={{ fontSize: '20px' }} />
            </Avatar>
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body1" color="white">
                  Total Recievables
                </Typography>
                <InfoCircle color={theme.palette.background.paper} />
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography variant="body2" color="white">
                  Current
                </Typography>
                <Typography variant="body1" color="white">
                  109.1k
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography variant="body2" color="white">
              Overdue
            </Typography>
            <Typography variant="body1" color="white">
              62k
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="h4" color="white" sx={{ pt: 2, pb: 1, zIndex: 1 }}>
          $43,078
        </Typography>
        <Box sx={{ maxWidth: '100%' }}>
          <LinearWithLabel value={90} />
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <EmptyReactTable />
      {/* {invoiceLoading ? <EmptyReactTable /> : <ReactTable {...{ data: list, columns }} />} */}
      {/* <AlertProductDelete
        title={invoiceId.toString()}
        open={invoiceMaster ? invoiceMaster.alertPopup : false}
        handleClose={handleClose}
      /> */}
    </Grid>
  </Grid>
}

function LinearWithLabel({ value, ...others })
{
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress color="warning" variant="determinate" value={value} {...others} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="white">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default Invoice