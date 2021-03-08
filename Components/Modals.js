import styles from "../styles/modals.module.css";
import withAuth from "../Components/HOC/withAuth";

const Modals = ({ modalName, setModalName, login, userAuth, setUserAuth }) => {
  switch (modalName) {
    case "AUTHORIZATION":
      return (
        <div className={styles.popupContainer}>
          <div>
            <button onClick={() => setModalName("")}>Close Popup</button>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder={"email"}
              value={userAuth.username}
              onChange={(e) => {
                setUserAuth({
                  ...userAuth,
                  username: e.target.value
                })
              }}
            />
            <input
              placeholder={"password"}
              value={userAuth.password}
              onChange={(e) => {
                setUserAuth({
                  ...userAuth,
                  password: e.target.value
                })
              }}
            />
            <button onClick={async () => {console.log(userAuth); await login(); }}>Log in</button>
          </form>
        </div>
      );
    default:
      return <></>;
  }
};

export default withAuth(Modals);
