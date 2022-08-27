//layout
import Layout from "../layouts/default";

//import Head
import Head from 'next/head';

function Home() {

    return(
        <Layout>
            <Head>
                <title>Home - SantriKoding.com</title>
            </Head>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border-0">
                          <div className="container-fluid py-5">
                              <h2 className="display-6 fw-bold">LARAVEL JWT + NEXT.JS</h2>
                              <p className="col-md-12 fs-4">Belajar Authentication Laravel JWT dengan Next.js di SantriKoding.com</p>
                              <a href="https://santrikoding.com/kategori/next-js" target="_blank" className="btn btn-primary btn-lg" type="button">Selengkapnya</a>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home