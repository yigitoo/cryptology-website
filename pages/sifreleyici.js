import Head from 'next/head'
import Link from "next/link"
import { useState } from 'react';
import { connectToDatabase } from '@lib/mongodb'
import "tailwindcss/tailwind.css";

export default function Decoder({ isConnected, loading, setLoading, project }) {
   

    return (
        // <div className="flex justify-center bg-green-600">
        <>
        <Head>
            <title> Devrialem | Ana sayfa </title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container bg-white rounded shadow p-6 m-4 w-10/12 lg:w-3/4">
            {isConnected ? (
            <>
                <form action="/api/db">
                    <label name="text"></label>
                    <input type="text" name="text" />
                    <button type="submit">GÖNDER</button>
                </form>
            </>
            ) : (
            <h2 className="text-red-500 pt-4">
                You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
                for instructions.
            </h2>
            )}
        </main>
        </>
        // </div>
    )
}
export async function getServerSideProps(context) {
    const { client, db } = await connectToDatabase()
    // const db = client.db();
  
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
  
    const isConnected = await client.isConnected()
    // const todoCollection = db.collection("todos");
    const projectCollection = db.collection("project");
  
    // const todos = await todoCollection.find({}).toArray();
    const project = await projectCollection.find({}).toArray();
  
    return {
      props: { isConnected , hotels: JSON.parse(JSON.stringify(project)) },
    }
  }
  