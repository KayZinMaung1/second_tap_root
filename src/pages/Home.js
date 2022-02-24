import Cover from '../components/Home/Cover'
import Layout from '../components/Layout/Layout'
const Home = () => {
    return ( 
        <Layout children={<Cover/>}></Layout>
     );
}
 
export default Home;