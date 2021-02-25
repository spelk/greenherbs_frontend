import styles from '../styles/modals.module.css';

const Modals = ({ modalName, setModalName, login }) => {

  switch (modalName) {
    case "AUTHORIZATION":
      return (
        <div className={ styles.popupContainer }>
          <div>
            <button onClick={() => setModalName('')} >Close Popup</button>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input />
            <input />
            <button onClick={async () => await login()} >Log in</button>
          </form>
        </div>
      );
    default:
      return <></>;
  }
};

export default Modals;
