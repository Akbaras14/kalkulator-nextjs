import styles from './kalculator.module.css';
import Kalkulator from './kalkulator';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <main className={styles.main}>
      <header className={styles.header}>Kalkulator sederhana</header>
        <Kalkulator />
      </main>
    </div>
  );
};

export default Dashboard;
