import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { HiSun, HiMoon  } from "react-icons/hi";

export function ThemeToggler() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true) }, []);

    if (!mounted) return <></>;

    return (
        <button
            onClick={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }}
        >
            {resolvedTheme === "dark" ? <HiSun color="white"/> : <HiMoon />}
        </button>
    );
}