import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Gear,
  ShoppingBagOpen,
  Star,
  CreditCard,
  Ticket,
  Users,
} from "@phosphor-icons/react";
import classes from "./settingsRootLayout.module.css";

function SettingsRootLayout() {
  const [isDropDawn, setIsDropDawn] = useState(false);
  const handleDropDawn = () => {
    setIsDropDawn(!isDropDawn ? true : false);
  };
  return (
    <>
      <div className={classes.section_settings}>
        <div className={classes.setting_container}>
          <aside className={classes.aside}>
            <ul className={classes.aside_ul}>
              <NavLink
                to={"/users"}
                className={({ isActive }) => (isActive ? classes.active : " ")}
                end
              >
                <li className={classes.aside_list} onClick={handleDropDawn}>
                  <Gear size={22} color="#fff" />
                  Settings
                </li>
              </NavLink>

              <NavLink
                to={"booking"}
                className={({ isActive }) => (isActive ? classes.active : " ")}
              >
                <li className={classes.aside_list} onClick={handleDropDawn}>
                  <ShoppingBagOpen size={22} color="#fff" />
                  My bookings
                </li>
              </NavLink>

              <NavLink
                to={"review"}
                className={({ isActive }) => (isActive ? classes.active : " ")}
              >
                <li className={classes.aside_list} onClick={handleDropDawn}>
                  <Star size={22} color="#fff" />
                  My Reviews
                </li>
              </NavLink>

              <NavLink
                to={"billing"}
                className={({ isActive }) => (isActive ? classes.active : " ")}
              >
                <li className={classes.aside_list} onClick={handleDropDawn}>
                  <CreditCard size={22} color="#fff" />
                  Billings
                </li>
              </NavLink>
            </ul>
            <div className={classes.section_admin}>
              <h2>Admin</h2>
              <hr />
              <ul className={classes.aside_ul}>
                <li onClick={handleDropDawn}>
                  <p className={classes.aside_list}>
                    <Ticket size={22} color="#fff" />
                    Manage Tour
                  </p>
                </li>
                {isDropDawn && (
                  <ul className={classes.dropdawn_box}>
                    <NavLink
                      to={"new"}
                      className={({ isActive }) =>
                        isActive ? classes.active : " "
                      }
                    >
                      <li>Create New Tour</li>
                    </NavLink>

                    <NavLink
                      to={"manage-tours"}
                      className={({ isActive }) =>
                        isActive ? classes.active : " "
                      }
                    >
                      <li>Edit Tour</li>
                    </NavLink>
                  </ul>
                )}
                <NavLink
                  to={"manage-users"}
                  className={({ isActive }) =>
                    isActive ? classes.active : " "
                  }
                >
                  <li className={classes.aside_list} onClick={handleDropDawn}>
                    <Users size={22} color="#fff" />
                    Manage Users
                  </li>
                </NavLink>
                <NavLink
                  to={"manage-review"}
                  className={({ isActive }) =>
                    isActive ? classes.active : " "
                  }
                >
                  <li className={classes.aside_list} onClick={handleDropDawn}>
                    <Star size={22} color="#fff" />
                    Manage Reviews
                  </li>
                </NavLink>
                <NavLink
                  to={"manage-booking"}
                  className={({ isActive }) =>
                    isActive ? classes.active : " "
                  }
                >
                  <li className={classes.aside_list} onClick={handleDropDawn}>
                    <ShoppingBagOpen size={22} color="#fff" />
                    manage booking
                  </li>
                </NavLink>
              </ul>
            </div>
          </aside>
          <main className={classes.main}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default SettingsRootLayout;
