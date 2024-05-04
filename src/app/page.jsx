'use client'
import styles from "./styles/App.module.css";
import Navbar from "./components/Navbar";
import ActivityCard from "./components/activity/ActivityCard";
import TransactionForm from "./components/transaction/TransactionForm";
import AdsBanner from "./components/AdsBanner";
import "./styles/global.css";
import { TransactionsProvider } from "./context/TransactionContext";

export default function Home() {
  return (
    <div>
      <TransactionsProvider>
      <div className={styles.wrapper}>

      <header>
        <Navbar />
      </header>

      <main className={styles.mainContainer}>
        <div className={styles.activityContainer}>
          <ActivityCard />
        </div>

        <div className={styles.sideContainer}>
          <TransactionForm />

          <AdsBanner />
        </div>
      </main>
    </div>
    </TransactionsProvider>
  </div>
  );
}
