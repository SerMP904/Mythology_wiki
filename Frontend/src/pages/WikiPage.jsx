import FooterComponent from "../components/footerComponent/FooterComponent";
import HeaderComponent from "../components/headerComponent/headerComponent";
import { Outlet } from "react-router-dom";

const WikiPage = () => {
  return (
     <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent/>
    </>
  )
}

export default WikiPage
