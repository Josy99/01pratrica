import { DefaultLayouts } from "../src/layouts/DefaultLayouts"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Routes, Route } from "react-router-dom"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
