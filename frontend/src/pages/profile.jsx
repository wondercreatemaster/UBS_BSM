import { Outlet } from "react-router";
import { useRef } from "react"

import { Grid } from "@mui/material";

import ProfileCard from "sections/profile/ProfileCard";
import ProfileTabs from "sections/profile/ProfileTabs";

const Profile = () =>
{
  const inputRef = useRef(null);

  const focusInput = () =>
  {
    inputRef.current?.focus();
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ProfileCard focusInput={focusInput} />
      </Grid>
      <Grid item xs={12} md={3}>
        <ProfileTabs focusInput={focusInput} />
      </Grid>
      <Grid item xs={12} md={9}>
        <Outlet context={inputRef} />
      </Grid>
    </Grid>
  );
}

export default Profile