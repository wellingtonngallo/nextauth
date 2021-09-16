import { destroyCookie } from "nookies";
import { useAuth } from "../context/AuthContext"
import { AuthTokenError } from "../errors/AuthTokenError";
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <h1>Dashboard {user?.email}</h1>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})