import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost()
{
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <Image
                src="/images/CS.jpg"
                width={400}
                height={400}
                alt="JuHyun Eom"
            />
            <h1>Hello! My name is JuHyun Eom <br /> Nice to meet you
            </h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}

