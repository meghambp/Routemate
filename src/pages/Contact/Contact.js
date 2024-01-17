import { useNavigate, Outlet } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  }
  return (
    <main>
      <div className="component">Contact</div>
      <Outlet />
      <button onClick={handleSubmit}>Back to Home</button>
    </main>
  )
}
