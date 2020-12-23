import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Todo } from "../data/todo/todo.interface";
import { findTodo } from "../data/todo/todo.service";
import React from "react";

type Props = {
  todos: Todo[];
};

export default function Home({ todos }: Props) {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello xd</h1>
        {todos.map(({ name }) => name).join(", ")}

        <button onClick={() => setShowForm(!showForm)}>Add</button>

        {showForm ? (
          <form method="POST" action="/api/createToDo">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" />

            <label htmlFor="test">Test:</label>
            <input type="text" name="test" />
            <button type="submit">Add</button>
          </form>
        ) : null}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const todos = await findTodo();
  return {
    props: {
      todos,
    },
  };
};
