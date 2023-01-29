import PropTypes from 'prop-types'
import { StatisticsSection, StatisticsTitle, StatisticsList, StatisticsItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection>
            {title && (<StatisticsTitle className="title">{title}</StatisticsTitle>)}

            
            <StatisticsList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatisticsItem key={ id } label={label}>
                            <span className="label">{ label }</span>
                            <span className="percentage">{ percentage }%</span>
                        </StatisticsItem>
                    )
                })}
            </StatisticsList>
        </StatisticsSection>
    )
};


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })).isRequired,
};
