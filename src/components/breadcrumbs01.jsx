import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../pages/Main";
import Sub from "../pages/Sub";

function BreadcrumbExample01() {
  const navigate = useNavigate();

  return (
    <Breadcrumb>
      <Breadcrumb.Item
        onClick={() => {
          navigate("/");

          // navigate(1);
          // navigate(-1);
          // pagination
        }}
      >
        홈
      </Breadcrumb.Item>
      <Breadcrumb.Item
        onClick={() => {
          navigate("/Sub");
        }}
      >
        모든 커피
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

<Routes>
  <Route path="/" element={<Main />} />
  <Route path="/Sub" element={<Sub />} />
</Routes>;

export default BreadcrumbExample01;
