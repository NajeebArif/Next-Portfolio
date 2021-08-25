
import BaseLayout from '@/components/layouts/BaseLayouts'
import BasePage from '@/components/BasePage'
import PortfolioApi from '@/libs/api/portfoliosApi'


const Portfolio = ({ portfolio }) => {
    return (
        <BaseLayout>
            <BasePage header="Portfolio Detail">
                {
                    JSON.stringify(portfolio)
                }
            </BasePage>
        </BaseLayout>
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

export async function getStaticProps({params}){
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

//     return {props: { portfolio }};
//   }

export default Portfolio;
