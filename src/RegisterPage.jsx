import Register from "./handleRegister";

function RegisterPage({ auth }) {
  return (
    <div className="RegisterPageContainer">
      <Register auth={auth} />
    </div>
  );
}

export default RegisterPage;
