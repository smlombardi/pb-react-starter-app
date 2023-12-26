import Layout from "./Layout";
import PageTitle from "../components/PageTitle";
import AccordionComponent from "../components/Accordion";

export default function Home() {
  return (
    <Layout>
      <PageTitle ttl="Home" layout="container" />
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
        <div className="row mt-5">
          <div className="col-md-6">
            <AccordionComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
}
