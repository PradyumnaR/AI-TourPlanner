"use client";

import { useCallback, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

import { Themes } from "@/consts";
import { useTheme } from "@/providers/theme-provider";

function ThemeToggle() {
  const { theme, changeTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    changeTheme(theme);
  });

  return (
    <button onClick={toggleTheme} className='btn btn-sm btn-outline'>
      {theme === Themes.light ? (
        <BsSunFill className='h-4 w-4' />
      ) : (
        <BsMoonFill className='h-4 w-4' />
      )}
    </button>
  );
}

export default ThemeToggle;
