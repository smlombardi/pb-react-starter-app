import Layout from "./Layout";
import PageTitle from "../components/PageTitle";

export default function Item1() {
  return (
    <Layout>
      <PageTitle ttl="Item1" sub="I am a typical subhead" layout="container" />
      <div className="container mt-7">
        <div className="row">
          <div className="col">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dicta
            facilis earum repellat explicabo, quasi tenetur non quo odio dolor
            illum? Hic dolorem, explicabo omnis nemo asperiores provident unde
            error rerum vitae. Quasi cumque amet, ad labore nostrum expedita
            vero consectetur nam aut asperiores maxime. Sed itaque expedita quos
            assumenda!
          </div>
        </div>
      </div>
    </Layout>
  );
}
