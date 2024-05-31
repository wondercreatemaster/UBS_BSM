import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import PagesLayout from 'layout/Pages';
import SimpleLayout from 'layout/Simple';
import { SimpleLayoutType } from 'config';
import { element } from 'prop-types';
import Charges from 'pages/maintenance/charges';

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/error/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/error/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction/under-construction')));
const Property = Loadable(lazy(() => import('pages/maintenance/property')));
const Ownership = Loadable(lazy(() => import('pages/maintenance/ownership')));

const AutoGenerateBilling = Loadable(lazy(() => import('pages/transaction/autogeneratebilling')));
const InvoiceBilling = Loadable(lazy(() => import('pages/transaction/invoicebilling')));
const Payment = Loadable(lazy(() => import('pages/transaction/payment')));

const AppContactUS = Loadable(lazy(() => import('pages/contact-us')));
// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'sample-page',
          element: <SamplePage />
        }
      ]
    },
    {
      path: '/',
      element: <SimpleLayout layout={SimpleLayoutType.SIMPLE} />,
      children: [
        {
          path: 'contact-us',
          element: <AppContactUS />
        }
      ]
    },
    {
      path: '/maintenance',
      element: <DashboardLayout />,
      children: [
        {
          path: 'property',
          element: <Property />
        },
        {
          path: 'generate-units',
          element: <MaintenanceError500 />
        },
        {
          path: 'delete-generated-units',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'ownership',
          element: <Ownership />
        },
        {
          path: 'charges',
          element: <Charges />
        }
      ]
    },
    {
      path: '/transaction',
      element: <DashboardLayout />,
      children: [
        {
          path: 'invoice-billing',
          element: <InvoiceBilling />
        },
        {
          path: 'auto-generate-billing',
          element: <AutoGenerateBilling />
        },
        {
          path: 'delete-generated-units',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'payment',
          element: <Payment />
        },
        {
          path: 'ownership',
          element: <Ownership />
        },
        {
          path: 'charges',
          element: <Charges />
        }
      ]
    },
    {
      path: '*',
      element: <MaintenanceError />
    }
  ]
};

export default MainRoutes;
