import "./NotFoundContainer.css";
import { useNavigate } from "react-router-dom";

const NotFoundContainer = () => {
  const navigate = useNavigate();
  return (
    <section className="notFoundContainer">
      <h1>Page Not Found</h1>
      <button onClick={() => navigate("/")}>Go home</button>
    </section>
  );
};

export default NotFoundContainer;
