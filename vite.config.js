import { defineConfig } from "vite"; //fct  of configuration in vite
import react from '@vitejs/plugin-react';
export default defineConfig ({
    plugins: [react()],
    root: "src",
});