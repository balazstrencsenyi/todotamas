import Login from "./HandleLogin";

function LogInPage( { auth }) {

  return (
    <div className="LogInPageContainer">
      <Login auth={auth} />
    </div>
  )
}

export default LogInPage;

