import { signIn, signOut, useSession } from "next-auth/react";

const Home = () => {
  const {data: session, status} = useSession();
  const isUsser = !!session?.user
  return (
    <div>
      {status === "loading" && <p>Loading..</p>}
      {!isUsser && (
          <button onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/" }) }>
            Sign in
          </button>
      )}
      {isUsser && (
        <>
          Signed in as {session.user?.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  )
}

export default Home
