import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import PagesLayout from 'layout/Pages';
import SimpleLayout from 'layout/Simple';
import { SimpleLayoutType } from 'config';
import { element } from 'prop-types';
import { Navigate, Outlet } from 'react-router';

const Dashboard = Loadable(lazy(() => import('pages/dashboard')))

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/error/404')));
// const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/error/500')));
// const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction/under-construction')));
const Property = Loadable(lazy(() => import('pages/setup/property')));
const EditProperty = Loadable(lazy(() => import('pages/setup/editproperty')));
const AddProperty = Loadable(lazy(() => import('pages/setup/addproperty')));
const GenerateProperty = Loadable(lazy(() => import('pages/setup/generateproperty')));

const Ownership = Loadable(lazy(() => import('pages/setup/ownership')));
const AddOwner = Loadable(lazy(() => import('pages/setup/addowner')))
const Charges = Loadable(lazy(() => import('pages/setup/charges')))

const AutoGenerateBilling = Loadable(lazy(() => import('pages/transaction/autogeneratebilling')));
const InvoiceBilling = Loadable(lazy(() => import('pages/transaction/invoicebilling')));
const Payment = Loadable(lazy(() => import('pages/transaction/payment')));
const Invoice = Loadable(lazy(() => import('pages/transaction/invoice')))

const Restore = Loadable(lazy(() => import('pages/housekeeping/restore')))

const Profile = Loadable(lazy(() => import('pages/profile')))

const TabPersonal = Loadable(lazy(() => import('sections/profile/TabPersonal')))
const TabPayment = Loadable(lazy(() => import('sections/profile/TabPayment')))
const TabPassword = Loadable(lazy(() => import('sections/profile/TabPassword')))
const TabSettings = Loadable(lazy(() => import('sections/profile/TabSettings')))

const AppContactUS = Loadable(lazy(() => import('pages/contact-us')));
// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    // {
    //   path: '/',
    //   element: <DashboardLayout />,
    //   children: [
    //     {
    //       path: 'sample-page',
    //       element: <SamplePage />
    //     }
    //   ]
    // },
    // {
    //   path: '/',
    //   element: <SimpleLayout layout={SimpleLayoutType.SIMPLE} />,
    //   children: [
    //     {
    //       path: 'contact-us',
    //       element: <AppContactUS />
    //     }
    //   ]
    // },
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: <Dashboard />
        }
      ]
    },
    {
      path: '/profile',
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: <Profile />,
          children: [
            {
              path: '',
              element: <Navigate to="personal" />
            },
            {
              path: 'personal',
              element: <TabPersonal />
            },
            {
              path: 'payment',
              element: <TabPayment />
            },
            {
              path: 'password',
              element: <TabPassword />
            },
            {
              path: 'settings',
              element: <TabSettings />
            }
          ]
        }
      ]
    },
    {
      path: '/setup',
      element: <DashboardLayout />,
      children: [
        {
          path: 'property',
          children: [
            {
              path: 'edit/:id',
              element: <EditProperty />
            },
            {
              path: 'add',
              element: <AddProperty />
            },
            {
              path: 'generate',
              element: <GenerateProperty />
            },
            {
              path: '',
              element: <Property />
            },
          ]
        },
        {
          path: 'ownership',
          children: [
            {
              path: '',
              element: <Ownership />
            },
            {
              path: 'add',
              element: <AddOwner />
            }
          ]
        },
        {
          path: 'tenant',
          element: <Charges />
        }
      ]
    },
    {
      path: '/transaction',
      element: <DashboardLayout />,
      children: [
        {
          path: 'invoice',
          element: <Invoice />
        },
        {
          path: 'credit-note',
          element: <AutoGenerateBilling />
        }
      ]
    },
    {
      path: '/housekeeping',
      element: <DashboardLayout />,
      children: [
        {
          path: 'restore',
          element: <Restore />
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
