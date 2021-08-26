


import BaseLayout from '@/components/layouts/BaseLayouts'
import BasePage from '@/components/BasePage'
import PortfolioApi from '@/libs/api/portfoliosApi'
import Link from 'next/link'


const Portfolio = (props) => {
    return (
        <BaseLayout>
            <BasePage header="Portfolio Detail">
                <PortfolioDetailPage {...props}/>
            </BasePage>
        </BaseLayout>
    )
}

const PortfolioDetailPage = ({ portfolio }) => {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{portfolio.title}</h5>
                <h6 className="card-subtitle text-muted">{portfolio.jobTitle}</h6>
                <a href={`https://${portfolio.companyWebsite}`} target="_blank" className="card-link card-subtitle mb-2 text-muted">{portfolio.company}</a>
                <p className="card-text">{portfolio.description}</p>
                <Link href={`/portfolios/${portfolio._id}/edit`}>
                    <a className="card-link">Edit</a>
                </Link>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const json = await new PortfolioApi().getAll();
    const portfolios = json.data;

    const paths = portfolios.map(p => {
        return {
            params: { id: p._id }
        }
    })
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const json = await new PortfolioApi().getById(params.id)
    const portfolio = json.data;
    return {
        props: {
            portfolio
        }
    }
}

// export async function getServerSideProps({query}) {
//     const json = await new PortfolioApi().getById(query.id);
//     const portfolio = json.data;

//     return {props: {portfolio}};
//   }

export default Portfolio;
