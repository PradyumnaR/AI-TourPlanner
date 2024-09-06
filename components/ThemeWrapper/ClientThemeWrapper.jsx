"use client";

import { useTheme } from "@/providers/theme-provider";

function ClientThemeWrapper({ children }) {
  const { theme } = useTheme();
  return (
    <div data-theme={theme} className='h-full'>
      {children}
    </div>
  );
}

export default ClientThemeWrapper;
