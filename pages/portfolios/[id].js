
import BaseLayout from '@/components/layouts/BaseLayouts'
import BasePage from '@/components/BasePage'
import PortfolioApi from '@/libs/api/portfoliosApi'


const Portfolio = ({portfolio}) => {
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

export async function getServerSideProps({query}) {
    const json = await new PortfolioApi().getById(query.id);
    const portfolio = json.data;
  
    return {props: { portfolio }};
  }

export default Portfolio;
