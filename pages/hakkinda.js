import Head from 'next/head'
import Link from "next/link"
import "tailwindcss/tailwind.css";
export default function Home({ isConnected, loading, setLoading, project }) {
    return (
        <>
            <Head>
                <title> Devrialem | Hakkımızda </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div class="about-section">
            <h1 style={{
                fontFamily: "Consolas, monospace",
                fontSize: 20 + 'px',
            }}>HAKKIMIZDA</h1>
            <h2> Seyyah Takımı</h2>
            </div>

            <h2 className="text-center flex flex-auto justify-center items-center h-full lef-10 top-5" style = {{
                fontSize: 20 + 'px',
                color: 'white',
                textDecoration: 'underline'
            }}>TAKIM:</h2>
            <div class="row">
            <div class="column my-20">
                <div class="card">
                <img src="/team/cansel-varank-ahsen.jpg" alt="Jane" className="w-full"/>
                <div class="container">
                    <h2>Jane Doe</h2>
                    <p class="title">CEO & Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>jane@example.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
                </div>
            </div>

            <div class="column my-20">
                <div class="card">
                <img src="/team/cansel-varank-ahsen.jpg" alt="Mike" className="mx-70 w-full relative flex justify-center items-center"/>
                <div class="container">
                    <h2>Mike Ross</h2>
                    <p class="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
                </div>
            </div>

            {/*<div class="column my-20">
                <div class="card">
                <img src="/team/cansel-varank-ahsen.jpg" alt="John" className="w-full"/>
                <div class="container">
                    <h2>John Doe</h2>
                    <p class="title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>john@example.com</p>
                    <p><button class="button">Contact</button></p>
                </div>
                </div>
            </div>*/}
        </div>
        </>
    );
}