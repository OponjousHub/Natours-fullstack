import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import TourContextProvider from "./store/tour-context";
import RootLayout from "./pages/rootLayout";
import SettingsRootLayout from "./pages/settingsRootLayout";
import OverviewPage from "./pages/overview";
import TourPage from "./pages/tour/tourPage";
import Users from "./pages/user/users";
import EditUser from "./pages/user/editUser";
import UserDetail from "./pages/user/userDetail";
import BookingsPage from "./pages/bookingsPage";
import BookingOnTour from "./components/booking/bookingOnTour";
import BillingsPage from "./pages/billingsPage";
import ReviewsPage from "./pages/reviewsPage";
import ReviewOnTour from "./components/review/reviewOnTour";
import Login, { action as loginAction } from "./pages/loginPage";
import Signup from "./pages/signUpPage";
import ManageToursPage from "./pages/tour/manageTourPage";
import CreateTourPage from "./pages/tour/createTourPage";
import { action as CreateTourAction } from "./components/createTourForm";
import EditTourPage from "./pages/tour/editTourPage";
import UserBooking from "./pages/admin/userBooking";
import UserReview from "./pages/admin/userReview";
import AboutUser from "./pages/admin/aboutUser";
import Delivered from "./pages/admin/delivered";
import ManageReview from "./pages/admin/manageReview";
import ManageBooking from "./pages/admin/manageBooking";
import "./App.css";
import ManageUsersPage from "./pages/user/manageUsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: "tours",
        children: [
          {
            index: true,
            element: <OverviewPage />,
          },
          {
            path: ":tourId",
            element: <TourPage />,
          },
        ],
      },
      {
        path: "users",
        element: <SettingsRootLayout />,
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: ":userId",
            // element: <UserDetail />,
            children: [
              {
                index: true,
                element: <UserDetail />,
              },
              {
                path: "edit",
                element: <EditUser />,
              },
            ],
          },
          {
            path: "booking",
            element: <BookingsPage />,
          },
          {
            path: "review",
            element: <ReviewsPage />,
          },
          {
            path: "billing",
            element: <BillingsPage />,
          },
          {
            path: "new",
            element: <CreateTourPage />,
            action: CreateTourAction,
          },
          {
            path: "manage-tours",
            // element: <ManageToursPage />,
            children: [
              {
                index: true,
                element: <ManageToursPage />,
              },
              {
                path: "edit",
                element: <EditTourPage />,
              },
            ],
          },
          {
            path: "manage-users",
            element: <ManageUsersPage />,
          },
          {
            path: ":userId",
            children: [
              {
                index: true,
                element: <ManageUsersPage />,
              },
              {
                path: "edit",
                element: <EditUser />,
                // },
                // {
                //   path: ":infoId",
                children: [
                  {
                    index: true,
                    element: <AboutUser />,
                  },
                  {
                    path: "delivered",
                    element: <Delivered />,
                  },
                  {
                    path: "booking",
                    element: <UserBooking />,
                  },
                  {
                    path: "review",
                    element: <UserReview />,
                  },
                ],
              },
            ],
          },
          {
            path: "manage-review",
            element: <ManageReview />,
          },
          {
            path: "manage-booking",
            element: <ManageBooking />,
          },
        ],
      },

      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
    </>
  );
}

export default App;
