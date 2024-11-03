"use client";
import { MUIThemeProvider } from "@/theme/mui-theme-provider";
import { Box } from "@mui/material";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { SnackbarProvider } from "notistack";

export const MainLayout = ({ children }: any) => {
  return (
    <MUIThemeProvider>
      <SnackbarProvider
        preventDuplicate
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
      >
        <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
          <Box sx={{ position: "sticky", top: 0, zIndex: 1000 }}>
            <Header />
          </Box>
          <Box sx={{ flexGrow: 1, p: 2 }}>{children}</Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      </SnackbarProvider>
    </MUIThemeProvider>
  );
};
