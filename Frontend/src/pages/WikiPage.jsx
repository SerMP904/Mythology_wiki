import FooterComponent from "../components/footerComponent/FooterComponent";
import HeaderComponent from "../components/headerComponent/headerComponent";
import { Outlet } from "react-router-dom";

const WikiPage = () => {
  return (
     <>
      <HeaderComponent />
      <div className="outlet-min-height">
      <Outlet />
      </div>
      <FooterComponent/>
    </>
  )
}

export default WikiPage
