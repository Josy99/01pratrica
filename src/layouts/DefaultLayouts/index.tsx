import { Header } from "../../components/Header"
import { Outlet } from "react-router-dom"
import { DefaultContainer } from "./style"

export function DefaultLayouts() {
  return (
    <DefaultContainer>
      <Header />
      <Outlet />
    </DefaultContainer>
  )
}
