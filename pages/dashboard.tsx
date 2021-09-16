import { Can } from "../components/Can";
import { useAuth } from "../context/AuthContext"
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <h1>Dashboard {user?.email}</h1>
      <Can permissions={['metrics.list']}>
        <div>Metricas</div>
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})