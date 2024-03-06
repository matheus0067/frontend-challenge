"use client"

import {FilterContextProvider } from "contexts/filterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: ReactNode
}

const theme = {
    desktopBreakpoint: "96.8rem",
    tableBreakpoint: "76.8rem",
}

export function DefaultProviders({ children } : DefaultProvidersProps){
    const client = new QueryClient();

    return(
        <QueryClientProvider client={client}>
        <FilterContextProvider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </FilterContextProvider>
    </QueryClientProvider>
    )
}