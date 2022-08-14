import Form from "react-bootstrap/Form";

function CheckReverseExample() {
  return (
    <Form>
      {["checkbox"].map((type) => (
        <div key={`reverse-${type}`} className="mb-3">
          <Form.Check
            reverse
            label="달콤"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="고소"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
          <Form.Check
            reverse
            label="상큼"
            type={type}
            id={`reverse-${type}-3`}
          />
          <Form.Check
            reverse
            label="쌉쌀"
            type={type}
            id={`reverse-${type}-3`}
          />
          <Form.Check
            reverse
            label="밸런스"
            type={type}
            id={`reverse-${type}-3`}
          />
          <Form.Check
            reverse
            label="깔끔한"
            type={type}
            id={`reverse-${type}-3`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckReverseExample;
