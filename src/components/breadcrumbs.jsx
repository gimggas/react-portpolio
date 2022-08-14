import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../pages/Main";
import Sub from "../pages/Sub";
import Detail from "../pages/Detail";

function BreadcrumbExample() {
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
      <Breadcrumb.Item
        onClick={() => {
          navigate("/Detail");
        }}
      >
        스프링 블렌드
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

<Routes>
  <Route path="/" element={<Main />} />
  <Route path="/Sub" element={<Sub />} />
  <Route path="/Detail" element={<Detail />} />
</Routes>;
export default BreadcrumbExample;
